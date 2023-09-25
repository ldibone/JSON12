let myVariableName = "ThisIsCamelCase";

const MY_VARIABLE_NAME = "THIS_IS_UPPER_SNAKE_CASE";

class CapitalCaseVariable {
    constructor() {
      this.value = "Capital case variable";
    }
  }
  
 
const name = "Dionisie";
const age = 32;
const city = "Bucuresti";

const message = `Hello, my name is ${name}. I am ${age} years old, and I live in ${city}.`;

console.log(message);

const numberValue = 42;
const stringValue = String(numberValue);

console.log(typeof stringValue); 

const stringValue = "42";
const numberValue = Number(stringValue);

console.log(typeof numberValue); 

const booleanValue = true;
const stringValue = String(booleanValue);

console.log(typeof stringValue); 

const stringValue = "true"; 
const booleanValue = Boolean(stringValue);

console.log(typeof booleanValue); 


let str = "true";
let bool = str === "true"; 

console.log(bool); 


let x = 10;
let y = 0;
let z = null;
let name = "Alisa";


if (!z) {
    console.log("z is falsy (null)");
}


if (!x) {
    console.log("x is falsy");
} else {
    console.log("x is not falsy");
}


if (x > 5 && y < 1) {
    console.log("x is greater than 5 and y is less than 1");
}

if (x > 5 || y > 5) {
    console.log("x is greater than 5 or y is greater than 5");
}


if (x > 5 && y > 5) {
    console.log("Both x and y are greater than 5");
} else if (x > 5 || name === "Alisa") {
    console.log("Either x is greater than 5 or the name is Alisa");
} else {
    console.log("None of the conditions are met");
}
