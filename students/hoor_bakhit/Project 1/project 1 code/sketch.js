
let totalYears = 6

let dataLines = []

function setup(){

  createCanvas(1500,1000);
  console.log('water data:', waterData) // this is saved in separate file
  initializeObjects()


  background(255)


}

function initializeObjects(){

  dataLines = []


  // for (var i = waterData.length; i > 0; i--){


  for (var i = 100; i > 0; i--){
    // console.log('add data',i)

    const data = Object.assign({},waterData[i])
    let volume = data['Total Gallons']

    // (year/totalYears/12)

    let time = data['Year Month'] // 
    //let customerType = data['Customer Class']
console.log()
    let year = Math.floor(time/100)-2012
 

     // this is a fancy way to start the years from 2013
    // month = time - year*100 
    // 201806 .. divide by 100  = 2018.06 .. Math.floor(2018.06) = 2018
    // 201806 - 201800 = 06 
    let startX = width*(year/totalYears)
     let r = volume/2000000
    
    let x = (startX+width/totalYears)
    let y = (startX+width/totalYears)

    let rotation = year/totalYears*TWO_PI
    let v = 1


   
    let dataLine = createData(x,y,volume,rotation,year)
    dataLines.push( dataLine )



  }

  console.log('initializeObjects')

  console.log(dataLines.length)


}

function draw(){
  // console.log('draw')
  background(52, 48, 40)
  for(var i = 0; i < dataLines.length; i++){

    let data = dataLines[i]
    move(data)
    display(data)


  }


}

function display(data){

  // strokeWeight(data.volume)
  console.log(data.x,data.y)
  push()
  translate(width/2,height/2)
  rotate(data.rotation)
 
  
  if (data.year > 2){
            stroke(204, 132, 0);
            strokeWeight(4);
          } else {
            stroke(209, 206, 200);
            strokeWeight(2);
          }

          strokeCap(ROUND)
  line(0,0,data.x,data.y)

console.log(data.year)


          


  pop()



}


function move(data){


  data.rotation += data.volume/1555000000

}


 function createData(x,y,volume,rotation,year){
    let obj = {}
     obj.x = x 
     obj.y = y
     obj.volume = volume
    obj.rotation= rotation
obj.year = year


    return obj
  }

// function move(x,y,speed){
  
// this.speed = volume/2000000;
// this.x = x
// this.y = y

//   this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);


// }

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
  
  

  