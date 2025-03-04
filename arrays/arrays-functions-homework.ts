//Create an array of strings and add a new element at the end of the array. Log the result.

let newCars: string[] = ["VW", "Volvo", "Audi", "BMW"];
newCars.push("Opel");
console.log(newCars);

//Create an array of numbers and remove the first element from the array. Log the result.

let numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);

//Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.

let smallNumbers = [1, 2, 3, 4, 5];
let result = numbers.map(num => num / 2);
console.log(result);

//Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

let severalNumbers = [3, 7, 1, 9, 12, 4];
let newResult = severalNumbers.filter(num => num > 5);
console.log(newResult);

//Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.

let thisNumbers = [9, 3, 7, 2, 8, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

//Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

let thisFruits = ["apple", "banana", "cherry", "date", "elderberry"];
let thisResult = thisFruits.slice(0, 3);
console.log(thisResult);

//Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

let vehicles = ['car', 'bike', 'bus', 'train', 'boat'];
vehicles.splice(1, 2);
console.log(vehicles);

//Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.


function findLargest(numb1=10, numb2=20, numb3=15) {
    if (numb1 >= numb2 && numb1 >= numb3) {
      return numb1;
    } else if (numb2 >= numb1 && numb2 >= numb3) {
      return numb2;
    } else {
      return numb3;
    }
  }
  console.log(findLargest(10, 20, 15));

//Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.

function convertToCentimeters(inches = 10) {
    let centimeters = inches * 2.54;
    return centimeters;
  }
  console.log("Default value (10 inches):", convertToCentimeters(1));
  console.log("Passed value (5 inches):", convertToCentimeters(5));

//Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.

function calculateArea(width=5, height = width) {
  let area = width * height;
  return area;
}
console.log("Area of square (side 5):", calculateArea(5));
console.log("Area of rectangle (width 5, height 5):", calculateArea(5, 5));