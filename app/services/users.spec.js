'use strict';
describe('User factory', function() {
    var Users;

    // The array of users our factory will provide us
    var userList = [{
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
    }, {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    }, {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
    }, {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill'
    }];

    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };
    // Before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));
    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));
    //A simple test defined the User factory exits
    it('should exists', function() {
        expect(Users).toBeDefined();
    });
    // A set of tests for our Users.all() method
    describe('Test all method', function() {
        // A simple test to verify the method all exists
        it('should exists', function() {
            expect(Users.all).toBeDefined();
        });

        // A test to verify that calling all() returns the array of users we hard-coded above
        it('should return hard-coded value', function() {
            expect(Users.all()).toEqual(userList);
        });
        it('should return one user object if it exists', function() {
            expect(Users.findById('2')).toEqual(singleUser);
        });
    });
});
