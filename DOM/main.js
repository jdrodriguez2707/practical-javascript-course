const title = document.querySelector("h1");
const paragraphs = document.querySelectorAll("p");
// const paragraphWithClass = document.querySelector(".paragraph");
const paragraphWithClass = document.getElementsByClassName("paragraph");
// const paragraphWithClass = document.querySelector("#paragraph");
const paragraphWithId = document.getElementById("paragraph");
const inputText = document.querySelector("input");

console.log(title);
console.log(inputText.value);

console.log({
  title,
  paragraphs,
  paragraphWithClass,
  paragraphWithId,
  inputText
});
