// Let vs Const
let number: number = 5;
number = 10;
const message: string = 'Welcome'

// String

let welcomeMessage: string = "Hello, Peter!"
let test: string = 'Ivan';
let welcomeMessageLength: number = welcomeMessage.length;

// String Interpolation

let welcomeMessageDetails: string = `My Welcome Message length is ${welcomeMessageLength}`
let userWelcomeMessage: string = `Welcome, ${test}`

// Number

let firstNumber: number = 5;
let secondNumber: number = 10;

// Number Math Operations

let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = secondNumber * firstNumber;
let divide: number = secondNumber / firstNumber;

// Boolean (true/false)

let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;
let areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;

// Any
let stringValue: any = 'Hello';
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

// Ternary operator

const isPositiveNum = 5 > 0 ? "The number is positive" : "The number is negative" ;
console.log(typeof isPositiveNum);

const age: number = 30;
const myName: string = "Ivo";

const personDescription = age < 40 ? `${myName} is younger than 40. He is ${age} old.` : `${myName} is older than 40. He is ${age} years old.`;
console.log("personDescription", personDescription);

// If Else Statement

if (age < 40) {
console.log(`Age are lower than 40`)
}
else {
 console.log(`Age are greater than 40`)
}

const num: number = 10;

if (num < 10){
    console.log("The number is lower than 10.");
} else if (num > 100){
    console.log("The number is greather than 100");
} else {
    console.log("The number is between 10 and 100");
}