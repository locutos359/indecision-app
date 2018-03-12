// arguments object - not bound with arrow functions

const add = (a, b) => {
    return a + b;
}
console.log(add(42, 15, 100));

// this keyword - no longer bound

const user = {
    name: 'Matt',
    cities: ['Sacramento', 'Atascadero', 'San Luis Obispo', 'Claremont', 'Seattle'],
    printPlacesLived() {
        this.cities
            .map((city) => city + '!')
            .forEach((city) => console.log(user.name + " has lived in " + city));
    }
};
// user.printPlacesLived();

//Challenge
const multiplier = {
    numbers: [1, 5, 3, 74],
    multiplyBy: 6,
    multiply() {
        this.numbers
            .map((number) => number * this.multiplyBy)
            .forEach((result) => console.log(result));
    }
}

multiplier.multiply();