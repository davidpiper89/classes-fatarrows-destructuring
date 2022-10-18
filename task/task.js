// 1 / 2 / 3 / 4 / 5

class Animals {
    constructor (type) {
        this.type = type;
    }
    getType () {
        return this.type
    }
}

class Wildanimal extends Animals {
    constructor (type, location, agressiveness) {
        super(type);
        this.location = location;
        this.agressiveness = agressiveness;
    }
    getLocation () {
        return this.location;
    }
}

class Safari extends Wildanimal {
    constructor (type, location, gender, safariTime, safariPrice, safariGuide) {
    super (type, location, gender) 
    this.safariTime = safariTime
    this.safariPrice = safariPrice
    this.safariGuide = safariGuide
    }
    getSafariDets (){
        return `The next Safari is ${this.safariTime} with ${this.safariGuide}, the price is $${this.safariPrice}`
    }

}

var i = new Safari ("Kantanga Lion", "Zambia", "Very High", "12:00", "100", "Hakim")

console.log(i.getSafariDets())

// 6 a

// import {add} from "./utils.js"
// console.log (add(2, 8))

// import divide from "./utils.js"
// console.log(divide(45, 9));

// 6 b


const multiply = (x, y) => x * y;

console.log(multiply(20, 4))

// 6 c

const numberOfBags = (number = "Please enter how many bags you need") => {
    return number
};

console.log(numberOfBags())

// 6 d

var person = {
    name: "David",
    age: 32,
    location: {
        fullAddress: {addressLine1: "2 Roberts Road", addressLine2: "Southampton"},
        postCode: "SO15 5DE",
    }
}

const {location, name} = person 
const {addressLine1: one, addressLine2: two} = location.fullAddress;

const str = `Name: ${name}, lives at ${one} which is in ${two}.`
console.log(str)

// 6 e

const items = ["Rake", "Spade", "Shovel", "Hammer"]
const [item1, item2, item3, item4] = items
console.log(item4)
