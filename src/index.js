import React from "react";
import ReactDoom from "react-dom";

const element = <h1>Hello World меня зовут: Никита Ануфриев</h1>;
ReactDoom.render(element, document.querySelector("#root"));

console.log(element);
