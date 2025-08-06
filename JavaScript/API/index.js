let title = document.querySelector(".card-title");
let body = document.querySelector(".card-body");
let btn = document.querySelector(".btn");
let post_number = document.getElementById("id")

async function generate() {
  let counter = Math.floor(Math.random()*100);
  const api = await fetch(
    `https://jsonplaceholder.typicode.com/posts/` + counter
  );
  const data = await api.json();
  post_number.innerHTML = counter
  title.innerHTML = data.title;
  body.innerHTML = data.body;
}

console.log("API is here");
btn.addEventListener("click", () => {
  generate();
});
