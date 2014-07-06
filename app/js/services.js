'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('L2WebChat.services', []).
  value('version', '0.1').
  factory('Socket', [function(q, $rootscope) {

  	// Select a transport implementation:
	var transport = SockJS; // SockJS can be used alternatively

	// Receive the path for the connection from the django template context:
	var endpoint = 'http://l2vh.com/ec';

	// Define connection options:
	var options = {
	  // Get the omnibus authentication token:
	  auth_token: '1:52b826527409567f2433b7f69a719da9a4683608'
	};

	// Create a new connection using transport, endpoint and options
	var connection = new Omnibus(transport, endpoint, options);
	/*var channel = connection.openChannel('webchat');

	//init userInfo from server
	channel.on('initUser', function(res) {
		userInfo.char_name = res.data.payload.char_name;
	});

	Service.getCharInfo = function() {
		return userInfo;
	}

	service.send = function(eventName, data) {
		channel.send(eventName, data);
	};

	service.on = function (eventName, callback) {
      channel.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });*/

  	return connection;
  }])
