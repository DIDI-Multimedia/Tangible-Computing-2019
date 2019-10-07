let startAngle = 0;
let angleVel = 30;


function preload(){
  data = loadJSON("experiments/6-2/waterdata.json")
}
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);

  startAngle += 0.010;
  let angle = startAngle;

  for (let x = 0; x <= width; x += 20) {
    let y = map(noise(angle), 0, 1, 0, height);
    let x = map(noise(angle), 20, 1, 0, height);
    stroke(164);
    fill(255, 50);
    strokeWeight(2);
    line(x, y, 40, 40);
    line(-x, -y, 40, 40);
    line(x, y, - 40, - 40);
    line(-x, -y, - 40, - 40);


    angle += angleVel;
  }
}

var mydata = JSON.parse(data);
alert(mydata[0].Year Month);
alert(mydata[0].Total Gallons);
alert(mydata[1].Year Month);
alert(mydata[1].Total Gallons);
    




  

