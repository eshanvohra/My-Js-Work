console.log("tut44.js");

//pretend this is coming from server

let a="harry";
a=undefined;
if(a!=undefined){
    throw new Error ("a is not undefined");
}
else{
    console.log("a is undefined");
}

try {
    // fcdfdcxdcx
    console.log("inside try block");
    eshan();
} catch (error) {
    console.log("Are you okay?")
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("finally we will run this")
}