module.exports = {
  // App Settings
  // MongoClient.connect("mongodb://localhost:27017/", function (err, db) {

  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
  GITHUB_SECRET: process.env.GITHUB_SECRET || '4f0652eee937600abb3a0c1e516cbcc46e97b09f'

};