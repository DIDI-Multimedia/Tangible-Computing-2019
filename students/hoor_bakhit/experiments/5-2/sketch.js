// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

 
let i,j,k


function setup(){

  createCanvas(500,500);
      let critter = {



      name: "", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 300, 
      color: [34, 43, 113],
      draw: drawJabroni 
    
    }

   
critter.draw()


}







function drawJabroni(){


let c = this
      push()
   
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name,0,-c.size/2-15)
      noStroke()
      // fill(c.color,50)
      fill(c.color[0],c.color[1],c.color[2],30)

      
      for (var i = c.size;i > 0; i-=30){
        console.log(i)
        ellipse(0,0,i,i)
        

       
      }
      // for (var r = c.size; r > 0 ; r-= 10){

      //   ellipse(0,0,r,r)

      // }


      
      
     
      
     
      
      pop()


    }