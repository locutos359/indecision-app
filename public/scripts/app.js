'use strict';

// arguments object - not bound with arrow functions

var add = function add(a, b) {
    return a + b;
};
console.log(add(42, 15, 100));

// this keyword - no longer bound

var user = {
    name: 'Matt',
    cities: ['Sacramento', 'Atascadero', 'San Luis Obispo', 'Claremont', 'Seattle'],
    printPlacesLived: function printPlacesLived() {
        this.cities.map(function (city) {
            return city + '!';
        }).forEach(function (city) {
            return console.log(user.name + " has lived in " + city);
        });
    }
};
// user.printPlacesLived();

//Challenge
var multiplier = {
    numbers: [1, 5, 3, 74],
    multiplyBy: 6,
    multiply: function multiply() {
        var _this = this;

        this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        }).forEach(function (result) {
            return console.log(result);
        });
    }
};

multiplier.multiply();
