// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

var spot = {
    x: 200,
    y: 50
};

var col = {
    r:255,
    g:0,
    b:0
};


function setup() {
    createCanvas(1425,500);
    background(0);
   


}

function draw() {
    col.r = random(100,500);
    col.g = random(100,150);
    col.b = random(100,190)
    spot.x = random(0,width);
    spot.y = random(0,height);
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(spot.x, spot.y, 50, 50);
    //point.x, point.y, 24, 24);

 col.r = random(100,500);
    col.g = random(100,150);
    col.b = random(100,190)
    spot.x = random(0,width);
    spot.y = random(0,height);
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(spot.x, spot.y, 100, 100);
    //point.x, point.y, 24, 24);

col.r = random(100,500);
    col.g = random(100,150);
    col.b = random(100,190)
    spot.x = random(0,width);
    spot.y = random(0,height);
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(spot.x, spot.y, 5, 5);
    //point.x, point.y, 24, 24);


}

function mousePressed() {
    background(0, 0, 0);
}
