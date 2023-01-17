'use strict';

/*

// Strict mode make the script throw any error istead of silently passing them and continuing execution. It also restrict uses you can have to avoid mistakes.

// -- FUNCTIONS

let question = true;
const passTest = true;

//there is three kinds of functions :
//declaration :
function calc1(a, b){
    return a + b;
};

//expression :
const calc2 = function(a, b){
    return a - b;
};

//arrow function :
const calc3 = (a, b) => {
    return a * b;
};


//They work the same but are different in later use cases. Eg : arrow functions cannot access 'this'

let a = 10;
let b = 5;
console.log(calc1(a, b));
console.log(calc2(a, b));
console.log(calc3(a, b));

// -- CODING CHALLENGE 1
let d1 = 44,
    d2 = 23,
    d3 = 74,
    k1 = 65,
    k2 = 54,
    k3 = 49;

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3
};

const checkWinner = function(d1, d2, d3, k1, k2, k3){
    const dAvg = calcAverage(d1, d2, d3);
    const kAvg = calcAverage(k1, k2, k3);

    if(dAvg > 2 * kAvg){
        return 'Dolphins wins !'
    } else if (kAvg > 2 * dAvg){
        return 'Koalas wins !'
    } else {
        return 'Nobody wins...'
    };
};

console.log(checkWinner(d1, d2, d3, k1, k2, k3));

d1 = 85;
d2 = 54;
d3 = 41;
k1 = 23;
k2 = 34;
k3 = 27;

console.log(checkWinner(d1, d2, d3, k1, k2, k3));



///////////////////////////////////////////////
//              ARRAYS                       //
///////////////////////////////////////////////

const array1 = [1, 2, 3];
const array2 = new Array(4, 5, 6)

// --- CHALLENGE

function calcTip(bill){
    if(bill >= 50 & bill <=300){
        return 0.15 * bill;
    } else return 0.2 * bill;
}

let bills = [125, 555, 44];

let tips = bills.map(calcTip);

let total = bills.map((bill, i) => {
    return bill + tips[i];
})

console.log(tips, total);

////////////////////////////////////////////////
//              OBJECTS                       //
////////////////////////////////////////////////

const person = {
    firstName : 'Jean',
    lastName : 'François',
    birth : 1995,
    calcAge : function(){
        return 2023 - this.birth;
    }
};

console.log(person.calcAge());
console.log(person['firstName']);

// --- CHALLENGE

let mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69,

    calcBMI(){
        return this.mass / (this.height ** 2);
    }
},

john = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95,

    calcBMI(){
        return this.mass / (this.height ** 2);
    }
};

if(john.calcBMI() > mark.calcBMI()){
    console.log(`John has higher BMI`);
} else {
    console.log(`Mark has higher BMI`);
}

*/

// Loops

const data = [
    'Alabama',
    'Toronto',
    10,
    'Mexico',
    'New York'
];

console.log('--- All ---')
for(let i = 0; i < data.length; i++){
    console.log(data[i]);
}

console.log('--- Continue ---')
for(let i = 0; i < data.length; i++){
    if(typeof data[i]!= 'string') continue;
    console.log(data[i]);
}

console.log('--- Break ---')
for(let i = 0; i < data.length; i++){
    if(typeof data[i]!= 'string') break;
    console.log(data[i]);
}