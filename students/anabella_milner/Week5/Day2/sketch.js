


var video;

var vScale = 20;

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
      var index = (video.width - x / 5 + (y * video.width))*4;
      var r = video.pixels[index+1];
      var g = video.pixels[index+12];
      var b = video.pixels[index+1];

      var bright = (r+g+b);

      var w = map(bright, 0, 255, 0, vScale);

      stroke(255);
       


      fill(random(255),random(255),random(255), 50);
      rect(x*vScale, y*vScale, w, w);


      //pixels[index+0] = bright;
      //pixels[index+1] = bright;
      //pixels[index+2] = bright;
      //pixels[index+3] = 255;
  }

   }

//updatePixels();

}
