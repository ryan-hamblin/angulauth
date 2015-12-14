'use strict';

describe('Controller: FbctrlJsCtrl', function () {

  // load the controller's module
  beforeEach(module('angulauthApp'));

  var FbctrlJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FbctrlJsCtrl = $controller('FbctrlJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FbctrlJsCtrl.awesomeThings.length).toBe(3);
  });
});
