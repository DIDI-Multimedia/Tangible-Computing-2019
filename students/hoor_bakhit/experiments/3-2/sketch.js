// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

let balls = []
// let ball2;
// let ball3;
// let ball4;
let y = 30 

function setup(){


  let canvas = createCanvas(windowWidth/2,windowWidth/2)
  
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(34,155,215)


	

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');
	background(0)


  noStroke()
  let numBalls = 9

  for (var i = 0; i < numBalls; i++){
    let newBall = getBall(i)
    balls.push(newBall) // adds new ball to the array
  }
  // stroke(255)
  // frameRate(50)
  // ball1 = getBall() // you can use a function to create the ball object and initialize it with random values 
  // ball2 = getBall()
  // ball3 = getBall()
  // ball4 = getBall()


}


function draw(){


  background(0)
  stroke(255,50)
  strokeWeight(10)
  noFill()
  ellipse(width/2,height/2,width/2,height/2)
  // ball1.move();
  // ball1.display();
  // ball2.move();
  // ball2.display();
  // ball3.move();
  // ball3.display();
  // ball4.move();
  // ball4.display();

  // stroke(255)

  for (var i = 0; i < balls.length; i++){

    let ball = balls[i]
    ball.collide(balls)
    ball.move()
    ball.display()

  }

  balls.sort((a, b) => (a.x > b.x) ? 1 : -1)
  // stroke(25/5)
  for (var i = 0; i < balls.length; i+=100){
    let row = []
    for (var j= 0; j < 100; j++){

      let item = i+j

      row.push(balls[item])

    }

    row.sort((a, b) => (a.y > b.y) ? 1 : -1)
    // console.log('row', row.length)

    for (var k =0; k < row.length-1; k++){
        let a = row[k]
        let b = row[k+1]
        // line(a.x,a.y,b.x,b.y)  
      }

  }

}


function getBall(id){


  let ball ={

    id:id,
    size : random(3,9),
    x: width/2+random(-100,100), // random position width of div
    y: height/2+random(-100,100), // random position height of div
    speedX:random(-1,1),
    speedY:random(-1,1),
    color:[random(255),random(255),random(255)], // this is a way of giving a random colour

    move : function(){
      //code here
          // this.size *= 1.05
      this.x += this.speedX // 'this' means the variables associate with this specific ball objec
      this.y += this.speedY // 'this' means the variables associate with this specific ball object

      if (dist(this.x,this.y,width/2,height/2) > width/4){
        this.speedX *= -random(.9,1.1)
         this.speedY *= -random(.9,1.1)
         this.move()
         // balls.push(getBall(balls.length)) // // adds new ball to the array
      }
      if (this.y > height || this.y < 0) {

        // this.speedX *=-1; 
        this.speedY *=-1; 
         // balls.push(getBall(balls.length)) // adds new ball to the array
       // this.size *= 0.99
      }
     
     if (this.x > width || this.x < 0) {

        this.speedX *=-1; 
         // balls.push(getBall(balls.length)) // adds new ball to the array
               // this.size *= 0.99
        // this.speedY *=-1; 

      }
      
    },

    collide: function(balls){

      for (var i = 0; i < balls.length; i++){

        if (i != this.id) { // ball cant collide with itself
          let other = balls[i]
          if (dist(this.x,this.y,other.x,other.y) < this.size/2 + other.size/2){

            // console.log('collide!')

            this.speedX *= -.99 
            other.speedX *= -1.01
            this.speedY *= -.99
            other.speedY *= -1.01
            // this.size *= 0.99
            // other.size *=0.99
            // this.move()
            // other.move()
          }

        }

      }

    
    },

    display : function(){

      //more code
      noStroke()
      fill(this.color)
      ellipse(this.x, this.y, this.size, this.size);

    }

  }

  return ball 

}


  
