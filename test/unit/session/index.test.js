'use strict';



// Dependencies
//
var assert  = require('assert'),
    connect = require('connect'),
    index   = require('../../../lib/session/index');



describe('session index', function () {



    describe('exports.options', function () {

        it('should return an object containing the options for session management', function (done) {
            assert(typeof index.options.maxAge === 'object');
            assert(index.options.maxAge === null);
            done();
        });

    });



    describe('exports.store', function () {



        describe('#use', function () {

            var RedisStore, MemoryStore;

            before(function (done) {
                RedisStore  = require('connect-redis')(connect);
                MemoryStore = new connect.session.MemoryStore();
                done();
            });

            it('should set a connect-based session store for use', function (done) {
                index.store.use(RedisStore);
                assert.deepEqual(RedisStore, index.store.get());
                done();
            });

            it('should allow the user to use connect-redis by passing it\'s name');

        });



        describe('#get', function () {

            it('should return the connect-bassed session store');

        });

    });



    describe('exports.create', function () {

        it('should create a new session for the user with a unique id');

    });



    describe('exports.find', function () {



        it('should try to find the session from the connect session store');



        describe('when a session is not found', function () {

            it('should create a new one');

        });



        describe('when a session is found', function () {

            it('should attach a channel helper to the session');

            it('should allow the user to set a user id for the session');

            it('should bind the socket to the session');

            it('should attach a save helper method for the session');

        });



        it('should callback with the session for that user');



    });


});