
let totalYears = 6
let startAngle = 0
let angleVel = 30

function setup(){

  createCanvas(800,800);
   console.log(waterData) // this is saved in separate file
}
  //
  //let r = 3

function draw(){ perlinLines() 
 
  startAngle += 0.010;
  let angle = startAngle;

 

  for (var i = waterData.length; i > 0; i--){
  
  noStroke(0)

    for (let x = 0; x <= width; x += 20) {
    const data = Object.assign({},waterData[i])
    let volume = data['Total Gallons']
    let time = data['Year Month'] // 
    //let customerType = data['Customer Class']
    let year = Math.floor(time/100) - 2012 // this is a fancy way to start the years from 2013
    //let month = time - year*100 
    // 201806 .. divide by 100  = 2018.06 .. Math.floor(2018.06) = 2018
    // 201806 - 201800 = 06 
    let startX = width*(year/totalYears)
     let r = volume/2000000
    
    let x = map(noise(angle), 0, 1, 0, height)*(startX+width/totalYears)
    let y = map(noise(angle), 0, 1, 0, height)*width
   
line(x,y,r,r)

  }

if (volume > 100000)
            fill(66,190,218);
          else
            fill(119,96,164)


}
  
}


