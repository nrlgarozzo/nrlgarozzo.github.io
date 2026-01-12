console.log("main.js loaded");

let csv_data; //loads empty variable
let csv_meta;
let csvResolve;
let csvReject;
let link = null;

const csvready = new Promise((resolve, reject) => {
  csvResolve = resolve; 
  csvReject = reject;
}); //defining a constant with three states: pending, fulfilled, rejected


Papa.parse("ape.csv", {
  download: true,
  header: true,
  complete: function(results) {
    csv_data = results.data;
    csv_meta = results.meta;

    csvResolve(); //this function switches csvready to the  'fulfilled' state and tells the other functions to proceed which are waiting
    
  }
});

const csize = 103; // defines the chart size

async function gen_link(col_size) {
      await csvready
      var randomNum = Math.floor(Math.random() * col_size);
      console.log(randomNum);
      //console.log(csv_data[randomNum]['kword']); 

      console.log(csv_data[randomNum]['kword']);

      return csv_data[randomNum]['mp3'];

}

var randomNum = Math.random();
console.log(randomNum);


async function newsound() {
  link = await gen_link(csize)
}

function playsound() {
  if (!link) {
    throw new Error('sound not ready')
  }
  const sound = new Howl({ src: [link], html5: true, preload: true});
  sound.play()
}


document.addEventListener("DOMContentLoaded", () => {
  const buttonb = document.querySelector(".button-b");
  buttonb.addEventListener("click", newsound);
  const buttonc = document.querySelector(".button-c");
  buttonc.addEventListener("click", playsound);
});





//notes
//https://docs.google.com/spreadsheets/d/16pRPe1aNRoQbcihSBkGs5La5b59gQ0bCq1-ss09pgFI/edit?gid=0#gid=0
