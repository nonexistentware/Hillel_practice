const person = {
    firstName: "Julius",
    lastName: "Moore",
    age: 27
};

person.email = "j.moore@gmail.com";

delete person.age;

console.log(person);