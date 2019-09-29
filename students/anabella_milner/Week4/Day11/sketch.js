var inc = 0.1;
var scl = 20;
var cols, rows;
var w = 1000;
var h = 500;

var zoff = 0;

var particles = [];
var flowfield;
var particleCount = 100;

function setup() {
  frameRate(30);
  createCanvas(1000, 500, 'WEBGL');
  cols = floor(w / scl);
  rows = floor(h / scl);
  
  for (var i=0; i<particleCount; i++) {
    particles[i] = new Particle();
  }
  
  flowfield = new Array(cols* rows);
}

function draw() {
  background(0);
  randomSeed(10);
  var yoff = 0;
  for (var y=0; y<rows; y++) {
    var xoff = 0;
    for (var x=0; x<cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(.5);
      
      flowfield[index]  = v;
      
      xoff += inc;
      
    }
    yoff += inc;
    zoff += inc*.005;
  }
  
  for (var i=0; i<particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  var output = '';
  output += floor(frameRate()) + 'fps';
  output += '<br>';
  output += particleCount + ' Particles';
  
  document.getElementById('framerate').innerHTML = output;
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
  particleCount++;
}

function Particle(mX = random(width), mY = random(height)) {
  this.pos = createVector(mX,mY);
  this.vel = createVector(random(8),random(8));
  this.acc = createVector(0,0);
  this.maxSpeed = 5;
  this.trail = 90;
  this.history = [];
  
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    this.history.push(this.pos.copy());
    
    if (this.history.length > this.trail) {
      this.history.splice(0,1);
    }
  }
  
  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }
  
  this.applyForce = function(force) {
    this.acc.add(force)
  }
  
  this.show = function() {
    var randomHue = floor(random(255) + 100);
    var c = color('hsl('+randomHue+', 255%, 50%)');
    
    noFill();
    stroke(c);
    strokeWeight(1);
    
    var b1 = color(255, 100);
    var b2 = color(255, 100);
    
    beginShape();
    for (var i=0; i<this.history.length; i++) {
      var pos = this.history[i];
      curveVertex(pos.x, pos.y);
    }
    endShape();
    
    noStroke();
    fill(c);
    ellipse(this.pos.x, this.pos.y, 2);
    
  }
  
  this.edges = function() {
    if (this.history[0].x > width && this.pos.x > width) {
      this.pos.x = 0;
      this.history = [];
      return false;
    }
    if (this.history[0].x < 0 && this.pos.x < 0) {
      this.pos.x = width;
      this.history = [];
      return false;
    }
    if (this.history[0].y > height && this.pos.y > height) {
      this.pos.y = 0;
      this.history = [];
      return false;
    }
    if (this.history[0].y < 0 && this.pos.y < 0) {
      this.pos.y = height;
      this.history = [];
      return false;
    }
  }
}