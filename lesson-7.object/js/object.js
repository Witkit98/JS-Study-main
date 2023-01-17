const person = {
    name: "Vitalii",
    lastName: "Shatalov",
    age: 23,
    sayHello: function () {
        console.log("hello im", this.name);
    },
};

console.log(person.lastName);
person.sayHello();

for (let prop in person) {
    console.log(person[prop])
}