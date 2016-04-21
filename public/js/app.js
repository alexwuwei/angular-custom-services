require(__dirname + '/../../bower_components/angular/angular.js');
require(__dirname + '/../css/normalize.css');
require(__dirname + '/../css/main.css');
require(__dirname + '/../css/animate.css');

const app = angular.module('app', []);

require('./js/services/other-service')(app);

app.controller('ResourceController', ['$http', 'OtherService', function($http, OtherService) {

}]);

app.controller('AssetController', ['$http', 'OtherService', function($http,OtherService) {

}]);
