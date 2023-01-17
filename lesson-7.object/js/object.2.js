const people = [
    {
        name: "Vitalii",
        lastName: "Shatalov",
        age: 23,
        sayHello: function () {
            console.log("hello im", this.name);
        },
    },
    {
        name: "Polina",
        lastName: "Pavlova",
        age: 23,
        sayHello: function () {
            console.log("hello im", this.name);
        },
    },
    {
        name: "Viacheslav",
        lastName: "Sheviakov",
        age: 23,
        sayHello: function () {
            console.log("hello im", this.name);
        },
    },
    {
        name: "Witold",
        lastName: "Kitowski",
        age: 23,
        sayHello: function () {
            console.log("hello im", this.name);
        },
    },

];
for (let person of people) {
    console.log(person.lastName);
}

people.forEach(person => {
    console.log(person.lastName);
});

people.forEach(person => {
    person.sayHello();
});