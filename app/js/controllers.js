'use strict';

/* Controllers */

angular.module('L2WebChat.controllers', [])
  .controller('chatCtrl', ['$scope', function($scope) {

  	$scope.userName = "QuangRau";

  	//Init array channels
  	$scope.channels = [
  		{
  			id: 1,
  			title: 'All',
  			cls: 'general',
  			active: true
  		},
  		{
  			id: 2,
  			title: '+Trade',
  			cls: 'trade',
  			active: false
  		},
  		{
  			id: 3,
  			title: '#Party',
  			cls: 'party',
  			active: false
  		},
  		{
  			id: 4,
  			title: '@Clan',
  			cls: 'clan',
  			active: false
  		},
  		{
  			id: 5,
  			title: '$Alliance',
  			cls: 'alliance',
  			active: false
  		}

  	];

  	//init array messages
  	$scope.arrMsg = [
	  	{
	  		userName: 'QuangRau',
	  		channel: 'trade',
	  		content: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		userName: 'Tester',
	  		channel: 'general',
	  		content: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		userName: 'QuangRau',
	  		channel: 'shout',
	  		content: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		userName: 'QuangRau',
	  		channel: 'shout',
	  		content: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		userName: 'QuangRau',
	  		channel: 'clan',
	  		content: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	}
  	];

  	$scope.chatSend = function() {
  		if ($scope.msg) {
	        // $scope.list.push(this.text);
	        $scope.arrMsg.push({
	        	userName: $scope.userName,
	        	channel: 'general',
	        	content: $scope.msg
	        });

	        $scope.msg = '';
	      }
  	};


  }]);
