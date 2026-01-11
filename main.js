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

const csize = 16; // defines the chart size

async function gen_link(chart_size) {
      await csvready
      var randomNum = Math.floor(Math.random() * chart_size);
      console.log(randomNum);
      //console.log(csv_data[randomNum]['kword']); 

      link = 'https://www.howtopronounce.com/korean/' + csv_data[randomNum]['kword'];
      console.log(link);

  //this function should:
  //generate the random number
  //output the corresponding link
}

gen_link(csize)

//function _find_mp3(link) {

  
//}

//another function for recalling the audio sample

//a helper function which parses the backend to find the audio link






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
