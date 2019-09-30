function setup() {

  createCanvas(400, 400);
  let critter = {
    name: "piggy",
    posX: width / 2,
    posY: width / 2,
    rot: 0,
    size: 100,
    color: [215, 155, 214]

  }

  drawCreature(critter)

}

function drawCreature(c) {

  push()
  translate(c.posX, c.posY)
  noStroke()
  rectMode(CENTER)
  text(c.name, c.size, -c.size)
  fill(c.color)
  //face
  rect(0, 0, c.size, c.size)
  pop()

  //nose
  push()
  rectMode(CENTER)
  translate(c.posX, c.posY + 15)
  strokeWeight(3)
  stroke(240, 180, 230)
  fill(215, 155, 214)
  rect(0, 0, 50, 30)
  pop()

  //nostrils
  push()
  rectMode(CENTER)
  translate(c.posX, c.posY + 15)
  noStroke()
  fill(200, 90, 90)
  rect(-18, 0, c.size / 10, c.size / 10)
  rect(18, 0, c.size / 10, c.size / 10)
  pop()

  //eyes
  push()
  rectMode(CENTER)
  noStroke()
  translate(c.posX, c.posY)
  fill(0)
  rect(-44.75, -6.5, c.size / 10, c.size / 10)
  rect(44.75, -6.5, c.size / 10, c.size / 10)
  fill(255)
  rect(-35, -6.5, c.size / 10, c.size / 10)
  rect(35, -6.5, c.size / 10, c.size / 10)


}