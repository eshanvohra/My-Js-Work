console.log("tut60.js")

//destructuring in js

let a, b;
[a, b] = [34, 564];
console.log(a, b);

// [a, b, c, d, ...e] = [1, 2, 3, 4, 5,6,7,8,9]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


//array destructuring
({ a, b, c, ...d } = { a: 34, b: 345, c: 34, d: 45, e: 90 })

console.log(a, b, c, d)

const fruits = ['apple', 'banana', 'mango'];
[a, b, c] = fruits;
console.log(a, b, c)

//object destructuring

laptop = {
    model: "hp",
    age: 12,
    gender: "male",
    ner:12233,
    start:function () {
        console.log("started");
    }
}

const { model, age, gender } = laptop
console.log(model, age, gender)