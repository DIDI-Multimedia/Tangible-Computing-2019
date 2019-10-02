  function setup() {

    createCanvas(400, 400);
    let critter = {
      name: "piggy",
      posX: width / 2,
      posY: width / 2,
      rot: 0,
      size: 100,
      color: [215, 155, 214],
      draw: drawCreature
    }

    let critter2 = {

        name: "Punk Meow", 
        posX: width/2, 
        posY: width/2,
        rot: 0,  
        size: 50, 
        color: [215,155,214],
        draw: drawCreature2
      
      }



    critter2.draw()
        critter.draw()


  }

  function drawCreature() {

    let c = this

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
    pop()
  }

function drawCreature2() {

    let c = this
  push()
      
      translate(c.posX+100,c.posY+100)
        text(c.name, c.size,-c.size)
        fill(155)
        stroke(0)
        strokeWeight(0.1)
        rect(0,0,c.size,c.size)
        
        fill(255)
        rect(2,c.size/3,c.size/3,c.size/6)
        rect(30,c.size/3,c.size/3,c.size/6)
        
           fill(0)
        rect(2,c.size/3,c.size/6,c.size/6)
        rect(30,c.size/3,c.size/6,c.size/6)
        
         fill(255)
        noStroke()
     ellipse(5,c.size/2.5,c.size/10,c.size/10)
    ellipse(33,c.size/2.5,c.size/10,c.size/10)

           fill(random(255),random(255),random(255))
        strokeWeight(20)
    triangle(2,1,20,3,-40,8)
        triangle(2,1,-20,3,40,8)
        triangle(20,15,10,10,22,-20)
        pop()

  }