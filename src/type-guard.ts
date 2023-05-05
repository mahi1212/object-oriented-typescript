// keyof guard
type Alphaneumerics = string | number;

function add(param1: Alphaneumerics, param2: Alphaneumerics) {
    if (typeof param1 == 'number' && typeof param2 == 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}
const stringCheck = add('1', '5')
const intCheck = add(1, 5)
console.log(intCheck, stringCheck)

// in guard example
type NormalUserType = {
    name: string
}
type AdminUserType = {
    name: string;
    role: 'admin'
}

function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
        return `I'm an admin and my role is ${user.role}`
    } else {
        return `I'm a normal user`
    }
}
const normalUser1: NormalUserType = {
    name: "Sakib khaan"
}
const adminUser1: AdminUserType = {
    name: 'DC Shaheb',
    role: 'admin'
}
console.log(getUser(normalUser1))
console.log(getUser(adminUser1))

// instance of guard
class Human {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getSalary() {
        console.log('He has no salary')
    }
}
// lets make instance
class Indian extends Human {
    constructor(name: string, age: number) {
        super(name, age)
    }
    makeBark() {
        console.log(`We are barking`)
    }
}

class Bangladeshi extends Human {
    constructor(name: string, age: number) {
        super(name, age)
    }
    makePeace() {
        console.log(`We are peace loving`)
    }
}

function getCharecter(human: Human) {
    if (human instanceof Indian) {
        human.makeBark()
    } else if (human instanceof Bangladeshi) {
        human.makePeace()
    } else {
        human.getSalary()
    }
}

const indianPerson = new Indian('Shakti', 25); // instance of indian
const bangladeshiPerson = new Bangladeshi('Mahi', 22); // instance of bd
