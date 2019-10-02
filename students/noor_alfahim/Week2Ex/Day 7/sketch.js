// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

    let canvas = createCanvas(windowWidth/2,windowWidth/3)
    
    canvas.parent('sketch-holder');
    background(random(100), random(50), random(10))




}

function draw(){
    background(255, 100, random(150))
    a = 10

    strokeWeight(mouseX/20)
    fill (mouseY/2, mouseX/7,100)
    line(mouseY,mouseY*50, mouseX,mouseX/100)
    
if (a >= 255) {
    a = 10
}

    }


