module.exports = function(app) {
  app.factory('OtherService', function() {
    var orders = {}

    orders.list = [];

    orders.add = function(order) {
      orders.list.push({id: orders.list.length, text: message});
    }
    

    return orders;
  });
};
