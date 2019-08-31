// Sayjel Vijay Patel
// @djclds
// DIDI MuW 2019, Lab 1, August 16, 2019
// Wall Drawing #16 (1969)
// Bands of lines 12 inches (30 cm) wide, in three directions (vertical, horizontal, diagonal right) intersecting.


console.log('solvingsol.js')



var attempt2 = function( p ) {

  let w;
  let drips = []

  p.setup = function(){

    const canvasDiv = document.getElementById('INTRO');
    const canvasWidth = canvasDiv.offsetWidth;
    p.createCanvas(canvasWidth, canvasWidth).parent('INTRO')
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
      this.color = [0,0,0]

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
        // drips = []

      }


      if (p.random()>0.99){
      
        let x = this.x
        let y = this.y
        let r = 5 
        drips.push([x,y,r,...this.color])
      
      }
      // console.log('step', this.iy)

    }

    display() {

      // p.fill(255,0,0);
              p.fill(this.color)
      p.ellipse(this.x, this.y,5, 5);
      drips.forEach(arr=>{
        arr[1] = arr[1] + 0.25
        arr[0] = arr[0]+(p.mouseX-arr[0])*0.00001
        arr[3] = arr[3] - 1 
        p.fill(arr[3],arr[4],arr[5])
        p.ellipse(arr[0],arr[1],arr[2])

      })

      p.fill(this.color)
      // console.log('display',this.x,this.y)

    }

  }




}


var myp5 = new p5(attempt2);
