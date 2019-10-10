
var video;

var vScale = 3;

function setup() {
  createCanvas(240, 200);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  background(255);


   
  video.loadPixels();

  loadPixels();
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;
      fill(bright);
      noStroke();
      rect(x*vScale, y*vScale, vScale, vScale);

      //rotate(2,2,2);

      //var w = map(bright, 0, 255, 0, vScale);


  

      //stroke(255);
       
    

      }


  }

   }

