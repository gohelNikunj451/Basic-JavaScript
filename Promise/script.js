// let promise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("your data has been found");
//   } else {
//     reject("you data has not found");
//   }
// })
// promise.then((message) => {
//   console.log("resolve : ", message);
// }).catch((error) => {
//   console.log("reject : ", error);
// })
// console.log(promise);

let getData = (data) => {
  return new Promise((resolve, reject) => {
    let success = true;
    console.log(`collecting data ${data} .....`);

    setTimeout(() => {
      if (success) {
        resolve(`${data} no.data collected`);
      } else {
        reject(`${data} no.data not collected`);
      }
    }, 2 * 1000)

  })
}
// getData(1).then((message) => {
//   console.log(message);
//   return getData(2);

// }).then((message) => {
//   console.log(message)
//   return getData(3);
// }).then((message) => {
//   console.log(message)
// }).catch((error) => {
//   console.log(error);
// })
let promise = getData(3);
let promise1 = getData(2);
let promise2 = getData(1);
Promise.all([promise, promise1, promise2]).then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
})