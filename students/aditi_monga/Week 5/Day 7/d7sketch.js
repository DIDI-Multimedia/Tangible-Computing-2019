var mic;

function setup(){
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');

  // angleMode(DEGREES)
  
  mic = new p5.AudioIn()
  mic.start(0.9,1024)

  // fft = new p5.FFT();
  // fft.setInput(mic);
}

function draw(){

  background(0)
  var vol = mic.getLevel();
  // var spectrum = fft.analyze(1024);

  translate(width / 2, width / 2);
  noStroke();
  for (let i = 0; i < 10; i++) {
    for (let c = 0; i < 255; i += 25) {
      fill(vol * 900, c, i)
      ellipse(0, vol * i * 4, 10, 10);
      rotate(PI / 5);
    }
  }
}