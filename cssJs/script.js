let container = document.querySelector(".container");

// container.style.cssText = "background-color:blue";

container.setAttribute("class", "container ");

// container.removeAttribute("class", "bull");

let flag = true;
container.addEventListener("click", (event) => {
  // if (flag) {
  //   flag = false;
  //   container.classList.add("border");
  // } else {
  //   flag = true;
  //   container.classList.remove("border");
  // }
  console.log(event);
  container.classList.toggle("border");
})