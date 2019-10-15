
let totalYears = 6

let dataLines = []

function setup(){

  createCanvas(800,800);
  console.log('water data:', waterData) // this is saved in separate file




  background(0)


}

function initializeObjects(){

  dataLines = []


  for (var i = waterData.length; i > 0; i--){

    console.log('add data',i)

    const data = Object.assign({},waterData[i])
    let volume = data['Total Gallons']

    // (year/totalYears/12)

    let time = data['Year Month'] // 
    //let customerType = data['Customer Class']
    let year = Math.floor(time/100) - 2012 // this is a fancy way to start the years from 2013
    //let month = time - year*100 
    // 201806 .. divide by 100  = 2018.06 .. Math.floor(2018.06) = 2018
    // 201806 - 201800 = 06 
    
    let startX = width*(year/totalYears)
     let r = volume/2000000
    
    let x = (startX+width/totalYears)
    let y = width

    let rotation = year/totalYears*TWO_PI

    console.log(x,y,r,v)
   

    let dataLine = createObj(x,y,volume,rotation)
    dataLines.push( dataLine )

  }
}
  //
  //let r = 3

//function draw(){ 


  // perlinLines() 

  //startAngle += 0.010;
  //let angle = startAngle;

 

  //for (var i = waterData.length; i > 0; i--){

    //console.log('add data',i)
  
  //noStroke(0)

    //for (let x = 0; x <= width; x += 20) {
    //const data = Object.assign({},waterData[i])
    //let volume = data['Total Gallons']

    //if (volume > 100000){
    
      //fill(66,190,218)

    //} else{

     // fill(119,96,164)

    //}

    //year/totalYears/12)

    //let time = data['Year Month'] // 
    //let customerType = data['Customer Class']
    //let year = Math.floor(time/100) - 2012 // this is a fancy way to start the years from 2013
    //let month = time - year*100 
    // 201806 .. divide by 100  = 2018.06 .. Math.floor(2018.06) = 2018
    // 201806 - 201800 = 06 
    //let length = 1
    //let startX = width*(year/totalYears)
     //let r = volume/2000000
     //let v = length/(year/totalYears)
    
   // let x = *(startX+width/totalYears)
  //  let y = *width

   // console.log(x,y,r,v)
    //line(x,y,r,v)

    //}
  
  

  function createObj(x,y,volume,rotation){
    let obj = {}
     obj.x = x 
     obj.y = y
     obj.volume = volume
    obj.rotation= rotation

stroke(255)
     line(x,y,volume,rotation)
    
    


    return obj
  }




