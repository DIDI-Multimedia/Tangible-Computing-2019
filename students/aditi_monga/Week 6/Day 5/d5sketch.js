let mic

function setup() {
 let canvas = createCanvas(windowWidth/2,windowWidth/2)
  canvas.parent('sketch-holder')
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  angleMode(DEGREES)
}

function draw() {
  let col = map (mouseX, 0, width, 0, 255)
  background(col,50,70);
  let vol = mic.getLevel();
  let spectrum =  fft.analyze();
  // console.log(spectrum)
  
  for (var i = 0; i < spectrum.length; i++){
  stroke(random(255),255, 153)
  push()
  translate(width/2,height/2)
  rotate(i+mouseX)    
  rect (i, 0, 1, spectrum[i])
  pop()
  }
}