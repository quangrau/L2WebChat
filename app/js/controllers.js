'use strict';

/* Controllers */

angular.module('L2WebChat.controllers', [])
.controller('chatCtrl', ['$scope', 'Socket', function($scope, Socket) {

  $scope.charInfo = {
    char_name: 'Sayoung',
    clan: null,
    ally: null,
    party: null
  };

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
   }];

   //init array messages
   $scope.arrMsg = [];

   var channel = Socket.openChannel('webchat');

  //init charInfo from server
  channel.on('initUser', function(res) {
    console.log(res);
    // charInfo.char_name = res.data.payload.char_name;
  });
  
  //listen channel on event "send:message"
  channel.on('send:message', function(res) {
    $scope.$apply(function(){
      $scope.arrMsg.push(res.data.payload); 
    });
  });

  //listen channel on event "send:pm:[char_name]"
  channel.on('send:message:' + $scope.charInfo.char_name.toLowerCase(), function(res) {
    $scope.$apply(function(){
      $scope.arrMsg.push(res.data.payload); 
    });
  });
  
  $scope.chatSend = function() {
    if ($scope.msg) {
     var prefix = $scope.msg[0],
         channel_type = 'normal',
         reciver = null,
         type = "send:message";

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
    else if (prefix == '"') {
      channel_type = "pm";
      var tmp = $scope.msg.match(/^(\S+)\s(.*)/).slice(1);
      $scope.msg = '"' + tmp[1];
      reciver = tmp[0].substring(1);
      type = type + ":" + reciver.toLowerCase();
    }

    if (channel_type != 'normal') {
      $scope.msg = $scope.msg.substring(1);
    }

    var dataMsg = {
      sender: $scope.charInfo.char_name,
      channel_type: channel_type,
      message: $scope.msg,
      reciver: reciver
    };

    channel.send(type, dataMsg);
    $scope.msg = '';

    $scope.arrMsg.push(dataMsg);
  }
};

$scope.isActive = function(channel_type) {
  return channel_type == $scope.activeTab
}

$scope.setActiveTab = function(channel_type) {
  $scope.activeTab = channel_type;
}

}]);
