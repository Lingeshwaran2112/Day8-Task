class Person {
    constructor(fName, lName, age, address, phone) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let personDetails = new Person("Lingesh", "Waran", 25, "Dindigul", 7094692492);

console.log(personDetails.getFullName()); //Lingesh Waran
console.log(personDetails.age); //25
console.log(personDetails.address); //Dindigul
console.log(personDetails.phone); //7094692492