// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// 18-9-19 

// Resource
// https://www.openprocessing.org/sketch/742403
//author: Vamoss
//I used this code to understand the logic and find aspects I could dincorporate into our clock project




var moveSpeed = 0.4
var moveScale = 500

function setup() 
{
  let canvas = createCanvas(windowWidth,windowHeight/2)
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder')
  background(0)
  noStroke()
  
  colors = [color("#02a17b"), color("#8431a7"), color("#0390bb"), color("#d80036")]
  pos = []

  for(let i = 0; i < 500; i++)
  {
    pos.push(
    {
      x:random(width),
      y:random(height),
      c:colors[floor(random(colors.length))]
    })
  }

}

function draw() 
{
  for(let i = 0; i < pos.length; i++)
  {
    with(pos[i])
    {
      let angle = noise(x / moveScale, y / moveScale) * TWO_PI * moveScale;
      x += cos(angle) * moveSpeed
      y += sin(angle) * moveSpeed

      fill(c)
      ellipse(x, y, 1, 1)

      if(x > width || x < 0 || y > height || y < 0 || random(1) < 0.001 )
      {
        x = random(width)
        y = random(height)
      }

    }
  }
}

