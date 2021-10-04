// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(<div>hello jsx</div>, document.getElementById("root"));
// import _ from "lodash";

let element = document.createElement("div");
element.innerHTML = JSON.stringify(_.defaults({ a: 1 }, { a: 3, b: 2 }));
document.body.appendChild(element);

// function getComponent() {
//   return import("lodash").then(({ default: _ }) => {
//     let element = document.createElement("div");
//     element.innerHTML = JSON.stringify(_.defaults({ a: 1 }, { a: 3, b: 2 }));
//     return element;
//   });
// }

// getComponent().then((element) => {
//   document.body.appendChild(element);
// });

// document.addEventListener("click", () => {

// });
