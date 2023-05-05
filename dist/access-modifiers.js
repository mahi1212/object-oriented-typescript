"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
const myAccount = new BankAccount(12, 'Mahi', 50000);
console.log(myAccount);
class StudentAccount extends BankAccount {
    test() {
        // only private property can't be accessed
    }
}
