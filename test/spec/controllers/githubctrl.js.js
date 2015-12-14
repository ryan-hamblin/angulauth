'use strict';

describe('Controller: GithubctrlJsCtrl', function () {

  // load the controller's module
  beforeEach(module('angulauthApp'));

  var GithubctrlJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GithubctrlJsCtrl = $controller('GithubctrlJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GithubctrlJsCtrl.awesomeThings.length).toBe(3);
  });
});
