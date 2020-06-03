console.log("tut58.js");

//set stores unique values

const mySet = new Set();

console.log("the set looks like this,", mySet);

//adding values

mySet.add('this')
mySet.add('this')  //ony one entry of set no repetetion
mySet.add('my name')
mySet.add(123) //anything bool string number



console.log("the set looks like this,", mySet);

//using constructor
let mySet2 = new Set([1, 34, 23, 'thus', false, { d: 1, 1: 2 }]);

console.log(mySet2);
console.log(mySet2.size);
console.log(mySet2.has(34));
//to delete an element
console.log("before removal", mySet2.has('that'));
mySet2.delete('that');
console.log("afetr removal", mySet2);


//iterating a set
for (let item of mySet2) {
    console.log("item is ", item);
}

//using for each loop

mySet2.forEach((item) => {
    console.log('item is', item);
})

let array = Array.from(mySet2);
console.log(array);
let array2=[1,2,3,3,3,3,"wdqs"];

let setFromArray=new Set(array2);

console.log(setFromArray);