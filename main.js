import { Howl } from "https://unpkg.com/howler@2.2.4/dist/howler.module.js";

const sound = new Howl({
  src: ["https://ko-audio.howtopronounce.com/26ce399e723333542fa6a4c798b8879b.mp3"]
});

//document.getElementById("play").onclick = () => sound.play();

function playsound() {
  sound.play();
}

document.querySelector("button-b").addEventListener("click", playsound)
