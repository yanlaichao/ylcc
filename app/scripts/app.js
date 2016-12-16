'use strict';

/**
 * @ngdoc overview
 * @name ylcApp
 * @description
 * # ylcApp
 *
 * Main module of the application.
 */
angular
	.module('ylcApp', []).controller("ylc", ["$scope", "$http", function($scope, $http) {
		$http({
			url: "http://47.90.20.200:1602/news1/",
			method: "get"
		}).then(function(resp) {
			
			$scope.news1 = resp.data
		}, function() {

		})
		$http({
			url: "http://47.90.20.200:1602/news-img1/",
			method: "get"
		}).then(function(resp) {
			console.log(resp.data)
			$scope.img1 = resp.data
		}, function() {

		})
		$http({
			url: "http://47.90.20.200:1602/news2/",
			method: "get"
		}).then(function(resp) {
			$scope.news2 = resp.data
		}, function() {

		})
		$http({
			url: "http://47.90.20.200:1602/news-img2/",
			method: "get"
		}).then(function(resp) {
			$scope.img2 = resp.data
		}, function() {

		})
	}]).directive("zd",function(){
		return{
			restrict:"ECMA",
			template:'<div><ul><li ng-repeat="x in news1">{{x.title}}</li></ul><div class="wd"><img ng-src="{{y.img}}" alt=""  ng-repeat="y in img1" ></div></div>',
			scope:true,
			replace:true
		}
	})
