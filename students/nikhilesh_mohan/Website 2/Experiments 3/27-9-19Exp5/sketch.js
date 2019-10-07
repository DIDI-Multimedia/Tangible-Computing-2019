// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// 18-9-19 



function setup() 
{
  let canvas = createCanvas(windowWidth,windowHeight/2)
  
  canvas.parent('sketch-holder')
  background(0)
  noStroke()
  

}

function draw() 
{
  var x=random(windowWidth)
  var y=random(windowHeight)
  for(let i = 0; i < 100; i++)
  {

      let angle = map(noise(x/100, y/100),0,1,100,300)
      x += cos(angle) * 10
      y += sin(angle) * 10

      fill(0,210,230)
      ellipse(x, y, 1, 1)
    }
  }


