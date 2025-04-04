// console.log(process.argv.slice(2)[0]);
// process.argv.forEach((val,index)=>{
// console.log(`${index}, ${val}`);

const minimist = require("minimist");

// })

const argNew = minimist(process.argv.slice(2))
console.log(argNew.NAME);

const _ = require("lodash")
const arr = [1,2,3,4,5]
console.log(_.chunk(arr));
console.log(_.last(arr));

const cowsay = require("cowsay")
console.log(cowsay.say({
    text : "I am learning of node module",
    e:"00",
    t: "U"
}));
