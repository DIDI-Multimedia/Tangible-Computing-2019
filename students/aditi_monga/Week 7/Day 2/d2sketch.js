// from https://p5js.org/reference/#/p5.PeakDetect

let mic
let fft
let peakDetect
let ellipseWidth = 40

function setup() {

 let canvas = createCanvas(windowWidth/2,windowHeight/2)
  canvas.parent('sketch-holder')

  mic = new p5.AudioIn()
  mic.start()

  fft = new p5.FFT()
  fft.setInput(mic)
  peakDetect = new p5.PeakDetect

}

function draw() {
  // background(200);
  let vol = mic.getLevel()
  fft.analyze();
  peakDetect.update(fft);
  // console.log(spectrum)
  
  if (peakDetect.isDetected) {
  	ellipseWidth = 50;
    background (random(255),random(255),random(255))
    fill(random(255),random(255),random(255))
  } else {
  	ellipseWidth *= 0.95;
    // background (0)
  }

for (var x = 0; x < width+300; x+=50){
  for (var y = 0; y < height+300; y +=50){
  stroke(random(255),random(255),random(255))
  rectMode (CENTER)
  rect(x, y, ellipseWidth, ellipseWidth);
}
}
}