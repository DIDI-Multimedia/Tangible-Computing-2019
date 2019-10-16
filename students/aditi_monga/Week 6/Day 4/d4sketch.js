let mic

function setup() {
 let canvas = createCanvas(windowWidth/2,windowWidth/2)
  canvas.parent('sketch-holder')
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(200);
  let vol = mic.getLevel();
  let spectrum =  fft.analyze();
  // console.log(spectrum)
  
  for (var i = 0; i < spectrum.length; i++){
  stroke(random(255))      
  rect (i, 0, 1, spectrum[i])
  }
}