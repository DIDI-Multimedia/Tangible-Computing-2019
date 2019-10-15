var particle;

function setup() {
  createCanvas(400,300);
  particle = new Particle(100, 100);
  // background(200);
}

function draw() {
  bacground(200);
  particle.update();
  particle.show();

}


// source: https://www.youtube.com/watch?v=vqE8DMfOajk


