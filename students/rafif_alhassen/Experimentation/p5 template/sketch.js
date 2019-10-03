let capture;

function setup() {
  createCanvas(320, 240);
  // pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  // video.size(width / vScale, height / vScale);

}
  // capture = createCapture(VIDEO); 
  // capture1 = createCapture(VIDEO);
  // capture.size(320, 240);
  // capture1.size(320, 240);
  // //capture.hide();

function draw() {
  background(50);

  image(capture, 0, 0, 320, 240);
  filter(INVERT);

}

// source: https://p5js.org/examples/dom-video-capture.html
