//Arrays

let numbersArray: number[] = [1, 2, 3, 4];
let sringAndNumbsArr: (number | string)[] = [1, `Pesho`, `3`];

let fruits: string []= [`Apple`, `Banana`, `Pear`, `Peach`];
let firstEl: string = fruits[1];
let secondEl: string = fruits[3];
console.log("secondEl", secondEl);

fruits.push("Mango");

numbersArray.pop();

fruits.shift();

numbersArray.unshift(5);
console.log("numbersArray", numbersArray);

let multiplyNumbers = numbersArray.map((element: number) => number * 2);
console.log("multiplyNumbers", multiplyNumbers);