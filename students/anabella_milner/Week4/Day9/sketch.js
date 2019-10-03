


var video;

function setup(){

  createCanvas(320,240);
  background(51);
 video = createCapture(VIDEO);
 video.size(320,240);
 video.hide();
}

function draw(){
  
    let r = noise(video.pixels)*255
     let b = noise(video.pixels)*100
     let g = noise(video.pixels)*255
     fill(r,g,b)
     
  tint(255, 45);
  image(video, 0, 0);
  for (var i = 0; i < video.length; i++){

     
    // rect(row*stepX,col*stepY,stepX,stepY) 

    //i += 0.01;
 
}

}
