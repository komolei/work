// var a=require("./a")
// // import {a} from "./a"
// console.log("b:",a);
// import "babel-polyfill"

console.log("promise");
let promise = new Promise((resolve, reject) => {
    console.log("I am using promise");
    if (1 <2) {
        resolve(1);
    }
    else {
        reject(2);
    }
})
promise.then((value) => {
    console.log("resolve", "value", value);
}).then((error) => {
    console.log("error")
})
console.log("gg");

export default promise;


