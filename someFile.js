function sayHello(person) {
    return "Hello. " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
/*class called Person in the ﬁle below the getElementById() method . Give it the properties of ﬁrst name, last name, age, phone number, state, zip code, and occupation. Create a constructor to initialize these properties. Also create several method to return combinations of interest, such as Full name, Name and Phone Number, Location, etc. */
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
    }
    Person.prototype.personName = function () {
        return this.firstName + this.lastName;
    };
    Person.prototype.printName = function () {
        return "Name: " + this.personName();
    };
    Person.prototype.personNumbs = function () {
        return this.age + this.phoneNumber;
    };
    Person.prototype.printNumbs = function () {
        return "age and phoneNumber: " + this.personNumbs();
    };
    Person.prototype.personLoca = function () {
        return this.state + this.zipCode;
    };
    Person.prototype.printLoca = function () {
        return "Location: " + this.personLoca();
    };
    Person.prototype.personJob = function () {
        return this.occupation;
    };
    Person.prototype.printJob = function () {
        return "Occupation: " + this.printJob();
    };
    Person.prototype.printPerson = function () {
        console.log(this.printName() + this.printNumbs() + this.printLoca() + this.printJob());
    };
    return Person;
}());
var person1 = new Person("Pernell", "Grant", 29, "704-704-7047", "NC", 28078, "Web Developer");
var person2 = new Person("James", "Runs", 12, "980-454-7047", "NC", 28078, "Hacker");
var person3 = new Person("Samantha", "Scampa", 95, "336-731-7047", "NC", 28078, "Unknown");
document.getElementById("para2").innerHTML = printPerson(person1);
console.log(person1);
console.log(person2);
console.log(person3);
