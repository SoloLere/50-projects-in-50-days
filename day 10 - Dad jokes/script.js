const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

getJoke();

// Using Async Await

async function getJoke(){
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json()
  jokeEl.textContent = data.joke
};

jokeBtn.addEventListener("click",getJoke)

/*

// Using .then
function getJoke() {
  fetch("https://icanhazdadjoke.com/", config)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      jokeEl.textContent = data.joke
    });
}

*/
