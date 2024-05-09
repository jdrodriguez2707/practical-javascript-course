const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const additionButton = document.querySelector("#addition-button");
const result = document.getElementById("result");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  console.log({ event });
  event.preventDefault();
  result.innerText = `The result is: ${+input1.value + +input2.value}`;

  const newButton = document.createElement("button");
  newButton.innerText = "Send response";
  newButton.addEventListener("click", () => {
    alert("Response sent");
  });

  result.append(newButton);
});

// function addNumber() {
//   result.innerText = `The result is: ${+input1.value + +input2.value}`;
// }
