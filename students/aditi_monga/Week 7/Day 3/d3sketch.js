let mic
let a = 0
let fft
let peakDetect

function setup() {
 let canvas = createCanvas(windowWidth/1.5,windowHeight/1.5)
  canvas.parent('sketch-holder')
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9,128);
  fft.setInput(mic);
  peakDetect = new p5.PeakDetect

  angleMode(DEGREES)
}

function draw() {
  let vol = mic.getLevel();
  let spectrum =  fft.analyze();
  peakDetect.update(fft);

  let col = map (vol*1000, 0, width, 0, 255)
  background(col,50,70);

   for (var x = 0; x < width; x+=450) {

  // console.log(spectrum)
  for (var i = 0; i < spectrum.length; i++){
  stroke(random(255),255, 153)
  push()
  movement = map (mouseX, 0, width, 0, 200)
  translate(x,height/2)
  rotate((i*movement)+(a+=0.005))   
  rect (i, 0, 1, spectrum[i])
  pop()
  }
}
}