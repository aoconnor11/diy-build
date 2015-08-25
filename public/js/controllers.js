'use strict';

/* Controllers */


var app = angular.module('myApp', ['ngResource']);

app.factory("Post", function($resource){
 return $resource("/api/name");
 // return $resource("/data/test");
})




app.controller('CompanyCtrl', function($scope, $http, Post) {

  $http.get("data/test.json")
      .success(function (response) {$scope.names = response.records;});

  $scope.addRow = function(){
    $scope.names.push({ 'Name':$scope.Name, 'City': $scope.City, 'Country': $scope.Country});
    var dataObj = {
      Name : $scope.Name,
      City : $scope.City,
      Country : $scope.Country
    };
  //  Post.save($scope.names);

   var res= $http.post("/api/name", dataObj);
   res.success(function(data, status, headers, config) {
      $scope.message = data;
    });
    res.error(function(data, status, headers, config) {
     console.log( "failure message: " + JSON.stringify({data: data}));
    });

    $scope.Name='';
    $scope.City='';
    $scope.Country='';


  }

  $scope.removeRow = function(Name){
    var index = -1;
    var comArr = eval( $scope.names );
    for( var i = 0; i < comArr.length; i++ ) {
      if( comArr[i].Name === Name ) {
        Post.delete({id:Name});
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
