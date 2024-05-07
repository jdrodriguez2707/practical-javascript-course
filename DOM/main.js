const additionRadio = document.querySelector("#addition");
const subtractionRadio = document.querySelector("#subtraction");
const multiplicationRadio = document.querySelector("#multiplication");
const divisionRadio = document.querySelector("#division");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#calculate-button");
const resultParagraph = document.querySelector("#result");
const form = document.querySelector("#form");

// button.addEventListener("click", calculate);
form.addEventListener("submit", calculate);

function calculate(event) {
  console.log({ event });
  event.preventDefault();

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

  if (result) {
    resultParagraph.innerText = "The result is: " + result;
  } else {
    return;
  }

  // let confirmation = confirm(
  //   "Do you want to send this response to the teacher?"
  // );

  // if (confirmation) {
  //   console.log("Form sent");
  //   form.submit();
  // } else {
  //   console.log("Form not sent");
  // }
}
