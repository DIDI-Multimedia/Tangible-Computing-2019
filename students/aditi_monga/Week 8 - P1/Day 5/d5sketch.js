let mic
let a = 0
let fft
let tall = 1
let peakDetect

function setup() {
 let canvas = createCanvas(windowWidth/1.25,windowHeight/1.25)
  canvas.parent('sketch-holder')
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9,64);
  fft.setInput(mic);
   peakDetect = new p5.PeakDetect(180, 20000, 0.1, 60)
  angleMode(DEGREES)
}

function draw() {
  let vol = mic.getLevel();
  let spectrum =  fft.analyze();
  peakDetect.update(fft);

  let col = map (vol*1000, 0, width, 0, 255)
 
  background(col,50,70,80);


  if (vol > 0.2){
    a = a + 0.04
        // strokeWeight (8)
  } else {
    a = a - 0.005
     // strokeWeight(1)
  }


  if (peakDetect.isDetected) {
    strokeWeight (8)
        tall = 1.25
  } else {
    strokeWeight(1)
     tall = 1
}

// for (var x = 0; x < width; x+=500) {
 

  // console.log(spectrum)
  for (var i = 0; i < spectrum.length; i++){
  stroke(random(255),255, 153)
  push()

  // movement = map (mouseX, 0, width, 0, 200)
  translate(width/2,height/2)
   scale(1.25)
  rotate(i*a)   
  rect (i, 10, 1, (spectrum[i])*tall)
  pop()

  }
}
// }