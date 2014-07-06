'use strict';

/* Controllers */

angular.module('L2WebChat.controllers', [])
  .controller('chatCtrl', ['$scope', function($scope) {

  	$scope.userName = "QuangRau";
  	$scope.activeTab = 'normal';

  	//Init array channels
  	$scope.channels = [
  		{
  			channel_type: 'normal',
  			title: 'All',
  			cls: 'normal'
  		},
  		{
  			channel_type: 'market',
  			title: '+Trade',
  			cls: 'market'
  		},
  		{
  			channel_type: 'party',
  			title: '#Party',
  			cls: 'party'
  		},
  		{
  			channel_type: 'clan',
  			title: '@Clan',
  			cls: 'clan'
  		},
  		{
  			channel_type: 'ally',
  			title: '$Alliance',
  			cls: 'ally'
  		}

  	];

  	//init array messages
  	$scope.arrMsg = [
	  	{
	  		sender: 'QuangRau',
	  		channel_type: 'market',
	  		message: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		sender: 'Tester',
	  		channel_type: 'general',
	  		message: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		sender: 'QuangRau',
	  		channel_type: 'shout',
	  		message: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		sender: 'QuangRau',
	  		channel_type: 'shout',
	  		message: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	},
	  	{
	  		sender: 'QuangRau',
	  		channel_type: 'clan',
	  		message: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'
	  	}
  	];

  	$scope.chatSend = function() {
  		if ($scope.msg) {
  			var prefix = $scope.msg[0],
  				channel_type = 'normal';

  			if (prefix == '!')
  				channel_type = 'shout';
  			else if (prefix == '+')
  				channel_type = 'market';
  			else if (prefix == '#')
  				channel_type = 'party';
  			else if (prefix == '@')
  				channel_type = 'clan';
  			else if (prefix == '$')
  				channel_type = 'ally';

  			if (channel_type != 'normal') {
				$scope.msg = $scope.msg.substring(1);
  			}

	        // $scope.list.push(this.text);
	        $scope.arrMsg.push({
	        	sender: $scope.userName,
	        	channel_type: channel_type,
	        	message: $scope.msg
	        });

	        $scope.msg = '';
	      }
  	};

  	$scope.isActive = function(channel_type) {
  		return channel_type == $scope.activeTab
  	}

  	$scope.setActiveTab = function(channel_type) {
  		$scope.activeTab = channel_type;
  	}

  }]);
