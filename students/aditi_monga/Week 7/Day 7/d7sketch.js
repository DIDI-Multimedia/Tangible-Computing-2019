let mic
let a = 0
let fft
let peakDetect
let tall = 1

function setup() {
 let canvas = createCanvas(windowWidth/1.5,windowHeight/1.5)
  canvas.parent('sketch-holder')
  mic = new p5.AudioIn();
  mic.start();
  
  fft = new p5.FFT(0.9,512);
  fft.setInput(mic);
  peakDetect = new p5.PeakDetect(180, 20000, 0.1, 60)
  
  angleMode(DEGREES)
}

function draw() {
  
  let vol = mic.getLevel();
  let spectrum =  fft.analyze();
  let col = map (vol*1000, 0, width, 0, 255)
  peakDetect.update(fft);
  background(col,30, col);

  if (vol > 0.2){
    a = a + 0.05
        // strokeWeight (8)
  } else {
    a = a - 0.009
     // strokeWeight(1)
  }

  if (peakDetect.isDetected) {
    // strokeWeight (8)
    tall = 2

  } else {
    // strokeWeight(1)
    tall = 1
}


  // console.log(spectrum)
  for (var i = 0; i < spectrum.length; i++){
  stroke(random(255),random(255),random(255))
  push()
  // movement = map (mouseX, 0, width, 0, 200)
  fill(random(255),random(255),random(255))
  translate(width/2,height/2)
  rotate(i*a)   
  rect (i, 10, 4, (spectrum[i]+100)*tall)
  pop()

  }
}

