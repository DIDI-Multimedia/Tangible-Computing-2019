


function setup(){

  
  createCanvas(1000,1000);
      let critter = {

      name: "Hippo", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 150, 
      color: [random(255),random(255),random(255)], 
      draw: drawHippo,
    
    }
      
            let critter02 = {

      name: "Punk Meow", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 50, 
      color: [215,155,214],
      draw: drawMeow,
    
    }

    critter02.draw()
     critter.draw()

    



}



// make your own creature using this code, share via whatsapp  


    function drawHippo(){
      
      let c = this
     
      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(c.color)
      // ellipse(0,0,c.size,c.size)
      ellipse(0,30,c.size-50,c.size-50); 
      fill(0)
      ellipse(15,6,c.size-140,c.size-140); 
      ellipse(-15,6,c.size-140,c.size-140); 
      fill(random(255),random(255),random(255));
      ellipse(-30,-30,c.size-100,c.size-100); 
      ellipse(35,-30,c.size-100,c.size-100);
       ellipse(35,-30,c.size-125,c.size-125);
      ellipse(-30,-30,c.size-125,c.size-125);
      ellipse(2,90,c.size-10,c.size-10);  
      ellipse(2,90,c.size-30,c.size-30);  


     
      
      pop()


    }

    function drawMeow(){
     
      let c = this
      push()
    
  

      translate(300,400)
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