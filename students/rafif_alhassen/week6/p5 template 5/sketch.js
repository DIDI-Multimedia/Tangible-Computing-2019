let x = 200;
let y = 200;

let thoughts = ["i am hungry", "i am stressed out", "who is texting me", "what should i have for lunch", "i am tired", "i am overwhelmed", "i am struggling"]
let freeThoughts = []

function setup() {

  // img = loadImage('assets/final.png');
  createCanvas(499, 725);
  // img = loadImage("assets/final.png");
  // image(img, mouseX, mouseY);
  // stroke(0)
  background(0);
  // fill(255)

}

function draw() {

  background(0);
  fill(random(255),random(255),random(255));
  stroke(0);
 
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

function move(tht){

  tht.x += random(-5, 5);
  tht.y += random(-5, 5);

}

function mousePressed(){
  console.log('mouse pressed ')
  // creates a new thought 

  let tht = {}
  tht.x = width/2 
  tht.y = height/2 
  tht.txt = thoughts[Math.floor(random(thoughts.length))] // get random thought

  freeThoughts.push(tht)



}


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