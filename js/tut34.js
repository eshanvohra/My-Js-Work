console.log("tut34.js");


setTimeout(() => {                        //asynchronous call
    
    for (let index = 0; index < 4500; index++) {
        const element = index;
        console.log("the index is "+index);
    }
},100);

console.log("Done Printing");