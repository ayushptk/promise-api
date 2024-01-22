let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
    
  }, 11000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Promise 2 resolved');
    reject (new Error ("error found"));
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 3000);
});
// p1.then((value) =>{
//   console.log(value)
// })
// p2.then((value) =>{
//   console.log(value)
// })
// p3.then((value) =>{
//   console.log(value)
// })
        
        

let promise_all= Promise.allSettled([p1, p2, p3]) //allSettled is used to show the status of all promises
let promise_all= Promise.race([p1, p2, p3])
//race is used to show the first promise which is resolved
let promise_all= Promise.any([p1, p2, p3])
//any is used to show the first promise which is resolved

 let promise_all= Promise.resolve(6);
//resolve is used to show the first promise which is resolved
let promise_all= Promise.reject(new Error("Hey error found"));
//reject is used to show the first promise which is rejected
  promise_all.then((value) => {
    console.log(value);
  });