


var video;

function setup(){

  createCanvas(800,340);
  background(255);
 video = createCapture(VIDEO);
 video.size(260,200);
 video.hide();
}

function draw(){
  
    let r = noise(video.pixels)*255
     let b = noise(video.pixels)*255
     let g = noise(video.pixels)*255
     fill(r,g,b)
     
  tint(random(255), random(255), random(255), 100);
  image(video, mouseX, mouseY);
  translate(100);
  for (var i = 0; i < video.length; i++){

     
    //rect(row*stepX,col*stepY,stepX,stepY) 

    i += 10;
 
}

}