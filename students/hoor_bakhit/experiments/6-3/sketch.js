let totalYears = 6
function setup(){

  createCanvas(800,800);
  // console.log(waterData) // this is saved in separate file

  
  // let r = 3
  for (var i = waterData.length; i > 0; i--){
  noStroke()
    const data = Object.assign({},waterData[i])
    let volume = data['Total Gallons']
    let time = data['Year Month'] // 
    let customerType = data['Customer Class']
    let year = Math.floor(time/100) - 2012 // this is a fancy way to start the years from 2013
    let month = time - year*100 
    // 201806 .. divide by 100  = 2018.06 .. Math.floor(2018.06) = 2018
    // 201806 - 201800 = 06 
    let startX = width*(year/totalYears)
    let x = Math.random()*(startX+width/totalYears)
    let y = Math.random()*width 
    let r = volume/2000000
    stroke(0)
    line(startX,0,startX,height)

    

    ellipse(x,y,r,r)

if (customerType = "Residential")
  rect(x,y,r,r)
else
   ellipse(x,y,r,r) 


if (volume > 100000)
            fill(66,190,218);
          else
            fill(119,96,164)



  }

}
