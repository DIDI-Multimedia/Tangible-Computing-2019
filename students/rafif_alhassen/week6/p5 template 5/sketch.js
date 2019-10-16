let x = 200;
let y = 200;

let fr = 30;

let thoughts = ["i am hungry", "i am stressed out", "who is texting me", "what should i have for lunch", "i am tired", "i am overwhelmed", "i am struggling"]


let firstPart = ["I am", "Who is","She is","He is","We are","They are"]

let secondPart = [" hungry", " late for class", " eye infection, miss"]


let freeThoughts = []

// var lastPrint;
// var v = 0;

// thoughts.lifespan = 2;

function setup() {

  // img = loadImage('assets/final.png');
  createCanvas(499, 725);
  // img = loadImage("assets/final.png");
  // image(img, mouseX, mouseY);
  // stroke(0)
  frameRate(fr);
  background(0);
  console.log(adjectives)
  lifeSpan = 0.2;
  // lastPrint = millis () - 3000;
  // fill(255)

}

function draw() {

  // var timeElapsed = millis( - lastPrint;

  //   if (timeElapsed > 3000) {
  //     v++;
  //     console.log(v);
  //     last Print = millis(); 

  background(0);
  drainBrain()
  // fill(random(255),random(255),random(255));
  stroke(0);
  frameRate(fr);
  fill(0);
  textFont('Times New Roman');
  textSize(20);
 
  for (var i = 0; i < freeThoughts.length; i++){
    let tht = freeThoughts[i]
    text(tht.txt,tht.x,tht.y)
    move(tht)
  }

  // background(0);

  // fill(random(255),random(255),random(255));
  // stroke(random(255),random(255),random(255));
  // rectMode(CENTER);
  // point(x, y, 20, 20);  
  // point(y, x, 50, 50);

  

  // if (mouseIsPressed) {
  //   fill(255, 150);
  //   noStroke();
  //   ellipse(mouseX, mouseY, 60, 60);
  }

  var r = 80
  var g = 120
  var b = 255

function mousePressed(){
  console.log('mouse pressed')
  // creates a new thought 

  let tht = {}
  tht.x = width/2 
  tht.y = height/2 
  tht.txt = getRandomThought(firstPart) + " " + getRandomThought(adjectives)
  // tht.lifespan = 2;
  frameRate(fr);
  freeThoughts.push(tht)
  this.lifeSpan--
  fill(random(255), random(255), random(255))
  r = random(50+20,r);
  g = random(30+10,g);
  b = random(70+35,b);


}

function drainBrain(){

  console.log('brain')
  noStroke()
  fill(255);
  fill(r,g,b);
  frameRate(fr);
  ellipse(width/2,height/2,300,500)
  // ellipse(500,00);
}


function move(tht){

  tht.x += random(-5, 5);
  tht.y += random(-5, 5);
  frameRate(fr);

}

// function mousePressed(){
//   console.log('mouse pressed')
//   // creates a new thought 

//   let tht = {}
//   tht.x = width/2 
//   tht.y = height/2 
//   tht.txt = getRandomThought(firstPart) + " " + getRandomThought(adjectives)
//   // tht.lifespan = 2;
//   frameRate(fr);
//   freeThoughts.push(tht)
//   fill(random(255), random(255), random(255)
//   ellipse();

// }


function getRandomThought(wordList){

  let string =  wordList[Math.floor(random(wordList.length))] // get random thought

  return string 
   frameRate(fr);

}


// add life span
// add color to the background? changes? 
// add pronouns 
// as one thought appears the other disappears
// font & font size changes


// source: https://www.youtube.com/watch?v=TaluaAD9MKA&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s


// let x = 200;
// let y = 200;

// function setup() {
//   createCanvas(400, 400);
//   background(0);
// }

// function draw() {
//   // background(0);
//   x += random(-5, 5);
//   y += random(-5, 5);
//   fill(255,200);
//   stroke(255);
//   rectMode(CENTER);
//   point(x, y, 20, 20);

//   // if (mouseIsPressed) {
//   //   fill(255, 150);
//   //   noStroke();
//   //   ellipse(mouseX, mouseY, 60, 60);
//   }


// // source: https://www.youtube.com/watch?v=TaluaAD9MKA&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s