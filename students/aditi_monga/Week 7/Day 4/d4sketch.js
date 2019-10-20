let mic
let a = 0
let fft

function setup() {
 let canvas = createCanvas(windowWidth/1.5,windowHeight/1.5)
  canvas.parent('sketch-holder')
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9,128);
  fft.setInput(mic);
  angleMode(DEGREES)
}

function draw() {
  let vol = mic.getLevel();
  let spectrum =  fft.analyze();
  let col = map (vol*1000, 0, width, 0, 255)
  background(col,50,70);

  if (vol > 0.2){
    a = a + 0.01
  }

  // console.log(spectrum)
  for (var i = 0; i < spectrum.length; i++){
  stroke(random(255),255, 153)
  push()
  movement = map (mouseX, 0, width, 0, 200)
  translate(width/2,height/2)
  rotate((i*a))   
  rect (i, 0, 1, spectrum[i])
  pop()
  }
}