let totalYears = 6
function setup(){

  createCanvas(800,800);
  // console.log(waterData) // this is saved in separate file

  fill(0,0,255)
  // let r = 3
  for (var i = waterData.length; i > 0; i--){
  noStroke()
    const data = Object.assign({},waterData[i])
    let volume = data['Total Gallons']
    let time = data['Year Month'] // 
    let year = Math.floor(time/100) - 2012 // this is a fancy way to start the years from 2013
    let startX = width*(year/totalYears)
    let x = Math.random()*(startX+width/totalYears)
    let y = Math.random()*width
    let r = volume/2000000
    stroke(0)
    line(startX,0,startX,height)

    ellipse(x,y,r,r)




  }

}
