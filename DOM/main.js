const title = document.querySelector("h1");
// title.innerHTML = 'God is good <br> All the time'
title.innerText = "God is good all the time";

const paragraph = document.querySelector("p");
console.log(paragraph.getAttribute("attribute"));
paragraph.setAttribute("attribute", "Faith");
console.log(paragraph.getAttribute("attribute"));

const paragraphWithClass = document.querySelector(".paragraph");
paragraphWithClass.classList.add("new", "hello");
paragraphWithClass.classList.remove("new", "hello");
console.log(paragraphWithClass.classList.contains("paragraph"));

const input = document.querySelector("input");
input.value = "1234";

const image = document.createElement("img");
console.log(image);
image.setAttribute(
  "src",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
const paragraphWithId = document.querySelector("#paragraph");
// paragraphWithId.replaceWith(image)
paragraphWithId.append(image);

// paragraphWithId.innerHTML = `<img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="A cute dog">`;
