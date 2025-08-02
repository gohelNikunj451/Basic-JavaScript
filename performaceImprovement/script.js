let p1 = performance.now();
let mydiv1 = document.createElement("div");
for (let i = 0; i < 100; i++) {
  let p = document.createElement('p');
  p.textContent = `p ${i + 1}`;
  mydiv1.appendChild(p);
}
document.querySelector("body").appendChild(mydiv1);
let p2 = performance.now();
console.log(`total time of process one : ${p2 - p1}`);



p3 = performance.now();

for (let i = 0; i < 100; i++) {
  let para = document.createElement('p');
  para.textContent = `p ${i + 1}`;
  document.querySelector("body").appendChild(para);
}
p4 = performance.now();
console.log(`total time of process two : ${p4 - p3}`);

// In simple terms:

// ### ** Reflow **
//   Reflow happens when the browser calculates the layout of a webpage.This involves determining the size and position of elements.For example, if you change the size of an element, add a new element, or change the font size, the browser needs to recalculate where everything should go.Reflow is computationally expensive because it affects the entire layout or a large part of it.

// ### ** Repaint **
//   Repaint happens when changes to an element affect its appearance but ** not its layout **.For example, changing the background color, border color, or text color of an element causes a repaint.Unlike reflow, repaint is less expensive because the browser doesn't need to recalculate the positions of elements—only redraw the affected parts.

// ### Analogy
//   - ** Reflow **: Rearranging the furniture in a room because you added a new table.
// - ** Repaint **: Painting the walls of the room without moving the furniture.

// Both can impact performance, especially reflow, so minimizing unnecessary reflows and repaints is crucial for building fast and smooth web applications.

//best code:

p5 = performance.now();
let fragment = document.createDocumentFragment('div');
for (let i = 0; i < 100; i++) {
  let p = document.createElement('p');
  p.textContent = `p ${i}`;
  fragment.appendChild(p);
}
document.body.appendChild(fragment);
p6 = performance.now();
console.log(`total time of best code : ${p6 - p5}`);