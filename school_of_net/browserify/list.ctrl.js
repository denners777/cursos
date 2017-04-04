module.exports = function ($scope, Contacts) {
  var obj = [{
      name: 'Denner',
      telefone: '55 5565-6566',
    },{
      name: 'Zé',
      telefone: '55 6569-8989',
    },{
      name: 'João',
      telefone: '21 5689-9632',
    }]

  $scope.data = Contacts.setData(obj);
};