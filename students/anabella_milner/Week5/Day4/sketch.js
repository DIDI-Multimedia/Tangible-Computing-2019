
var video;

var vScale = 16;

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
      var index = (video.width - x -2 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/5;

      var w = map(bright, 0, 255, 0, vScale);





      stroke(255);
       


     fill(255,100);
      rect(x*vScale, y*vScale, w, w);

      }


   function shuffle(array) {
  array.sort(() => Math.random() - 0.9);
}

let arr = [];
shuffle(video.pixels)/4;

   //function shuffle(array) {
  //array.sort(() => Math.random() - 0.8);
//
//let arr = [];
//shuffle(video.pixels)/2;
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
