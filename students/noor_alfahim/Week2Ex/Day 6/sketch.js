// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let X = 800; 

const boxLocX = 50
const boxLocY = 50
function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/3)
	
	canvas.parent('sketch-holder');
	background(180)






}

function draw(){

     background(180)

     stroke(255)
     fill(255,30)
     
     ellipse(mouseX, mouseY, 100, 100)

       let d = int(dist(mouseX, mouseY, boxLocX, boxLocY));
       console.log('d=',d)

     if(d < 50)
     {
     	fill(255)
    	rect(150,150,50,50)




     }



     

  

}


