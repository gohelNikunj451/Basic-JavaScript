console.log("hello world")
let heading5 = document.createElement("h5")
heading5.textContent = "heading5";
document.querySelector(".mydiv").appendChild(heading5)

let heading6 = document.createElement("h6");
heading6.textContent = "heading6"
document.querySelector(".mydiv").insertAdjacentElement("afterend", heading6); // mainly four position

// remove child
let parent = document.querySelector(".mydiv");
let child = document.querySelector(".head2");
parent.removeChild(child);
