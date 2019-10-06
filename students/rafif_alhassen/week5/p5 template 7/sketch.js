// let capture;
var video;

 var vScale = 10

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
  background(50);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      // noStroke();
      var bright = (r/g/b)/3;
      fill(bright);
      rect(x*vScale, y*vScale, vScale, vScale)

      // var w = map(bright, 0, 255, 0, vScale);

      // noStroke();
      // fill(118,115,169);
      // rect(RIGHT);
      // rect(x*vScale, y*vScale, w, w);

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