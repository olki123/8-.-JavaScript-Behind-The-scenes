'use strict';
/*
function calcAge(birthYear) {
  //calc age function is global scope
  const age = 2037 - birthYear;

  //create function inside other function

  function printAge() {
    const output = ` you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge(); //call the function to see  the results

  return age;
}

const firstName = 'jonas'; // global variable

calcAge(1991);
*/

//function decleration and var variables are hoisted and let , const are not hoisted they will operates in block only.

//Hoisting:  mean it allows functions , variables and classes before they are declared.
/*
//Clip 95 Hoisting and TDZ in practice TDZ: Temporal dead zone

//variables
console.log(me);
//console.log(job); in TDZ in console
//console.log(year); same here in TDZ

var me = 'jonas';
let job = 'teacher';
const year = 1991;

//Functions

console.log(addDecl(2, 3)); //give 5 bcx function
//console.log(addExpr(2, 3)); //error before inialisation bcx it is const and it is in temporal dead zone TDZ
//console.log(addArrow(2, 3));
//console.log(addArrow(2, 3)); // same error bcx it is const,however if you change it to var it gives same problem with addArrow is not a function.
function addDecl(a, b) {
  //addDecl mean decleration
  return a + b;
}

const addExpr = function (a, b) {
  //Expr mean expression
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

// use const and let (if you change) not var. declare function at last
console.log(undefined);

if (!numProducts) deleteShoppingCart(); //

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1; //write wondow on console.you will find x=1 and not y and z value.
//Bcz they declare as let and const it wll not appear on window
let y = 2;
const z = 3;

// lets test

console.log(x === window.x); //true. var create property in global window
console.log(y === window.y); //false
console.log(z === window.z); //false
*/

/*
//clip 96 This keyword: Rules of this keyword

//1. This keyword is a special variable that is executed for every function.

//2. this keyword is not static mean it can change(dynamic).

//3. arrow function does not get its own this keyword

//4. this keyword is attach to the object calling method.

//if 5. function called eventListener then the this keyword always point to the DOM element then the handler function attach to.

//6. this keyword never point to the variable environment

//clip 96 this keyword practice

//console.log(this); //this keyword appear on window as global scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this); //shows undefined bcz we are in strict mode.this in strict mode = undefined
};

calcAge(1991);

//lets try for arrow function

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this); //in arrow function this keyword shows window on console
  //bcz in arrow function this keyword does not get its own this keyword(rule).arrow function use lexical this keyword
  //mean it use this keyword its parent function
  //lexical keyword in this case is window in global scope
};

calcAgeArrow(1980);

//use this keyword inside a calcAge method
const jonas = {
  year: 1991,
  calcAge: function () {
    //calcAge method
    console.log(this); //this keyword inside a method will be object(rule)
    console.log(2037 - this.year); //give 46 this is object as jonas
  },
};

jonas.calcAge(); //jonas is the owner of the method

//lets create new object matilda

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge; //in console write matilda it gives an 2017 and calcAge.we copy it from one object to another.
//this is called method borrowing.so we don't need to write in duplicate way.
matilda.calcAge(); //give 20. this keyword called the object matilda.that is why called this keyword is dynamic not static(rule)

const f = jonas.calcAge;
f(); //uncaught error bcx  f() is regular function, not attach to any object
*/

/*
//clip 98 regular functions vs arrow functions

//var firstName = 'matilda'; //appear hey matilda.not use var variable as we go for long list on window

const jonas = {
  firstName: 'jonas', //add firstName property
  year: 1991,
  calcAge: function () {
    //calcAge method
    // console.log(this); //this keyword inside a method will be object(rule)
    console.log(2037 - this.year); //give 46 this is object as jonas
    //solution 1
    // const self = this; //self or that

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //console.log(this.year >= 1981 && this.year <= 1996);riginal one is here instead of self is this
    //};

    //solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); //called function
  },

  greet: () => {
    console.log(this); //is window,if we look in window we see firstName is matilda.
    console.log(`Hey ${this.firstName}`); //gives matilda bcx inside this function.this keyword is window
  },
};

jonas.greet(); //gives hey undefined reason arrow function have own this keyword.
//it takes or use  from surrounding
jonas.calcAge();

// argument keyword

const addExpr = function (a, b) {
  //Expr mean expression
  console.log(arguments);
  return a + b;
};

addExpr(2, 5); //gives 0=2, 1=5 in console when arrow down of argument
addExpr(2, 5, 8, 1); // same on above

var addArrow = (a, b) => {
  console.log(arguments); //argumen is not defined shows in console, argument is not working in arrow function, it works in regular function
  return a + b;
};
addArrow(2, 4, 6, 7, 8);
*/

/*
// clip 99 primitives vs objects(primitive vs reference types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend); //friend and me have same age lets find out why?
console.log('Me:', me);

//To go for above code les understand java script primitives data  types and every thing else are object which are below.

// primitives types : 1.Number, 2.Boolean, 3.String, 4.undefined, 5.Null, 6.symbol, 7.BigInt

//Objects: 1.Object literals, 2.Arrays, 3.Functions, 4.Many more these are Reference types

//java script engine has two components. call stack where functions(primitive types) are stored and Heap where objects are stored in memory.
*/

//clip 100 primitives vs objects in practice
//primitives types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis'; //mutate

console.log(lastName, oldLastName);

//lets create object OR Reference types

const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};

//anothetr object

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before married:', jessica); //both last name same Davis
console.log('After married:', marriedJessica);

//marriedJessica = {}; not work bcx use of const it works with let

//copying objects

const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], //add an array.Now array are in both object
};

const jessicaCopy = Object.assign({}, jessica2); //assign emerge two objects. object.assign create a shallow copy not a deep clone
//shallow copy only copy property in first level.while deep clone copy everything.
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary'); //use push method to add an element at the end of an array
jessicaCopy.family.push('john');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
