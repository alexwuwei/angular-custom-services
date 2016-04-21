require('./public/js/app.js')
const angular = require(__dirname + '/../../bower_components/angular/angular.js');
require('angular-mocks');

describe('service test', function() {
  var OtherService;
  beforeEach(angular.mock.module('app'))
  beforeEach(angular.mock.inject(function(OtherService) {
    OtherService = OtherService;
  }));
  it('should be a service', function() {
    expect(typeof OtherService).toBe('object')
  });
  it('should return an object', function(){
    var testOrder = OtherService('test');
    expect(typeof testOrder).toBe('object');
    expect(testOrder.text).toBe('test')
  })
})
