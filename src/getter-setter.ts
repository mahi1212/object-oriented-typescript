class BankAccount {
    readonly id: number;
    name: string;
    private balance: number;
    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance
    }
    // getter use get keyword
    get _balance(): number{
        return this.balance;
    }
    // setter use set
    set depositBalance(amount: number) {
        this.balance = this.balance + amount;
    }
    getBalance(){
        return `My balance is ${this.balance}`
    }
}
const myAccount = new BankAccount(12, 'Mahi', 50_000);
console.log(myAccount)
class StudentAccount extends BankAccount {
    test(){
        // only private property can't be accessed
    }
}

console.log(myAccount.getBalance())
// we need to set getter for get private property
console.log(myAccount._balance)
// we have to use '=' notation | do not call function in setter
myAccount.depositBalance = 2000;

console.log(myAccount.getBalance())

