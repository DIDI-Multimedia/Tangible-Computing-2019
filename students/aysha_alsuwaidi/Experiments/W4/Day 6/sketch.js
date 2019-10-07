
let x = 0
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


  }


function draw() {

 x=x-2;
 if (x< 1){
 	x= height;
 }

stroke(255)
line(2,width/2,x,x);
stroke(255)
line(10,width/6,x,x);
stroke(255)
line(width/10,100,x,x);
}


// function setup() {
// let canvas = createCanvas(windowWidth/3, windowWidth/3)
//   canvas.parent('sketch-holder');
//   background(255)

// }

// function draw(){

//       if (mouseIsPressed === true) {
//         stroke(200,random(255),random(255),random(255))
//         strokeWeight(70)
//         line(mouseX, mouseY, pmouseX, pmouseY);
//   }
// }

