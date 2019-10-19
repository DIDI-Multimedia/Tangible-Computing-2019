var mic;
var fft;

var volhistory = [];

function setup(){
	let canvas = createCanvas(windowWidth/2,windowWidth/4)
	canvas.parent('sketch-holder');

	mic = new p5.AudioIn()
	mic.start()
	fft = new p5.FFT();
  	fft.setInput(mic);

}


function draw(){
  	background(0)
	let spectrum =  fft.wavelength();
	volhistory.push(vol)
noFill()
stroke(255)

// push()
// translate(0, windowWidth/2)

beginShape();
	for (var i = 0; i < spectrum.length; i++) {
		vertex(i, width/2)
	}
endShape();
// pop()
	// fill(vol*255,vol*59,vol*200)
	// ellipse(width/2, width/2,600,600)
}