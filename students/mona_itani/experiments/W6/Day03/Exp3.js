

function createCell( xOff, yOff, x, y, speed, unit ){

  let cell = { 

    xOff: xOff,
    yOff: yOff,
    x: x,
    y: y,
    speed: speed,
    unit: unit,
    xDir: 10,
    yDir: 10,
    lifeSpan: 255,
    update:update,
    draw:display

  }

  return cell 



}

function update() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 1) {
      this.xDir *= -2;
      this.x = this.x + 1 * this.xDir;
      this.y = this.y + 1 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1;
      this.y = this.y + 1 * this.yDir;
    }
  }

function display() {
  console.log('draw')
  this.lifeSpan--
    fill(random(255),random(255),random(255),this.lifeSpan);
    // console.log(this.xOff)
    rect(this.xOff + this.x, this.yOff + this.y, 6, 6);
     rect(this.xOff + this.x, this.yOff + this.y, 10, 20);
}


let unit = 50;
let count;
let mods = [];
let highCount, wideCount

function setup() {
  createCanvas(720, 360);
  noStroke();
  wideCount = width / unit;
  highCount = height / unit;
  count = wideCount * highCount;

  let index = 0;
  for (let y = 0; y < highCount; y++) {

    let col = []
    for (let x = 0; x < wideCount; x++) {

      let mod = createCell(
        x * unit,
        y * unit,
        unit / 4,
        unit / 4,
        random(0.01, 0.02),
        unit
      )
      col.push(mod)
    }
    mods.push(col)
  }
}

function draw() {
  background(0);
    
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
// console.log(mods[y][x])
      let mod = mods[y][x]
      let neighBoor = mods[y+1][x]
      if (mod){
        fill(random(255))
        // ellipse(mod.x+mod.xOff,mod.y+mod.yOff,10,10)
        // mod.update()
        mod.draw()
      } else { 
        console.log(x,y)

      }
      // console.log(mod)

      // fill(255,255,0)

      // ellipse(mod.x,mod.y,5,5)


    }
  }
  // for (let i = 0; i < count; i++) {
  //   mods[i].update();
  //   mods[i].draw();
  // }
}
// source: https://p5js.org/examples/arrays-objects.html