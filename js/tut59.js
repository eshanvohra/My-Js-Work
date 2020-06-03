console.log("tut59.js");


//symbols primitive every symbol is unique
//whenever we write symbols it create new primitive
//not uses new Symbol() as it not a constructor
const sym1 = Symbol("My Symbol");
const sym2 = Symbol("My Symbol");
console.log("symbol is", sym1);
console.log("type of symbol is ", typeof sym1);

console.log(sym1===sym2);


const a="this";
const b="this";

console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);

const k1=Symbol('identifier for k1');
const k2=Symbol('identifier for k2');

myObj={};
myObj[k1]="harry"
myObj[k2]="rohan"
myObj["name"]="good boy";
myObj["nae"]="good boy";
myObj["nam"]="good boy";

console.log(myObj)
console.log(myObj[k1])
console.log(myObj[k2])
console.log(myObj.k2) //cannot do this to get rohan as it is same as myObj["k2"]

//sybols are ignored in for in loop
for (key in myObj){
    console.log(key,myObj[key]);
}

//symbols ignored

console.log(JSON.stringify(myObj))