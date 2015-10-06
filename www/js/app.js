// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


var app=angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  app.controller('basic',function($scope,modes,enabled,regex) {
  $scope.number='';
    $scope.arr={
      num1:false,
      num2:false,
      num3:false,
      num4:false,
      num5:false,
      num6:false,
      num7:false,
      num8:false,
      num9:false,
      num0:false,
      slash:true,
      colon:true,
      plus:true,
      sub:true,
      dot:true,
      div:true,
      multi:true,
      to:true,
      year:true,
      mon:true,
      week:true,
      day:true,
      hour:true,
      min:true,
      sec:true,
    }
    //var $str='1234';

    $scope.num=function($n)
    {
      $scope.number += $n;
    }

////--------------------------------------------------------------------------------------------
    var disAll=function()
    {
      $scope.arr.num1=true;
      $scope.arr.num2=true;
      $scope.arr.num3=true;
      $scope.arr.num4=true;
      $scope.arr.num5=true;
      $scope.arr.num6=true;
      $scope.arr.num7=true;
      $scope.arr.num8=true;
      $scope.arr.num9=true;
      $scope.arr.num0=true;
      $scope.arr.plus=true;
      $scope.arr.sub=true;
      $scope.arr.div=true;
      $scope.arr.multi=true;
      $scope.arr.to=true;
      $scope.arr.year=true;
      $scope.arr.week=true;
      $scope.arr.mon=true;
      $scope.arr.day=true;
      $scope.arr.hour=true;
      $scope.arr.min=true;
      $scope.arr.sec=true;
      $scope.arr.slash=true;
      $scope.arr.dot=true;
      $scope.arr.colon=true;
    }
//--------------------------------------------------------------------------------------------

      $scope.check=function($s)
      {
        disAll();
        var d = regex.date_reg($scope.number,$s);
      //  var p = $scope.reg_piece($scope.number,$s);
        if(d)
      {
        enabled.dateEnabled($scope.arr,$scope.number,$s)
      }
        $scope.num($s);


      };

  });

