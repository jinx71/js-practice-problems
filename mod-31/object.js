const people = [
    { name: 'meena', age: 20 },
    { name: 'rina', age: 15 },
    { name: 'suchorita', age: 22 },
]
let age = 0;
for (person of people) {

    age = person.age + age;
}
console.log(age);

let ageReduced = people.reduce((prevValue, currValue) => prevValue + currValue.age, 0);
console.log(ageReduced)