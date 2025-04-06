// callback functions
// console.log("Task Started");

// function asyncTask (cb){
//     console.log("Task is Running");
//     setTimeout(cb,0)

// }

// asyncTask ( ()=> console.log(name))
// console.log("Task is Ended");

// const name = "Vishal"

function asyncTask(cb){
  setTimeout(() => {
    cb(null, "This is the data from the server");
  }, 0);
}

asyncTask((err, data) => {
  if (err) {
    throw err;
  } else console.log("Data", data);
});

const name = "Vishal";

function makecallApi(cb){
    setTimeout(()=>{
     console.log("This is async task Execution");
     
    },0)
}
// this is call back hell
makecallApi(()=>{ 
    makecallApi(()=>{
        makecallApi(()=>{
            makecallApi(()=>{

            })
        })
    })
})
