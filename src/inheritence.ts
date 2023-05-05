// Parent class 
class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string{
        return `${this.name} sleeps for ${hours} hours`
    }
}
// inhereting parent class -> getting all properties of parent
class Student extends Person {
    constructor(name: string, age: number, address: string){
        // need to call super if we are inheriting
        super(name, age, address)
    }
}

const student1 = new Student('Mahi', 22, 'Rajnagar')
console.log(student1.makeSleep(10))

// normal class
class Teacher extends Person{ 
    designation: string;
    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address);
        this.designation = designation        
    }
    takeClass(numberOfClass: number): void{
        console.log(`${this.name} will take ${numberOfClass} class`)
    }
}
const teacher = new Teacher('Mr. Bin', 25, 'Rajnagar', 'Head Sir');
teacher.takeClass(4)
