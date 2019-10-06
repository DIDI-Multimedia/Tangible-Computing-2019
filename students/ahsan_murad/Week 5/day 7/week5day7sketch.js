let yoff = 0.0; // 2nd dimension of perlin noise

//For Future Coloring
//"#1a0633" - purple
//"#581845" - light purple
//"#900C3F" - reddish marroon 
//"#C70039" - red
//"#FF5733" - orange
//"#FFC30F" - yellow
//237,34,93 - red/pinkish background rn for tingling - week 5 d2+d3+d4 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  fill(237,34,93);
  noStroke();
  var diameter = 25;
  
  for (var i = 0; i < width / diameter; i = i + 1) {
    for (var j = 0; j < height / diameter; j = j + 1){
    ellipse(
      diameter / 2 + i * diameter,
      diameter / 2 + j * diameter,
      diameter * noise(frameCount/100 + i + j),
      diameter * noise(frameCount/100 + i + j));
}
}

  fill(237,34,93);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, random(0),399);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

