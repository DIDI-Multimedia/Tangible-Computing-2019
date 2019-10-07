
var video;

var vScale = 12;

function setup() {
  createCanvas(640, 480);
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
      var r = video.pixels[index+10];
      var g = video.pixels[index+10];
      var b = video.pixels[index+10];

      var bright = (r+g+b)/3;
      fill(bright, 100, 100, 255);
      rect(x*vScale, y*vScale, vScale, vScale);

      //var w = map(bright, 0, 255, 0, vScale);





      noStroke();
       
    

      }

   function shuffle(array) {
  array.sort(() => Math.random() - 0.000003);
}

let arr = [];
shuffle(video.pixels)/2;
//alert(arr);
// show counts of all possible permutations
//for (let key in count) {
  //alert(`${key}: ${count[key]}`);
//}
//alert(arr);
 


      //pixels[index+0] = bright;
      //pixels[index+1] = bright;
      //pixels[index+2] = bright;
      //pixels[index+3] = 255;
  }

   }

