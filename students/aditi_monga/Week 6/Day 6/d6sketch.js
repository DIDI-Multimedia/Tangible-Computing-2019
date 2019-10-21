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
  background(0);
  let vol = mic.getLevel();
  let spectrum =  fft.analyze();
  // console.log(spectrum)
  
  for (var i = 0; i < spectrum.length; i++){
    var amp = spectrum[i]
    var r = map (amp, 0, 256, 0, 300)
   stroke(random(255),random(255),random(255)) 
   push()
   translate(width/2,width/2)
   rotate(r)  
  rect (i, 0, 1, amp)
  pop()
  }
}