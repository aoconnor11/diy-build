'use strict';

/* Controllers */


var app = angular.module('myApp', []);

app.controller('CompanyCtrl', function($scope, $http) {

  $http.get("data/test.json")
      .success(function (response) {$scope.names = response.records;});

  $scope.addRow = function(){
    $scope.names.push({ 'Name':$scope.Name, 'City': $scope.City, 'Country': $scope.Country});
    $scope.Name='';
    $scope.City='';
    $scope.Country='';
  }

  $scope.removeRow = function(Name){
    var index = -1;
    var comArr = eval( $scope.names );
    for( var i = 0; i < comArr.length; i++ ) {
      if( comArr[i].Name === Name ) {
        index = i;
        break;
      }
    }
    if( index === -1 ) {
      alert( "Something gone wrong" );
    }
    $scope.names.splice( index, 1 );
  };
});



controller('MyCtrl2', function ($scope) {
  // write Ctrl here

});
