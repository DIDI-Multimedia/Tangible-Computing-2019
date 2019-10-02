// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
// make your own creature using this code, share via whatsapp  

let i,j,k


function setup(){
  frameRate(12)

  createCanvas(400,400);
    
let critter = {

      name: "K.I.T.T", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 150, 
      color: [0,230,210], 
      draw: drawKitt,
    
    }

    critter.draw()

let critter02 = {

      name: "Jabroni", 
      posX: width/2, 
      posY: width/2,
      rot: 0,  
      size: 150, 
      color: [215,155,214], 
      draw: drawJabroni,
    
    }

    critter02.draw()
    //drawKitt(critter)
}



// make your own creature using this code, share via whatsapp  


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
  rect(-(c.size/2),-(c.size/5),c.size,c.size/10)
  rect(-(c.size/c.size)-1,-(c.size/10),c.size/25,c.size/8)
  strokeWeight(2)
  stroke(c.color)
  noFill()
  ellipse(0,0,c.size,c.size)
  fill(0)
  ellipse(0,c.size/3.33,c.size/3.33,c.size/3.33)
  fill(c.color)
  triangle(-(c.size/4.16),-(c.size/1.78),-(c.size/2.77),-(c.size/3.33),-(c.size/25),-(c.size/3.33))
  rect(-(c.size/4.16),-(c.size/1.25),0.5,c.size/3.33)
  translate(-(c.size/4.16),-(c.size/1.162))

  fill(c.color)
  ellipse(0,0,c.size/10,c.size/10)


  pop()


}


function drawJabroni(){

      let c = this

      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name,0,-c.size/2-15)
      noStroke()
      // fill(c.color,50)
      fill(c.color[0],c.color[1],c.color[2],10)

      for (var i = c.size;i > 0; i-=5){
        console.log(i)
        ellipse(0,0,i,i)
      }
      // for (var r = c.size; r > 0 ; r-= 10){

      //   ellipse(0,0,r,r)

      // }


      fill(0)
      ellipse(c.size/10,-c.size/8,c.size/16,c.size/16)
      ellipse(-c.size/10 ,-c.size/8,c.size/16,c.size/16)
      ellipse(0 ,c.size/20,c.size/8,c.size/8)
      stroke(255,150)
      strokeWeight(5)
      line(c.size/2,-c.size/12,c.size/2+c.size/12,c.size/12)
      line(-c.size/2,-c.size/12,-c.size/2-c.size/12,c.size/12)
      line(c.size/12,c.size/2,c.size/12,c.size*0.6)
      line(-c.size/12,c.size/2,-c.size/12,c.size*0.6)
      pop()


    }

