// const promise = new Promise( (resolve, reject) => {
// console.log("Async task Execution");
// throw "err"
// if (false) {
//     const persion = {name: "vishal", }
//     resolve(persion)
// }else{
//     const err = { errCode : "1001"}
//     reject(err)
// }

// } )

// promise.then(
//     (val) => {
//          console.log("Passed !", val);
//     }
// ).catch( (err)=>{
//     console.log("failed",err);

// }).finally(()=>{
//     console.log("Clean up");

// })

// let p = Promise.resolve("Execution is done")
// let q = Promise.reject("Execution is rejected")
// p.then((val)=>{
//     //console.log(val);

// })
// q.then((val)=>{
//     console.log(val);

// })

// function asyncTask (){
//     return Promise.resolve()
// }

// asyncTask().then( ()=>{
//     console.log(name);

// })
// const name = "vishal"

// const p = Promise.reject("failed task")

// p.then((val)=>{
//     console.log(val);
//     return "done2"

// }).then((val)=>{
//     console.log(val);
//     return "done3"

// }).then((val)=>{
//     console.log(val);
//     return "done4"

// }).then( (val)=> console.log(val))
// .catch((val)=> console.log(val)
// )

// $$$$$$$ Performance Promises Async Await

// const makeApicall = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("this api is executed :" + time);
//     }, time);
//   });
// };

// makeApicall(1000).then((val) => {
//   console.log(val);
// });

// let multiApi = [makeApicall(2000), makeApicall(5000), makeApicall(400)];

// Promise.all(multiApi).then((values) => {
//   console.log(values);
// });

// Promise.race(multiApi).then((values) => {
//   console.log(values);
// });

const makeApicall = (time) => {
    return () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("this api is executed :" + time);
      }, time);
    });
  }; 
  let multiApi = [makeApicall(2000), makeApicall(5000), makeApicall(400)];
  
(async function () {
    for(let request of multiApi){
        console.log(await request());
        
    }
})()
  