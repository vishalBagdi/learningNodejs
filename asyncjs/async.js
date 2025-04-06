// This is the synchronization means this is code Execution line by line

// console.log("Start Operations")

// function sleep(milsecond){
//     let startTime = new Date().getTime();
//     console.log("Operations is Running");
//     while (new Date().getTime()< startTime + milsecond) {
//         console.log("In progress");

//     }
//     console.log("Operation done");

// }

// sleep(1000);
// console.log("Do something else");

// ********** THIS IS Asynchronization CODE

// javascript is a synchronous single threaded language but you can handle the async task using  Callback, promises, async/await


console.log("Start Operations");
function sleep(milsecond) {
  console.log("Operations is Running");
  setTimeout(() => {
    console.log("Operation done");
  }, milsecond);
}

sleep(1000);
console.log("Do something else");
