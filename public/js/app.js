require(__dirname + '/../../bower_components/angular/angular.js');
require(__dirname + '/../css/normalize.css');
require(__dirname + '/../css/main.css');
require(__dirname + '/../css/animate.css');

const app = angular.module('app', []);

require('./services/other-service')(app);

app.controller('RenderController', ['$http', 'OtherService', function($http, OtherService) {
  var self = this;

  self.newOrder = 'Dummy Order';

  self.orders = OtherService.list;

}]);

app.controller('PushController', ['$http', 'OtherService', function($http,OtherService) {
  var self = this;

  self.addOrder = function(order) {
    OtherService.add(order);
    self.newOrder = '';
  };
}]);
