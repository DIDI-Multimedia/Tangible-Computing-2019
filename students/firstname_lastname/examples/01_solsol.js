// Sayjel Vijay Patel
// @djclds
// DIDI MuW 2019, Lab 1, August 16, 2019
// Wall Drawing #16 (1969)
// Bands of lines 12 inches (30 cm) wide, in three directions (vertical, horizontal, diagonal right) intersecting.


console.log('solvingsol.js')


var attempt1 = function( p ) {

  const length = 1000
  const os = 3

  // ArraList<PVector>()
  p.setup = function() {
    const canvasDiv = document.getElementById('wk01-div');
    const canvasWidth = canvasDiv.offsetWidth;
    p.createCanvas(canvasWidth/2, canvasWidth/2).parent('wk01-div')
    p.background(255)
    p.strokeWeight(2,5)
    p.stroke(0,100)

    drawLineBand({angle:0,length:length,offset:os})
    drawLineBand({angle:45,length:length,offset:os})
    drawLineBand({angle:90,length:length,offset:os})
    

  }


  function drawLineBand(params){

    p.push()
    
    p.translate(p.width/4,p.height/4)
    p.rotate(p.radians(params.angle))
    
    for (var i =0; i < p.width/2; i+= params.offset){
      p.line(i,-params.length,i,params.length)
    } 

    p.pop()

  }

}


var myp5 = new p5(attempt1);




var attempt2 = function( p ) {

  let w;

  p.setup = function(){

    const canvasDiv = document.getElementById('wk01-02-div');
    const canvasWidth = canvasDiv.offsetWidth;
    p.createCanvas(canvasWidth, canvasWidth).parent('wk01-02-div')

    p.noStroke()

    w = new Walker();
  }

  p.draw = function(){

    w.step();
    w.display();
    

  }

  class Walker {

    constructor() {

      p.fill(0)

      this.col = [[255,0,0],[255,255,0],[0,0,255]]

      this.arr = []
      this.arrPrev = null
      this.count = 0
      // this.x = width / 2;
      this.iy = 0
      // console.log(this.iy)
      this.x = 0
      this.y = 0
      this.tx = 0;
      this.ty = 10000; // Hvis ty også starter på 0 vil x og y alltid få samme verdi
      this.range = 200

    }

    step() {
      
      // noise() gir samme verdi (mellom 0 og 1) med samme parameter, men ulik verdi for hver kjøring
      // print(noise(0)); // Aktiver denne og se selv
      // this.x = p.map(p.noise(this.tx), 0, 1, 0, width);
      this.x += 1
      this.ny = p.map(p.noise(this.ty), 0, 1, 0, this.range);


      if (this.arrPrev){

        let val = this.arrPrev[this.count] + this.ny
        this.arr.push(val)
        // console.log(this.arrPrev[this.count],this.ny,val)

      } else {

        this.arr.push(this.ny)

      }

      const v = this.arr[this.count] 

      this.y = this.iy + v
      // console.log('this.y:', v, this.iy, this.arr)
      // console.log('y:', this.y, this.arr)

      this.ty += 0.02;


      this.count++

      if (this.x > p.width){

        console.log('x greather than width')
        this.x = 0;
        this.iy += 3
        this.y = this.iy 
        // p.fill(random(255),random(255),random(255))
        this.count = 0 
        this.arrPrev = [...this.arr]
        this.arr = []
        this.range = 25

        this.color = this.col.shift()
        console.log("this.color",this.color,this.col)
        p.fill(this.color[0],this.color[1],this.color[2])
        this.col.push(this.color)

      }
      // console.log('step', this.iy)

    }

    display() {

      // p.fill(255,0,0);
      p.ellipse(this.x, this.y,4, 4);
      // console.log('display',this.x,this.y)

    }

  }




}


var myp5 = new p5(attempt2);
