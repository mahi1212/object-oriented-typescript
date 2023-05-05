"use strict";
// Parent class 
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} sleeps for ${hours} hours`;
    }
}
// inhereting parent class -> getting all properties of parent
class Student extends Person {
    constructor(name, age, address) {
        // need to call super if we are inheriting
        super(name, age, address);
    }
}
const student1 = new Student('Mahi', 22, 'Rajnagar');
console.log(student1.makeSleep(10));
// normal class
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numberOfClass) {
        console.log(`${this.name} will take ${numberOfClass} class`);
    }
}
const teacher = new Teacher('Mr. Bin', 25, 'Rajnagar', 'Head Sir');
teacher.takeClass(4);
