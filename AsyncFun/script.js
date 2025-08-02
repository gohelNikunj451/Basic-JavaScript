// async function getData() {
//   setTimeout(() => {
//     console.log("collected data");
//   }, 5 * 1000);
// }
// let promise=getData(); //async function always return promise
// console.log("hello")

//getData

// async function getData() {

//   //data fetching - async process
//   //in this data fetching time we want to stay here to get data from api reason why we use "await" keyword

//   let responce = await fetch("https://jsonplaceholder.typicode.com/albums");
//   console.log(responce);

//   // get data from fetching and after this process on data
//   // json is also async process then we use await keyword for waiting data

//   let data = await responce.json();
//   console.log(data);
//   console.log(data[0].title)
// }
// getData();


// post data
console.log("hello")
let url = "https://jsonplaceholder.typicode.com/posts";
let obj = JSON.stringify({
  method: 'POST',
  title: "gohel nikunj",
  body: "hello world",
});
async function postData() {
  let responce = await fetch("https://jsonplaceholder.typicode.com/posts", JSON.stringify({
    method: 'POST',
    title: "gohel nikunj",
    body: "hello world",
  }));
  console.log(responce);
  let data = await responce.json();
  console.log(data);
}
async function getData() {
  let responce = await fetch(url, obj);
  console.log(responce);
  let data = await responce.json();
  console.log(data);
}
async function comProcess() {
  await postData();
  await getData();
}
comProcess();
