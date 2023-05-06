interface IVehicle {
    startEngine():void;
    stopEngine(): void;
    move(): void;
}

// class Vehicle implements IVehicle{
//     startEngine(): void {
//         console.log('Engine start')
//     }
//     stopEngine(): void {
//         console.log('Engine stop')
//     }
//     move(): void {
//         console.log('Vehicle moving')
//     }
//     extra(): void{
//         console.log('Extra method')
//     }
// }
abstract class Vehicle{
    abstract startEngine():void;

    abstract stopEngine(): void;
    move(): void {
        console.log('Vehicle moving')
    }
    extra(): void{
        console.log('Extra method')
    }
}
class Car extends Vehicle {
    // here we need to must implement the abstract method
    startEngine(): void {
        console.log('Engine start')
    }
    stopEngine(): void {
        console.log('Engine stop')
    }
}
// We can't create an instance of an abstract class
// const car = new Vehicle()
