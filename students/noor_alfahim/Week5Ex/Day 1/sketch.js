/*

Gradient Array

*/


let i,j,k


function setup(){

	textSize(50)
	textAlign(CENTER)
	createCanvas(windowWidth/2,windowWidth/2);



      let critter = {

      name: "Yogi", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 100, 
      color: [150,150,150],
      draw: drawYogi
    
    }

    let critter02 = {

      name: "piggy", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 100, 
      color: [215,155,200],
      draw: drawPiggy
    
    }

    critter.draw()
    push()
    translate(150,0)
    critter02.draw()
    pop()

    // drawCreature(critter)



}



// make your own creature using this code, share via whatsapp  


    function drawYogi(){


    let c = this
     
    push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(c.color)
      noStroke()

      push()
      translate(-c.size/2,-c.size/2)
      triangle(40,30,30,60,-10,-10)
      pop()

      rect(-50,-50,c.size,c.size)
      fill (0)
      ellipse(15,-20,10,10)
      ellipse(-15,-20,10,10)
      rect(-20,15,40,10)
      triangle(-5,5,5,5,0,10)

      fill(255)
      ellipse(17,-22,3,3)
      ellipse(-13,-22,3,3)
      ellipse(15,-18,5,5)
      ellipse(-15,-18,5,5)
      stroke (5)
      rect(-20,15,5,5)
      rect(-15,15,5,5)
      rect(-10,15,5,5)
      rect(-5,15,5,5)
      rect(0,15,5,5)
      rect(5,15,5,5)
      rect(10,15,5,5)
      rect(15,15,5,5)
      rect(-20,20,5,5)
      rect(-15,20,5,5)
      rect(-10,20,5,5)
      rect(-5,20,5,5)
      rect(0,20,5,5)
      rect(5,20,5,5)
      rect(10,20,5,5)
      rect(15,20,5,5)




      pop()



}

function drawPiggy()
{
	let c = this
	push()
  translate(c.posX, c.posY)
  noStroke()
  rectMode(CENTER)
  text(c.name, c.size, -c.size)
  fill(c.color)
  //face
  rect(0, 0, c.size, c.size)
  pop()

  //nose
  push()
  rectMode(CENTER)
  translate(c.posX, c.posY + 15)
  strokeWeight(3)
  stroke(240, 180, 230)
  fill(215, 155, 214)
  rect(0, 0, 50, 30)
  pop()

  //nostrils
  push()
  rectMode(CENTER)
  translate(c.posX, c.posY + 15)
  noStroke()
  fill(200, 90, 90)
  rect(-18, 0, c.size / 10, c.size / 10)
  rect(18, 0, c.size / 10, c.size / 10)
  pop()

  //eyes
  push()
  rectMode(CENTER)
  noStroke()
  translate(c.posX, c.posY)
  fill(0)
  rect(-44.75, -6.5, c.size / 10, c.size / 10)
  rect(44.75, -6.5, c.size / 10, c.size / 10)
  fill(255)
  rect(-35, -6.5, c.size / 10, c.size / 10)
  rect(35, -6.5, c.size / 10, c.size / 10)
  pop()

}








