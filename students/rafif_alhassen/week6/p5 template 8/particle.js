var particle = new Particle(100, 100);
var gravity = 0.1;

function Particle(x, y) {
	this.x = x;
	this.y = y;

this.yspeed = 0;

this.history = [];

this.update = function() {
	this.y += this.yspeed;
	this.yspeed += gravity;

	if (this. > height) {
		this.y = height;
		this.yspeed *= -0.9;
	}

	var v = createVector(this.x, this.y);
	this.history.push(v);
	println(this.history.length);

}

this.show = function() {
	stroke(0);
	fill(0, 150);
	ellipse(this.x, this.y, 24, 24);

}

}

// source: https://www.youtube.com/watch?v=vqE8DMfOajk


