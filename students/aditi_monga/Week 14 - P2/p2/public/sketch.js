let a = 0
let fft
let tall = 1
let peakDetect
var amp
var song

function preload(){
  song = loadSound ("sunflower.mp3")
}

function setup() {
 let canvas = createCanvas(windowWidth/1.25,windowHeight/1.25)
  canvas.parent('sketch-holder')

  fft = new p5.FFT(0.9,64);
  fft.setInput(song);
  amp = new p5.Amplitude()

  peakDetect = new p5.PeakDetect(180, 20000, 0.1, 60)
  angleMode(DEGREES)

  song.loop()
}

function draw() {
 
  let vol = amp.getLevel();
  let spectrum =  fft.analyze();
  peakDetect.update(fft);

  // song.setVolume(data)

  let col = map (vol*1000, 0, width, 0, 255)
 
  background(col,50,70,80);


  if (vol > 0.2){
    a = a + 0.04

  } else {
    a = a - 0.005
  }


  if (peakDetect.isDetected) {
    strokeWeight (8)
        tall = 1.25
  } else {
    strokeWeight(1)
     tall = 1
}

  for (var i = 0; i < spectrum.length; i++){
  stroke(random(255),255, 153)
  push()

  translate(width/2,height/2)
  scale(1.25)
  rotate(i*a)   
  rect (i, 10, 1, (spectrum[i])*tall)
  pop()

  }
}
