'use strict';

describe('Controller: TwitterctrlJsCtrl', function () {

  // load the controller's module
  beforeEach(module('angulauthApp'));

  var TwitterctrlJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TwitterctrlJsCtrl = $controller('TwitterctrlJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TwitterctrlJsCtrl.awesomeThings.length).toBe(3);
  });
});
