const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const additionButton = document.querySelector("#addition-button");
const result = document.getElementById("result");

function addNumber() {
  result.innerText = `The result is: ${+input1.value + +input2.value}`;
}
