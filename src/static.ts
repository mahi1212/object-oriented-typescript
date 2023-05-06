class Counter {
    static counter: number = 0;
    // constructor(counter: number){
    //     this.counter = counter;
    // }
    static increment(): number{
        return Counter.counter = Counter.counter + 1;
    }
    static decrement(): number{
        return Counter.counter = Counter.counter - 1;
    }
}
// const increment1 = new Counter ();
// const increment2 = new Counter ();
console.log(Counter.increment())
console.log(Counter.increment())
// console.log(increment1.increment())
// console.log(increment1.increment())
