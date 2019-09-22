// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let ball1; 
let ball2;
let ball3;
let ball4;
let ball5;
let ball6;
let ball7;
let ball8;
let ball9;
let ball10;
let y = 30 

function setup(){


  let canvas = createCanvas(windowWidth/2,windowWidth/2)
  
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(34,155,215)

  
  noStroke()
  // stroke(255)
  // frameRate(50)
  ball1 = getBall() // you can use a function to create the ball object and initialize it with random values 
  ball2 = getBall()
  ball3 = getBall()
  ball4 = getBall()
ball5 = getBall()
ball6 = getBall()
ball7 = getBall()
ball8 = getBall()
ball9 = getBall()
ball10 = getBall()


}


function draw(){


  background(0)
  ball1.move();
  ball1.display();
  ball2.move();
  ball2.display();
  ball3.move();
  ball3.display();
  ball4.move();
  ball4.display();
  ball5.move();
  ball5.display();
  ball6.move();
  ball6.display();
  ball7.move();
  ball7.display();
  ball8.move();
  ball8.display();
  ball9.move();
  ball9.display();
ball10.move();
  ball10.display();
}


function getBall(){


  let ball ={
    
    size : random(10,50),
    x: random(width), // random position width of div
    y: random(height), // random position height of div
    speed:random(15),
    color:[random(255),random(255),random(255)], // this is a way of giving a random colour

    move : function(){
      //code here
      this.y += this.speed // 'this' means the variables associate with this specific ball object

      if (this.y > height || this.y < 0) {

        this.speed *=-1.1; 

      }
      
    },

    display : function(){

      //more code
      fill(this.color)
      ellipse(this.x, this.y, this.size, this.size);

    }

  }

  return ball 

}






  
 

