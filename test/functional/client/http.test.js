'use strict';

   //var router = new (require('../../../lib/http/router').Router),
   // import socket stream and scope the http module
   var http = require('../../../lib/socketstream').http,
   // then scope the router provided by the http
   router = http.router,
   gently = new (require('gently'));

// spin up the socket stream app provided in the test-fixture

            var fixtureSSApp = 'node '+__dirname+'/../../fixtures/project/app.js';
            console.log('-- ',fixtureSSApp);
var exec = require('child_process').exec;
var sys = require('sys');
exec(fixtureSSApp, function(err, stdout, stderr){
    console.log(err);
    console.log('on the funeral');
    console.log(stdout);
    console.log(stderr);
});
describe('Functional - HTTP middleware', function () {
    
    




    describe('#route', function () {




        it('should if given just a root url, return a socket stream client', function(){

            //router.route('/');
            
            /*
            router.route('/');
            gently.expect(router, 'route', function(event, callback){
                console.log('\n--');
                console.log('event: ',event);
                console.log(arguments);
                console.log('--');
            });
            
            //router.on('/testClient');
            var test = gently.expect(router, 'route');
            router.route('/testClient');
            console.log('chk ', test);
            */
        });



    });



});
