// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string

interface Country {
  name: string;
  capital: string | "Sofia";
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface

const country: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 7000000,
  language: "bulgarian",
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(countryObj: Country) {
  return `The capital of ${country.name} is ${country.capital}. The official language is ${country.language} and population of ${country.population} people.`;
}

const countryDetiles = displayCountryDetails(country);
console.log("countryPopulation", countryDetiles);
//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

// Step Two: Declare an object with properties following interface "Student"

// Step Three: Declare array "students" with objects of type "Student"

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
