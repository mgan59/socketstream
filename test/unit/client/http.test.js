'use strict';

   //var router = new (require('../../../lib/http/router').Router),
   // import socket stream and scope the http module
   var http = require('../../../lib/socketstream').http,
   // then scope the router provided by the http
   router = http.router,
   gently = new (require('gently'));

describe('HTTP middleware', function () {


    describe('#set', function () {



        it('should allow the user to set options for the http middleware');



    });



    describe('#load', function () {



        it('should load SocketStream\'s middleware first');



        it('should then load any app-specific middleware next');



        it('should finally load the static asset serving middleware last');



    });



    describe('#route', function () {



        it('should if given a url and function, route requests for that url to that function', function(){
            
            router.on('/someRoute', function(){
                console.log('route callback');
            });

            // create our spy 
            gently.expect(router, 'route', function(event){
                console.log('\n--');
                console.log('event: ',event);
                console.log('--');
                event.should.equal('/someRoute');
            });

            //trigger emit
            router.route('/someRoute');

        });
        


        it('should if given just a url, return a serveClient function', function(){
            //router.route('/');
            /*
            gently.expect(router, 'route', function(event, callback){
                console.log('\n--');
                console.log('event: ',event);
                console.log(arguments);
                console.log('--');
            });
            */
            
            //router.on('/testClient');
            var test = gently.expect(router, 'route');
            router.route('/testClient');
            console.log('chk ', test);
        });



    });



});
