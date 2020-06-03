console.log("tut57.js");
const map = new Map();


const key1 = 'harry', key2 = {}, key3 = function () { };

map.set(key1, "this is a a string");
map.set(key2, "this is an empty object");
map.set(key3, "this is a function");

console.log(map.keys(key1));

console.log(map);

//getting values from a map

let value1 = map.get(key1);
console.log(value1);

//getting length of map

console.log(map.size)

//using for..of loop to iterate

for ([key, value] of map){
    console.log(key,value);
}

map.forEach((value,key)=>{
    console.log("key is ",key);
    console.log("value is ",value);
})

let myArray=Array.from(map);
console.log("map to array is",myArray);

let myKeysArray=Array.from(map.keys());
console.log("map to keys is ",myKeysArray);

let myValuesArray=Array.from(map.values());
console.log("map to values is",myValuesArray);


