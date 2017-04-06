var angular = require('angular');

module.exports = function ($scope, Contacts) {
  $scope.form = {
    name: '',
    telefone: '',
  };
  $scope.create = function (form) {
    var data = Contacts.getData();
    data.push(form);
    console.log(Contacts.getData());
  }
};