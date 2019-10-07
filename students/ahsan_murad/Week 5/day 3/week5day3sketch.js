  
var video;

var vScale = 16;

function setup() {
  
  createCanvas(640, 480);
  pixelDensity(1);
  
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  background(51);
  video.loadPixels();

  let h = hour();
  let m = minute();
  let s = second();
  
fill(237,34,93);
  noStroke();
  var diameter = 25;
  
  for (var i = 0; i < width / diameter; i = i + 1) {
    for (var j = 0; j < height / diameter; j = j + 1){
    ellipse(
      diameter / 2 + i * diameter,
      diameter / 2 + j * diameter,
      diameter * noise(s + i + j),
      diameter * noise(s + i + j));
}
}
  
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y*video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      
      var bright = (r + g + b) * 1;

      var threshold = 127;

      if (bright > threshold) {
        fill(0);
  }  else{
    fill (255);
  }
      
      var w = map(bright, 0, 255, 0, vScale);
      
      noStroke();
      fill(random(255),random(255),random(255));
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
}
