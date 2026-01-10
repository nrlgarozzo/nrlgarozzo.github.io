import { Howl } from "https://unpkg.com/howler@2.2.4/dist/howler.module.js";

//console.log("Button found?", document.querySelector(".button-b"));

const sound = new Howl({
  //src: ["https://ko-audio.howtopronounce.com/26ce399e723333542fa6a4c798b8879b.mp3"], 
  src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
  preload: true, 
  html5: false,
});

//document.getElementById("play").onclick = () => sound.play();

function playsound() {
  sound.play();
}

//document.querySelector(".button-b").addEventListener("click", playsound)

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button-b");
  //button.addEventListener("click", playSound);
  button.addEventListener("click", () => {
                // Redirect to another page
                window.location.href = "https://www.youtube.com";
            });
});
