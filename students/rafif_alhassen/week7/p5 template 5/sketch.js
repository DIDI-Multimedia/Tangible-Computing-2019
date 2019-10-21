let x = 200;
let y = 200;

let fr = 30;

let thoughts = ["i am hungry", "i am stressed out", "who is texting me", "what should i have for lunch", "i am tired", "i am overwhelmed", "i am struggling"]


let firstPart = ["I am", "Who is","She is","He is","We are","They are","You are"]

let secondPart = ["hungry", " late for class", " eye infection, miss"]

let thirdPart = ["feeling"]

let fourthPart = ["in Abu Dhabi", "in Dubai", "in Sharjah", "in university", "at the movies", "in the car", "at the coffee shop", "at home", "at the beach", "in the mall", "in the restaurant", "with her friends", "with his friends", "with your friends"]

let fonts = ['Helvetica', 'Times New Roman', 'Comic Sans', 'Typewriter']

// let angle = 0.0;

// let jitter = 0.0;


// let position = ["CENTER", "RIGHT", "LEFT"]


let freeThoughts = []

// var lastPrint;
// var v = 0;

// thoughts.lifespan = 2;

function setup() {

  // img = loadImage('assets/final.png');
  createCanvas(window.innerWidth, window.innerWidth);
  textAlign(CENTER)
  // img = loadImage("assets/final.png");
  // image(img, mouseX, mouseY);
  // stroke(0)
  frameRate(fr);
  background(0);
  console.log(adjectives)
  lifeSpan = 0.2;
  ellipseMode(CENTER);
  // rotate(90);
  // lastPrint = millis () - 3000;
  // fill(255)

}


  var r = 80
  var g = 120
  var b = 255

  var clickPos;

function draw() {

  // var timeElapsed = millis( - lastPrint;

  //   if (timeElapsed > 3000) {
  //     v++;
  //     console.log(v);
  //     last Print = millis(); 

  background(r,g,b);

  // if (clickPos) {
  //   text(getRandomThought(firstPart) + " " + getRandomThought(thirdPart) + " " + getRandomThought(adjectives) + " " + getRandomThought(fourthPart), clickPos[0], clickPos[1]);
  // }

  drainBrain()
  // fill(random(255),random(255),random(255));
  stroke(0);
  frameRate(fr);
  fill(255);
  noStroke()
  //   if (second() % 2 === 0) {
  //   jitter = random(-0.1, 0.1);
  // }

  // angle = angle + jitter;
  // let c = cos(angle);
  // translate(width / 6, height / 6);
  // rotate(c);

  ellipse(width/2, height/2, 3000, 3000);
  // ellipse(2200,2100,3000,3000);
 
  for (var i = 0; i < freeThoughts.length; i++){
    let tht = freeThoughts[i]
    // console.log(tht.lifeSpan)
    fill(0,tht.lifeSpan)
    textSize(tht.size);
    textFont(tht.font);
    // textAlign(tht.Align);
    // push();
    // translate(100,100);
    // rotate( radians(frameCount) );
    // text(tht.txt,tht.x,tht.y);
    push()
    translate(tht.x,tht.y)
    rotate(tht.rotate)
    // text(tht.txt,0,0);

        for (var s = 3; s > 1; s--){
    // let tht = freeThoughts[s]
    textSize(tht.size+s);
    fill(0,0,0,tht.lifeSpan)
    text(tht.txt,0,s*10);
  }    

    // rotate(PI / 3.0);
    pop();
    move(tht)
  }  



  }



function getThought(){

  let thought = getRandomThought(firstPart) + " " + getRandomThought(thirdPart) + " " + getRandomThought(adjectives) + " " + getRandomThought(fourthPart)  
  if (random()>0.9){
    thought += ""
  } else if (random()>0.8) { 

    thought += ""


  }
  
  return thought 

}

function mousePressed(){

  console.log('mouse pressed')
  let d = dist(mouseX,mouseY,width/2,height/2) 
  console.log('distance: ', d)
  let radius = 1500
  if (d < radius){
  let tht = {}
  tht.x = mouseX  
  tht.y = mouseY 
  tht.size = random(1,200)
  // tht.Align = random(textAlign)
  tht.font = random(fonts)
  tht.txt = getThought()

  tht.dead = random(1,10)
  // tht.lifespan = 2;
  frameRate(fr);
  freeThoughts.push(tht)
  tht.lifeSpan = 255
  tht.rotate = random(0,TWO_PI) //random rotation in radians
  tht.r = random(255);
  tht.g = random(255);
  tht.b = random(255);

  fill(random(255), random(255), random(255))
  r = random(255);
  g = random(255);
  b = random(255);

  }




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

  tht.lifeSpan -= tht.dead
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


// make canvas ellipse
// add pronouns more options
// as one thought appears the other disappears
// font & font size changes
// add cities "he is weird in chicago"
// rotate text & appear in different parts 


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