let x = 200;
let y = 200;


// let thoughts = ["i am hungry", "who is texting me", "what is my dog thinking about"]
// let freeThoughts = []

function setup() {

  createCanvas(400, 400);
  stroke(0)
  background(0);
  fill(255)

}

function draw() {

  // for (var i = 0; i < freeThoughts.length; i++){
  //   let tht = freeThoughts[i]
  //   text(tht.txt,tht.x,tht.y)
  // }

  background(0);
  x += random(-5, 5);
  y += random(-5, 5);
  fill(random(255),random(255),random(255));
  stroke(random(255),random(255),random(255));
  rectMode(CENTER);
  point(x, y, 20, 20);  
  point(y, x, 50, 50);

  

  // if (mouseIsPressed) {
  //   fill(255, 150);
  //   noStroke();
  //   ellipse(mouseX, mouseY, 60, 60);
  }

// function mousePressed(){

//   // creates a new thought 

//   let tht = {}
//   tht.x = width/2 
//   tht.y = height/2 
//   tht.text = thoughts[Math.floor(random(thoughts.length))] // get random thought

//   freeThoughts.push(tht)



}


// source: https://www.youtube.com/watch?v=TaluaAD9MKA&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s