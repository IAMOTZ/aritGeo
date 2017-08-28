const assert =  require('chai').assert;
const myApp = require('../src/main.js');

describe('Arit Geo Tests', function() {
 
    describe("handle valid input", function() {
        it("should return Arithmetic for [2,4,6,8,10,12]", function() {
            assert.equal(myApp.aritGeo([2,4,6,8]), "Arithmetic");
        });
        it("should return Geometric for [2,4,8,16,32,63]", function() {
            assert.equal(myApp.aritGeo([2,4,8,16]), "Geometric");
        });
        it("should return -1 for [2,1,4,7,29,6]", function() {
            assert.equal(myApp.aritGeo([2,1,4,7,29,6]), -1);
        });
        it("should return Arithmetic for [10,8,6,4,2]", function() {
            assert.equal(myApp.aritGeo([10,8,6,4,2]), "Arithmetic");
        });
        it("should return Arithmetic for [1,2,3,4,5]", function() {
            assert.equal(myApp.aritGeo([1,1,1,1,1]), "Arithmetic");
        });
    })
    describe("handle invalid input", function() {
        it("should return 0 for []", function() {
            assert.equal(myApp.aritGeo([]), 0);
        });
        it("should return 'not a sequence' for [1]", function() {
            assert.equal(myApp.aritGeo([1]), "not a sequence");
        });
        it("should return 'not a sequence' for string", function() {
            assert.equal(myApp.aritGeo('string'), "not a sequence");
        });
        it("should return 'not a sequence' for number", function() {
            assert.equal(myApp.aritGeo(6), "not a sequence");
        });
        it("should return 'not a sequence' for {object: 'object'}", function() {
            assert.equal(myApp.aritGeo({object: "object"}), "not a sequence");
        });
        it("should return 'not a sequence' for null", function() {
            assert.equal(myApp.aritGeo(null), "not a sequence");
        });
        it("should return 'not a sequence' for undefined", function() {
            assert.equal(myApp.aritGeo(undefined), "not a sequence");
        });
    })
});