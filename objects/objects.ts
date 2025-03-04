//Object types with type Aaliases

type Role = {
   role: "manager" | "founder"
}
type Perissions = {
    permissions: "admin" | "user";
}

type User = Role & Perissions;

const user: User = {
    role: "founder",
    permissions: "admin",
}

console.log("useObject", user);


//Object types with Interfaces

interface Animal {
    species: string;
    breed: string;
    age: number;
    weight?: number;
    name: string;
}

const animal = {
species: "fish",
age: 1,
name: "Alan",
breed: "Gold",
weight: 1 
}


interface Cars {
    color: string;
    wheels: number;
    transmission: "manual" | "automatic";
    fuelType: "diesel" | "gasoline";
    startEngine: () => string
}

const car: Cars = {
    color: "blue",
    wheels: 4,
    transmission: "manual",
    fuelType: "diesel",
    startEngine: function() {
        return `Start the engine`
    }
}


//get object keys
const keys = Object.keys(car);

//get object values
const values = Object.values(car);
console.log("values", values);

// Assign two objects on one

const colorObj = {color: `black`}
const backgroundObj = {background: `white`};

const assignedObj = Object.assign({}, colorObj, backgroundObj);
console.log("assignedObj", assignedObj);

export{}