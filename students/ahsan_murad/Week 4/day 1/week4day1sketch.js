var video;

function setup()
{
  createCanvas(320,240);
  //canvas.parent('sketch-holder');
  background(51);
  video = createCapture(VIDEO);
  video.size(320,240);
}


function draw()
{
  image(video,0,0,mouseX,mouseY);
  tint(244,0,0);
}