'use strict';

describe('Directive: datePicker', function () {

  // load the directive's module and view
  beforeEach(module('leaveTrackerAppApp'));
  beforeEach(module('app/directives/datePicker/datePicker.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-picker></date-picker>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the datePicker directive');
  }));
});