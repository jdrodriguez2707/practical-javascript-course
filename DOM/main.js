const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#calculate-button");
const resultParagraph = document.querySelector("#result");

function addNumbers() {
  // const result = parseInt(input1.value) + parseInt(input2.value);
  const result = +input1.value + +input2.value;
  resultParagraph.innerText = "The result is: " + result;
}
