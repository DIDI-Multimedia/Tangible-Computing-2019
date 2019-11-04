var video;
var vScale = 8
let pixels
let prl00
let prl01
let prl02 


function setup() {

  createCanvas(640, 480);
  initializeVideo()
  setStyle()
  pixels = initializePixelArray(vScale)
  initPerlinNoise()

}

 var counter = 0
 var limit = 10

function draw() {




  if (counter > limit) {
      background(51); 
  video.loadPixels(); // we need to research about these function 
  loadPixels();
  updatePixelsRandomTime(0.9)
  displayPixels()
  updatePerlinNoise()
    counter = 0
    limit ++
  }
  counter ++
if (limit > 25){



  limit = 5
}
}


function updatePerlinNoise(){

    // initialize perlin noise values with random parameters
  prl00 += 0.01
  prl01 += 0.01
  prl02 += 0.01

}



function initPerlinNoise(){

    // initialize perlin noise values with random parameters
  prl00 = random()
  prl01 = random()
  prl02 = random()

}


function displayPixels(){


  for (var i = pixels.length - 1; i >= 0; i--) {
    let pixel = pixels[i]
    if (random()>0.5){ // try replacing 0.5 with another number

      // randomly swaping the positions of pixels
      let j = constrain(i - 0,0,pixels.length)
      copyPixelNeighbourProps(i,j)

    }

    drawPixel( pixel )

  }

}

function drawPixel( pixel ){
    
    // draw the pixels 

    let numRow = width/pixel.scale 
    let numCol = height/pixel.scale 
    fill(pixel.r,pixel.g,pixel.b)

    let r = noise( prl00*pixel.x/numRow )*255
    let b = noise( prl00*pixel.y/numCol )*255
    let g = noise( prl01*pixel.x/numRow )*255

    let boxWidth = noise( prl00*pixel.x/numRow )*pixel.scale*3
    let boxHeight = noise( prl02*pixel.y/numCol )*pixel.scale*4

    stroke(r,g,b,30)
    strokeWeight(9)

    rect(pixel.x,pixel.y, boxWidth, boxHeight); 

    

}

function copyPixelNeighbourProps(i,j) { 

      let pixel1 =  Object.assign({}, pixels[i])
      let pixel2 = pixels[j]
      pixel1.r = pixel2.r
      pixel1.g = pixel2.g
      pixel1.b = pixel2.b
      pixel = pixel1
      pixel2 = pixel1

}
function initializePixelArray(vScale){

  let pixArr = []

  for (var y = 0; y < video.height; y++ ) {
    
    for (var x = 0; x < video.width; x++ ) {

      let pixel = createPixelObj(x,y,vScale)
      pixArr.push(pixel)

    }
  }

  return pixArr

}

function setStyle(){

  noStroke()



}


function updatePixelsRandomTime(probability){

  let k = 0

  for (var y = 0; y < video.height; y++){
  
    for (var x = 0; x < video.width; x++){

      

    
 let newPixel = createPixelObj(x,y,vScale)
      
     let test = Math.abs(newPixel.r - pixels[k].r)  
              let test1 = Math.abs(newPixel.b - pixels[k].b) 
              let test2 = Math.abs(newPixel.g - pixels[k].g) 

       if (test < 20 && test1 < 20 && test2 < 20){


          
          pixels[k].r = 0
            pixels[k].g = 0
              pixels[k].b = 0

              pixels.isblack = true
        } else { 

        pixels[k] = newPixel
       }

         k++  

         
  // let test = Math.abs(newPixel - pixels[k]) 
               


  //       if (test < 10){


  //         pixels[k].scale = 1           

  //             //pixels.isblack = true
  //       } else { 
  //         pixels[k].scale = vScale
  //       pixels[k] = newPixel
  //       }

  //       console.log

  //        k++  



         







  if(random()> probability){


      }
      
     
    }

  }

}

function createPixelObj(x,y,vScale) {

      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      let posX = x*vScale
      let posY = y*vScale
      let px = {x:posX,y:posY,r:r,g:g,b:b,scale:vScale, isblack:false}

      return px 

}

function initializeVideo() {
  // body...

    pixelDensity(1); // what does this function do? 

  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale); // 
  video.hide()

}




/*

let i,j,k


function setup(){

  createCanvas(800,800);
  noStroke()
  rectMode(CENTER);
  // initialize perlin noise values with random parameters
  i = random()
  j = random()
  k = random()
}
function draw(){

  let numCol = 25
  let numRow = 25
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
  
   
  background(255)

  for (var col = 0; col < numRow; col++ ){
    for (var row = 0; row < numCol; row++){
     //fill(col/numCol*255,row/numRow*255,mouseX/width*255)
     let r = noise(row/numRow+i)*255
     let b = noise(col/numCol+j)*255
     let g = noise(col/numCol+k)*255
     boxWidth = noise(k*row/numRow)*stepX*3
     boxHeight = noise(j*col/numCol)*stepY*6
     fill(r,g,b,200)
     
     rect(row*stepX,col*stepY,boxWidth,boxHeight) 
    
    }
  }

    j += 0.01
    k += 0.0025
    i += 0.005
}

*/





