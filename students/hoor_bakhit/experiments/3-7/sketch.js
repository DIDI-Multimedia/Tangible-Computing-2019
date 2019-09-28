// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(random(255),155,215)

		// var string = x + "," + y
		// text(string,x*step+20,y*step+20)
frameRate(10)
	//text (x,x*step,height/2)
	
}


//text (x,x*step,height/2)
//x++
//text (x,x*step,height/2)
//x++
//text (x,x*step,height/2)


function draw(){

    
   

    background(random(225),155,215);


    fill(255);

   for(var i = 0; i < 20; i++) {
    	var x = random(400) + 1;
      var y = random(400) + 1;
      ellipse(x, y, 20, 20);
   
    }
  }
