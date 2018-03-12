const nameVar = 'Matt';
console.log('nameVar', nameVar);

let nameLet = 'Matthew';
nameLet = 'Aaron';
console.log('nameLet', nameLet);

const nameConst = 'Mateo';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Addie';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping
const fullName = 'Matthew Richman';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
