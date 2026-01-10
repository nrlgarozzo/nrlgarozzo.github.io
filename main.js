console.log("main.js loaded");

let csv_data; //loads empty variable

Papa.parse("ape.csv", {
  download: true,
  header: true,
  complete: function(results) {
    initializeNodes(results.data);
    
  }
});

let randomNum = Math.random();
console.log(randomNum);

function initializeNodes(data) {
      csv_data = data;
    }

console.log(csv_data)


const sound = new Howl({
  src: ["https://ko-audio.howtopronounce.com/26ce399e723333542fa6a4c798b8879b.mp3"], 
  //src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
  preload: true, 
  html5: false,
});

function playsound() {
  sound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button-b");
  button.addEventListener("click", playsound);
});





//notes
//https://docs.google.com/spreadsheets/d/16pRPe1aNRoQbcihSBkGs5La5b59gQ0bCq1-ss09pgFI/edit?gid=0#gid=0
