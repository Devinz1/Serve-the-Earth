angular.module('ui.bootstrap.demo').controller('ProgressDemoCtrl', function ($scope, $firebase) {

  var firebase = new Firebase('https://servetheearth.firebaseio.com/');
  $scope.progressResult = $firebase(firebase).$asArray();
  console.log($scope.progressResult);

 $scope.raised = $scope.progressResult.raised;
  $scope.goal = $scope.progressResult.goal;
  $scope.percentage = $scope.progressResult.percentage;
  $scope.getPercentage = function(){
   // return (($scope.raised / $scope.goal) * 100);
   $scope.percentage = $scope.raised / $scope.goal * 100;

  }

 // $scope.max = 200;

  //$scope.random = function() {
    //var value = Math.floor((Math.random() * 100) + 1);
    //var type;

    //if (value < 25) {
      //type = 'success';
    //} else if (value < 50) {
      //type = 'info';
    //} else if (value < 75) {
      //type = 'warning';
    //} else {
      //type = 'danger';
    //}

    

    //$scope.dynamic = value;
    //$scope.type = type;
  //};
  //$scope.random();



//sync.$update("First Aid Kits",{goal:1000, raised:640,});
//sync.$update("bikes",{goal: 1000,  raised: 240});
//sync.$update("waterbottles",{goal: 1000, raised: 13});

  

 // $scope.randomStacked = function() {
    //$scope.stacked = [];
   // var types = ['success', 'info', 'warning', 'danger'];

   // for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
    //    var index = Math.floor((Math.random() * 4));
      //  $scope.stacked.push({
      //    value: Math.floor((Math.random() * 30) + 1),
     //     type: types[index]
     //   });
  //  }
//  };
//  $scope.randomStacked();
});