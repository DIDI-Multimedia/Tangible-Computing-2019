// let capture;
var video;

 var vScale = 16

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  // video.size(width / vScale, height / vScale);

}
  // capture = createCapture(VIDEO); 
  // capture1 = createCapture(VIDEO);
  // capture.size(320, 240);
  // capture1.size(320, 240);
  // //capture.hide();

function draw() {
  background(255);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+1];
      var g = video.pixels[index+2];
      var b = video.pixels[index+3];

      var bright = (r+g+b)/3;

      var w = map(bright, 0, 255, 0, vScale);

      noStroke();
      fill(random(255),random(255),random(255));
      rect(CENTER);
      rect(x*vScale, y*vScale, w, w);

    }
  }

}
  // image(capture, 0, 0, 320, 240);
  // filter(THRESHOLD);
  // color(random(255), random(255),random(255))
  // image(capture1, 0, 0, 320, 240);
  // filter(THRESHOLD);
  // image(capture, 0, 0, 320, 240);
  // filter(THRESHOLD);
  // filter(INVERT);

// source: https://p5js.org/examples/dom-video-capture.html
// source: https://www.youtube.com/watch?v=rNqaw8LT2ZU