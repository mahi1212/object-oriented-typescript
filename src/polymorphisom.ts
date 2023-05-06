// polymorphisom -> same method but works in different form
class NormalHuman {
    takeNap() : void {
        console.log(`I sleep for 8 hours a day`)
    }
}
class Students extends NormalHuman{
    takeNap(): void {
        console.log(`I sleep for 10 hours a day`)
    }
}
class Developer extends NormalHuman{
    takeNap(): void {
        console.log(`I sleep for 5 hours a day`)
    }
}

const person1 = new NormalHuman();
const person2 = new Students();
const person3 = new Developer();

function getNap(param: NormalHuman){
    param.takeNap()
}
// here we see takeNap() function in doing polymorphisom
getNap(person1)
getNap(person2)
getNap(person3)

// lets have another example
class Shape{
    getArea(): number{
        return 0;
    }
}
class Circle extends Shape{
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    getArea(): number{
        return Math.PI*this.radius*this.radius;
    }
}
class Rectangle extends Shape{
    height: number;
    width: number;
    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.width*this.height;
    }
}

function getAreaOfShape(param: Shape){
    console.log(param.getArea())
}
const circle1 = new Circle(10);
const ractange = new Rectangle(10, 3);

getAreaOfShape(circle1)
getAreaOfShape(ractange)