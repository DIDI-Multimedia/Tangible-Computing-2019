var mic;
var song;

function preload(){
	song = loadSound('https://drive.google.com/file/d/183g550iL68tFs-JiQvGLsLjc7aDcfW_9/view?usp=sharing')
}

function setup(){
	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');

	song.play();

	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
  	background(0)
	var vol = mic.getLevel();
	fill(vol*255,vol*59,vol*200)
	ellipse(width/2, width/2,600,600)
}