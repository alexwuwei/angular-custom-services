require(__dirname + '/../public/js/app.js');
const angular = require('angular');
require('angular-mocks');

describe('service test', function() {
  var SomeOtherService;
  beforeEach(function(done) {
    angular.mock.module('app');
    angular.mock.inject(function(OtherService) {
      SomeOtherService = OtherService;
      done();
    });
  });
  it('should be a service', function() {
    expect(typeof SomeOtherService).toBe('object');
  });
  it('should return an object', function() {
    var testOrder = SomeOtherService.add('test');
    expect(typeof testOrder).toBe('object');
    expect(testOrder[0].text).toBe('test');
  })
})
