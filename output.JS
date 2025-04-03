

const x = "1"
const y ="2"
console.log(x,y);

// %s format variable for string
// %d for number
// %i for integer
// %o for object 

// console.log("hi i am %s and my age %d", "vishal", 23);
// console.clear()
// console.count("my name is vishal")
// console.count("my name is vishal")
// console.countReset("my name is vishal")
// console.count("my name is vishal")
// console.count("nane is nikil")


// const function1 = () => console.trace()
// const function2 = function1()
// function2()

// const sum = () => console.log(`sum of 2 and 3 is : ${2 + 3}`);
// const multiply = () =>
//      console.log(`multiply of 3 and 4  is : ${3*4}`);
// const measureTime = ()=>{
//     console.time("sum()");
//     sum()
//     console.timeEnd("sum()")
//     console.time("multiply()")
//     multiply()
//     console.timeEnd("multiply()")
// };
// measureTime()


const progressBar = require('progress')
const bar = new progressBar("downloading [:bar] :rate/bps :percent :eats",{
    total : 20,
})

const timer = setInterval( ()=>{
bar.tick()
if (bar.complete) {
    clearInterval(timer)
}
},1000)

const chalk = require("chalk")

console.log(chalk.green("Vishal bagdi"))
