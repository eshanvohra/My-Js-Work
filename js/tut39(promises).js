console.log("tut 39.js");

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('function: your promise has been resolved');
                resolve();
            }
            else {
                console.log('function: your promise has not been resolved');
                reject('sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log("Harry: thanks fo resolving");
}).catch(function (error) {
    console.log("harry: vary bad bro reason " + error);
})