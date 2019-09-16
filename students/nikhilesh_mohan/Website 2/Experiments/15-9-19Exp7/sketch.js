// Resource
// Coding Train - Coding challenge #36: Blobby
// https://www.youtube.com/watch?v=rX5p-QRP6R4



function setup()
{

	let canvas = createCanvas(windowWidth-10,windowHeight/2.05)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder')
	background(0,0,0)
    stroke(255,255,255)
    frameRate(30)

  // text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)

}


//var c=100
var t=0
var u=0
var v=0
var x=0
var y=0
var z=0

function draw()
{
    background(0,20)
    t+=0.05
    u+=0.07
    v+=0.05
    x+=0.1
    y+=0.09
    z+=0.13

    var r = noise(t)
    r = map(r,0,1,100,200)
    
    strokeWeight(5)
    stroke(0,210,230)
    noFill()
    ellipse(windowWidth/2, windowHeight/4, r,r)


    var s = noise(u)
    s = map(s,0,1,150,300)
    
    strokeWeight(5)
    stroke(0,210,230)
    noFill()
    ellipse(windowWidth/2, windowHeight/4, s,s)

    ellipse(windowWidth/2, windowHeight/4, s-150,s-150)


    var a = noise(v)
    a = map(a,0,1,250,350)
    
    strokeWeight(5)
    stroke(0,210,230)
    noFill()
    ellipse(windowWidth/2, windowHeight/4, a,a)

    ellipse(windowWidth/2, windowHeight/4, a+150,a+150)

    ellipse(windowWidth/2, windowHeight/4, a+620,a+620)

    ellipse(windowWidth/2, windowHeight/4, a+720,a+720)


    var b = noise(x)
    b = map(b,0,1,300,450)
    
    strokeWeight(5)
    stroke(0,210,230)
    noFill()
    ellipse(windowWidth/2, windowHeight/4, b,b)

    ellipse(windowWidth/2, windowHeight/4, b+250,b+250)

    ellipse(windowWidth/2, windowHeight/4, b+450,b+450)

    ellipse(windowWidth/2, windowHeight/4, b+900,b+900)


    var c = noise(y)
    c = map(c,0,1,500,570)
    
    strokeWeight(8)
    stroke(0,210,230)
    noFill()
    ellipse(windowWidth/2, windowHeight/4, c,c)

    ellipse(windowWidth/2, windowHeight/4, c+200,c+200)

    ellipse(windowWidth/2, windowHeight/4, c+570,c+570)



    var d = noise(z)
    d = map(d,0,1,1120,1250)
    
    strokeWeight(10)
    stroke(0,210,230)
    noFill()
    ellipse(windowWidth/2, windowHeight/4, d,d)

    ellipse(windowWidth/2, windowHeight/4, d+200,d+200)
          

 
}

