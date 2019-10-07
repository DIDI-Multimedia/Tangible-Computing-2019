/*

Gradient Array

*/


function setup(){

  createCanvas(800,800);
  stroke(255)


  // make your own creature using this code, share via whatsapp  

   let critter = {

      name: "name", 
      posX: random(width), 
      posY: random(height),
      rot: 0,  
      size: 10, 
      color: [215,155,214] 
    
    }



    drawCreature(critter)

}

function drawCreature(c){
  console.log('draw creature')
    
    push()
    
    //   // fill in code here, draw a funny face

    //   translate(c.posX,c.posY)
    //   text(c.name, 0,0)
      ellipse(0,0,c.size,c.size)

      pop()

}