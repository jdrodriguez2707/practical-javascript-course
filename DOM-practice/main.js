const title = document.getElementsByTagName("h1");
const paragraph = document.getElementsByTagName("p");
const paragraphWithClass = document.getElementsByClassName("paragraph");
const paragraphWithId = document.getElementById("paragraph");
const input = document.getElementsByName("user-id");

console.log(input.value);

console.log({
  title,
  paragraph,
  paragraphWithClass,
  paragraphWithId,
  input,
});
