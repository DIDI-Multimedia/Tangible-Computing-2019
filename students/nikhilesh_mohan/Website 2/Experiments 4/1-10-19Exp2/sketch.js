// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
// make your own creature using this code, share via whatsapp  

// Resource:
// https://www.youtube.com/watch?v=E4RyStef-gY
// - Coding Challenge #74: Clock with p5.js - Daniel Shiffman


function setup()
{
  frameRate(12)
  
  createCanvas(windowWidth,windowHeight/2);
  angleMode(DEGREES)
  
}



// make your own creature using this code, share via whatsapp  

function draw()
{
  background(0)
  translate(windowWidth/2, windowHeight/4)
  rotate(-90)

  let hr=hour()
  let min=minute()
  let sec=second()

  strokeWeight(1)
  stroke(0, 210, 230)
  noFill()

  
  

  let end1 = map(sec, 0, 60, 0 ,360)
  arc(0,0, 440,440, 0,end1)

  let end2 = map(min, 0, 60, 0 ,360)
  arc(0,0, 400,400, 0,end2)

  let end3 = map(hr, 0, 12, 0 ,360)
  arc(0,0, 360,360, 0,end3)

}