var mic;
let x = 23
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)

  mic = new p5.AudioIn();
  mic.start();
  }


function draw() {


var vol= mic.getLevel();

 x=x-20;
 if (x< 1){
 	x= height;
 }
noFill()
stroke(random(255),random(255),random(255))
  strokeWeight(2)


line(20,width/2,vol*1000,vol*1000);

line(10,width/6,vol*1000,vol*1000);

line(width/10,100,vol*1000,vol*1000);



  console.log(vol)
}