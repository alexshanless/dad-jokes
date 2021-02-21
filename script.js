const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

function generateJoke() {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}

jokeBtn.addEventListener("click", () => {
  generateJoke();
});
