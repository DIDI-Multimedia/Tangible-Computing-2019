// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
//


var xoff = 0;

function setup(){

  createCanvas(500,500);
     
    color: [34, 43, 113]
    }




function draw(){
  let c = this

background(225)

      
   
      // fill in code here, draw a funny face
var x = map(noise(xoff), 0, 1, 0, width);
xoff += 0.01;
     
   
fill(c.color[0],c.color[1],c.color[2],30)
      

       for (var i = 200;i > 0; i-=30){
        ellipse(x,200,i,i)
        

      } 
      }

      function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();

      }// for (var r = c.size; r > 0 ; r-= 10){

      //   ellipse(0,0,r,r)

      // }


      
      
     
      
     
      
    


    
  

