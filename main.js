console.log("main.js loaded");

let csv_data; //loads empty variable
let csv_meta;
let myResolve;
let myReject;
let link;

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

const csize = 103; // defines the chart size

async function gen_link(chart_size) {
      await csvready
      var randomNum = Math.floor(Math.random() * chart_size);
      console.log(randomNum);
      //console.log(csv_data[randomNum]['kword']); 

      link = csv_data[randomNum]['mp3'];
      console.log(csv_data[randomNum]['kword']);

  //this function should:
  //generate the random number
  //output the corresponding link
}

var randomNum = Math.random(); //for testing
console.log(randomNum);


const sound = new Howl({
  src: [link], 
  preload: true, 
  html5: false,
});

function playnew() {
  gen_link(csize);
  sound.play();
}

function playsound() {
  sound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const buttonb = document.querySelector(".button-b");
  buttonb.addEventListener("click", playnew);
  const buttonc = document.querySelector(".button-c");
  buttonc.addEventListener("click", playsound);
});





//notes
//https://docs.google.com/spreadsheets/d/16pRPe1aNRoQbcihSBkGs5La5b59gQ0bCq1-ss09pgFI/edit?gid=0#gid=0
