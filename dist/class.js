"use strict";
// class Animal {
//     name: string;
//     sound: string;
//     species: string;
//     constructor(name: string, sound: string, species: string){
//         this.name = name;
//         this.sound = sound;
//         this.species = species;
//     }
//     makeSound(){
//         console.log(`${this.name} sounds like ${this.sound}`)
//     }
// }
//     same code we can write shortly using parameter type in constructor
class Animal {
    constructor(name, sound, species) {
        this.name = name;
        this.sound = sound;
        this.species = species;
    }
    makeSound() {
        console.log(`${this.name} sounds like ${this.sound}`);
    }
}
// lets make instance of Animal class
const dog = new Animal('Tommy', 'Vau vau', 'Kutta');
const cat = new Animal('Ploto', 'meow', 'bilai');
dog.makeSound();
cat.makeSound();
class Employee {
    constructor(name, age, salary, position) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }
    // getDetails method (function used in class is known as method)
    getDetails() {
        console.log(`Employee name is: ${this.name} \nis of age :${this.age} \nsalary is: ${this.salary} \nis in the position of :${this.position}`);
    }
}
const mahi = new Employee('Mahi', 22, 30000, 'Full-stack Engineer');
const tushar = new Employee('Tushar', 23, 32000, 'Video Editor');
tushar.getDetails();
mahi.getDetails();
