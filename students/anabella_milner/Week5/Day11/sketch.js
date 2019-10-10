let i,j,k


function setup(){

  createCanvas(400,400);
  background(255);

      let critter = {

      name: "Santa", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 50, 
      color: [215,155,214],
     // tail: true,
      draw: drawSanta
    
    }

  
    //drawSanta(critter)

      let critter02 = {

      name: "pikky", 
      posX: width/5, 
      posY: width/2,
      rot: 0,  
      size: 50, 
      color: [0],
       draw: drawCreature
    
    }

critter.draw()
critter02.draw()




}



// make your own creature using this code, share via whatsapp  


    function drawSanta(){

      let c = this
     
      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      
      fill(214,13,13)
       ellipse(c.size-50,c.size+15,c.size*2,c.size*2)

       fill(236,203,138)
       ellipse(c.size-50,c.size-50,c.size,c.size)


       fill(255,220)
        ellipse(c.size-50,c.size/1.85,c.size+1.5,c.size+1.5)


        fill(214,13,13)
        triangle(-c.size/2, -c.size/3.5, c.size/50, -c.size+-2, c.size/2, -c.size/3)  

        fill(255)
        line(-c.size/5, c.size/5, c.size/5, c.size/5)
        line(-c.size/4, -c.size/6.25, -c.size/10-1, -c.size/5)
         line(c.size/4, -c.size/6.25, c.size/10-1, -c.size/5)
         ellipse(c.size-50,c.size-102,c.size/3,c.size/3)


        fill(0)
        ellipse(c.size/6.25,-c.size/16.6,c.size/7,c.size/7)
        ellipse(-c.size/6.25,-c.size/16.6,c.size/7,c.size/7)
         ellipse(c.size-50,c.size+10,c.size/3,c.size/3)
         ellipse(c.size-50,c.size+30,c.size/3,c.size/3)

        


     

      pop()


    }


   function drawCreature(){
     let c= this
      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(c.color)
      ellipse(10,20,c.size-10*2,c.size*3)
       ellipse(-30,10,c.size*2,c.size/10)
       ellipse(1,1,c.size-9,c.size*2)
       ellipse(40,29,c.size,c.size/2)

      pop()

}








    