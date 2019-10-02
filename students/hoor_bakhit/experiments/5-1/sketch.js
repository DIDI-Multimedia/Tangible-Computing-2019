// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
 
let i,j,k


function setup(){

  createCanvas(400,400);
      let critter = {

      name: "Me!", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 50, 
      color: [215,155,214],
      draw: drawAngryStickman 
    
    }

    let critter02 = {

      name: "KITT", 
      posX: width/4, 
      posY: width/4,
      rot: 0,  
      size: 50, 
      color: [215,155,214],
      draw: drawKitt 
    
    }

    critter.draw()
    critter02.draw()



}



// make your own creature using this code, share via whatsapp  


    function drawAngryStickman(){
     
let c = this

      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(c.color)
      ellipse(0,0,c.size,c.size)

fill(0)

      ellipse(10,-10,c.size-40,c.size/16)
      ellipse(-10,-10,c.size/5,c.size/16)

fill(216,95,125)
stroke(0)
strokeWeight(2)
  arc(0, 10, c.size-20, c.size-30, PI, TWO_PI);
  
fill(0)
  strokeWeight(7)
  line(0,120,0,26)
line(1,20,c.size,c.size+10)
line(1,20,-c.size,c.size+10)
line(1,120,-c.size,c.size*3.5)
line(1,120,c.size,c.size*3.5)


      pop()


    }

     function drawKitt(){

      let c = this
     
  push()
    
  // fill in code here, draw a funny face

  translate(c.posX,c.posY)
  fill(255)
  text(c.name, c.size,-c.size)
  fill(c.color)
  ellipse(0,0,c.size,c.size)
  fill(0)
  rect(-(c.size-20),-c.size/5,c.size+10,c.size/10)
  rect(-(c.size/c.size),-(c.size/12.5),4,2,6)
  strokeWeight(2)
  stroke(c.color)
  noFill()
  ellipse(0,0,c.size,c.size)
  fill(0)
  ellipse(0,15,15,15)
  fill(c.color)
  triangle(-12,-28,-18,-15,-2,-15,)
  rect(-12,-40,0.4,15)
  ellipse(-12,-43,4,4)


  pop()


}
  

