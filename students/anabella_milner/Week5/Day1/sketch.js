
var video;

var vScale = 6;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  background(51);

  video.loadPixels();

  loadPixels();
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+0];
      var b = video.pixels[index+0];

      var bright = (r+g+b)/2;

      var w = map(bright, 0, 255, 0, vScale);

      stroke(255);
       


      fill(0, 0, 50);
      rect(x*vScale, y*vScale, w, w);


      //pixels[index+0] = bright;
      //pixels[index+1] = bright;
      //pixels[index+2] = bright;
      //pixels[index+3] = 255;
  }

   }

//updatePixels();

}