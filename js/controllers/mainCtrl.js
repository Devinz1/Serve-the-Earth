angular.module('ui.bootstrap.demo').controller('ProgressDemoCtrl', function ($scope, $firebase) {

  var firebase = new Firebase('https://servetheearth.firebaseio.com/');
  $scope.progressResult = $firebase(firebase).$asArray();
  console.log($scope.progressResult);
  var sync = $firebase(firebase)

  $scope.donate = function (index){
    //debugger;
    $id = index
    //console.log($scope.progressResult[index]);
   //console.log($scope.progressResult[index].donation)
    var donation = parseInt($scope.progressResult[index].donation)
    $scope.progressResult[index].raised = $scope.progressResult[index].raised + donation
    //console.log($scope.progressResult[index]);


    //sync.$save($id)
  }
//var list = $firebase(ref).$asArray();
//list.$add({ foo: "bar" }).then(function(ref) {
  //var id = ref.key();
  //console.log("added record with id " + id);
  //list.$indexFor(id); // returns location in the array
//});


  
  // $scope.getPercentage = function(){
  //  // return (($scope.raised / $scope.goal) * 100);
  //  $scope.percentage = (($scope.raised/$scope.goal)*100);
  // };



  //var $scope.moneyChart = sync.$asArray();
  //$scope.saveProgressResult = function(){sync = $firebase(progressResult);
  //
   // $scope.moneyChart.$add($scope.progressResult)
  //}


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