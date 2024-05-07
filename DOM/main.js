const additionRadio = document.querySelector("#addition");
const subtractionRadio = document.querySelector("#subtraction");
const multiplicationRadio = document.querySelector("#multiplication");
const divisionRadio = document.querySelector("#division");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const resultParagraph = document.querySelector("#result");

function calculate() {
  let result = 0;

  if (additionRadio.checked) {
    result = +input1.value + +input2.value;
  } else if (subtractionRadio.checked) {
    result = +input1.value - +input2.value;
  } else if (multiplicationRadio.checked) {
    result = +input1.value * +input2.value;
  } else {
    result = +input1.value / +input2.value;
  }

  resultParagraph.innerText = "The result is: " + result;
}
