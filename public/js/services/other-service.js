module.exports = function(app) {
  app.factory('OtherService', function() {
    var orders = {};

    orders.list = [];

    orders.add = function(order) {
      orders.list.push({id: orders.list.length, text: order});
      return orders.list
    }


    return orders;
  });
};
