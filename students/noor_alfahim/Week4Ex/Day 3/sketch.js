let mic;

function setup() {
  createCanvas(715, 200);

  mic = new p5.AudioIn();
  
  mic.start();
}

function draw() {
  background(200);

  let vol = mic.getLevel();
  fill(125);
  stroke(1);


    // Draw an ellipse with height based on volume
  let h = map(vol, 0, 0.5, height, 0);
  rect(width / 2.4, h /1.35, 50, 50);
    // Draw an ellipse with height based on volume
  let i = map(vol, 0, 0.5, height, 0);
  rect(width / 3, h /2, 50, 50);
    // Draw an ellipse with height based on volume
  let j = map(vol, 0, 0.5, height, 0);
  rect(width / 4, h /3, 50, 50);
    // Draw an ellipse with height based on volume
  let k = map(vol, 0, 0.5, height, 0);
  rect(width / 6, h /4, 50, 50);

}