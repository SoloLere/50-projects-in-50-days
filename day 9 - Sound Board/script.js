const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;
  let isPlaying = false;

  btn.addEventListener("click", () => {
    // Stop all songs from playing
    stopPlay(sound);
    const myAudio = document.getElementById(sound);

    // Toggle between play and pause
    if (isPlaying) {
      myAudio.pause();
      isPlaying = false;
    } else {
      myAudio.play();
      isPlaying = true;
    }
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopPlay(current_play) {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();

    // pause if current_play else reset to zero
    if (sound !== current_play) {
      song.currentTime = 0;
    }
  });
}
