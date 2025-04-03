// Read Evaluate print loop

const { exit } = require("process")
const repl = require("repl")
const local = repl.start("The node console Start")
local.on('exit',()=>{
    console.log('exiting repl');
    process.exit();
} )