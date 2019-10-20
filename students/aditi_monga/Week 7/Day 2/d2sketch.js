let mic
let fft
let peakDetect
let ellipseWidth = 10

function setup() {

 let canvas = createCanvas(windowWidth/2,windowWidth/2)
  canvas.parent('sketch-holder')

  mic = new p5.AudioIn()
  mic.start()

  fft = new p5.FFT()
  fft.setInput(mic)
  peakDetect = new p5.PeakDetect()

}

function draw() {
  background(200);
  let vol = mic.getLevel()
  fft.analyze();
  peakDetect.update(fft);
  // console.log(spectrum)
  
  if ( peakDetect.isDetected ) {
  	ellipseWidth = 50;
  } else {
  	ellipseWidth *= 0.95;
  }

  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
}