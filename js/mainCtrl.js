angular.module('friendsList').controller('mainCtrl',function($scope){
  $scope.title = "Hello!!!";
  $scope.friends = ['Dad','Brenjals','Timmy'
  ];

  $scope.addFriend = function(newFriend){
    $scope.friends.push(newFriend);
    $scope.newFriend = '';
  };

});
