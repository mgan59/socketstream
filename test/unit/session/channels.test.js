'use strict';



describe('session channels', function () {



    describe('#list', function () {

        it('should return a list of channels that the client is currently subscribed to');

    });



    describe('#subscribe', function () {



        describe('when a channel is passed as a string', function () {

            it('should subscribe the session to that single channel');

        });



        describe('when a list of channels are passed in an array', function () {

            it('should subscribe the session to each of those channels');

        });


        describe('when an existing channel is subscribed to', function () {

            it('should not be added as it already exists in the list of channels');

        });



    });



    describe('#unsubscribe', function () {



        describe('when a channel is passed as a string', function () {

            it('should unsubscribe the session from that channel');

        });



        describe('when a list of channels are passed in an array', function () {

            it('should unsubscribe the session from each of those channels');

        });


        it('should tell the websocket subscriptions module to remove the socket id from the channel');



        describe('when a non-subscribed channel is unsubscribed from', function () {

            it('should not unsubscribe from the channel, as it was never subscribed to it in the first place');

        });



    });



    describe('#reset', function () {

        it('should unsubscribe the session from all of its listed channels');

    });



    describe('#_bindToSocket', function () {

        describe('when there are no existing channels on the session', function () {

            it('should set the channels list to an empty array');

        });

        it('should tell the websocket subscriptions module to add the socket id to that channel');

    });

});