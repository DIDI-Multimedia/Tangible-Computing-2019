function setup(){

  createCanvas(400,400);
  // canvas.parent('sketch-holder');
      let critter = {

      name: "Punk Meow", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 50, 
      color: [215,155,214],
      draw: drawMeow,
    
    }

    critter.draw()



}


    function drawMeow(){
     
      let c = this
      push()
    
  

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(155)
      stroke(0)
      strokeWeight(0.1)
      rect(0,0,c.size,c.size)
    

      fill(255)
      rect(2,c.size/3,c.size/3,c.size/6)
      rect(30,c.size/3,c.size/3,c.size/6)
      
      fill(0)
      rect(2,c.size/3,c.size/6,c.size/6)
      rect(30,c.size/3,c.size/6,c.size/6)
      
       fill(255)
       noStroke()
       ellipse(5,c.size/2.5,c.size/10,c.size/10)
       ellipse(33,c.size/2.5,c.size/10,c.size/10)

       fill(255,9,150,200)
       strokeWeight(20)
       triangle(2,1,20,3,-40,8)
       triangle(2,1,-20,3,40,8)
       triangle(20,15,10,10,22,-20)


      pop()
    }