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
    constructor(
        public name: string,
        public sound: string,
        public species: string,
    ){}
    public makeSound(){
        console.log(`${this.name} sounds like ${this.sound}`)
    }
}
// lets make instance of Animal class
const dog = new Animal('Tommy', 'Vau vau', 'Kutta');
const cat = new Animal('Ploto', 'meow', 'bilai')
dog.makeSound()
cat.makeSound()

class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number,
        public position: string
    ){}
    // getDetails method (function used in class is known as method)
    public getDetails(){
        console.log(`Employee name is: ${this.name} \nis of age :${this.age} \nsalary is: ${this.salary} \nis in the position of :${this.position}`)
    }
}

const tushar = new Employee('Tushar', 23, 32_000, 'Video Editor');
tushar.getDetails()