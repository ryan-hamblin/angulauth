var path = require('path');
var qs = require('querystring');

var async = require('async');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var jwt = require('jwt-simple');
var moment = require('moment');
var mongoose = require('mongoose');
var request = require('request');

var config = require('./config');

var app = express();

var userSchema = mongoose.model('User', new mongoose.Schema({
  instagramId: { type: String, index: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  username: String,
  fullName: String,
  picture: String,
  accessToken: String
}));

// userSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password')) {
//     return next();
//   }
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       user.password = hash;
//       next();
//     });
//   });
// });

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function(err) {
  console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../../client')));



// ########### !! GITHUB AUTH !! ########## //


app.post('/auth/github', function(req, res) {
  var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  var userApiUrl = 'https://api.github.com/user';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GITHUB_SECRET,
    redirect_uri: req.body.redirectUri
  };

  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params }, function(err, response, accessToken) {
    accessToken = qs.parse(accessToken);
    var headers = { 'User-Agent': 'Satellizer' };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: userApiUrl, qs: accessToken, headers: headers, json: true }, function(err, response, profile) {

      // Step 3a. Link user accounts.
      if (req.headers.authorization) {
        User.findOne({ github: profile.id }, function(err, existingUser) {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a GitHub account that belongs to you' });
          }
          var token = req.headers.authorization.split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);
          User.findById(payload.sub, function(err, user) {
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.github = profile.id;
            user.picture = user.picture || profile.avatar_url;
            user.displayName = user.displayName || profile.name;
            user.save(function() {
              var token = createJWT(user);
              res.send({ token: token });
            });
          });
        });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ github: profile.id }, function(err, existingUser) {
          if (existingUser) {
            var token = createJWT(existingUser);
            return res.send({ token: token });
          }
          var user = new User();
          user.github = profile.id;
          user.picture = profile.avatar_url;
          user.displayName = profile.name;
          user.save(function() {
            var token = createJWT(user);
            res.send({ token: token });
          });
        });
      }
    });
  });
});




// ########### !! SERVER START !! ########## //

app.listen(app.get('port'), function() {
  console.log('Butt server listening on port ' + app.get('port'));
});