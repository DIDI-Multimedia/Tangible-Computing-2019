var video;
var button;
var snapshots = [];

function setup(){
 createCanvas(320,240);
  background(51);
 video = createCapture(VIDEO);
 video.size(320,240);
 button = createButton('snap');
 button.mousePressed(takesnap);
 video.hide();
}

function takesnap(){
  snapshots.push (video.get());
  image(video, 0, 0);
}

function draw() {
  for (var i = 0; i < snapshots.length; i++){
    tint(255, 50);
   image (snapshots[i], 0, 0);
  }
//i += 0.1
}
