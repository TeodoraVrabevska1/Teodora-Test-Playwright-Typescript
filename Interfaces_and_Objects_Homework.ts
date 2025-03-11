interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

interface PersnInfo extends Person {
   country?: string;
   greeting?: () => string;
   }

let person1: Person = {
    name: "Mark" ,
    lastName: "Tomson",
    age: 23 ,
    email: "mark@abb.bb",
    phoneNumber: 23232435,
}

let Person2: PersnInfo = {
    name: "Mark" ,
    lastName: "Tomson",
    age: 23 ,
    email: "mark@abb.bb",
    phoneNumber: 23232435,
    country: "USA",
    greeting: function() {
        return `Welcome, ${this.name} ${this.lastName} from ${this.country}`
    },     
}