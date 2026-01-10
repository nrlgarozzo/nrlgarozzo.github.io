console.log("main.js loaded");

let csv_data; //loads empty variable
let csv_meta;
let myResolve;
let myReject;

const csvready = new Promise((resolve, reject) => {
  myResolve = resolve; 
  myReject = reject;
}); //defining a constant with three states: pending, fulfilled, rejected

Papa.parse("ape.csv", {
  download: true,
  header: true,
  complete: function(results) {
    csv_data = results.data;
    csv_meta = results.meta;

    myResolve(); //this function switches csvready to the  'fulfilled' state and tells the other functions to proceed which are waiting
    
  }
});

//let randomNum = Math.random();
//console.log(randomNum);

async function bruh() {
      await csvready
      console.log(csv_data);
      console.log(csv_data[0]['kword'])
}

bruh()

//console.log(csv_data);
//console.log(csv_data[0])
//console.log(csv_data[0]['kword'])
//console.log(csv_meta)


//generate new key
//repeat sound button
//give answer button

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
