console.log("tut51.js");



function iterator(values) {
    let nextIndex = 0;
    //we will return an object
    return {
        next: function () {
            //we will return below object
            if (nextIndex < values.length)
                return {
                    values: values[nextIndex++],
                    done: false

                }
            else
                return {
                    done: true

                }
        }

    }
}
let myArray = ["apples", 'fruits', 'bhindi', 'guaua'];
console.log("my array is ", myArray);

const fruits = iterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());