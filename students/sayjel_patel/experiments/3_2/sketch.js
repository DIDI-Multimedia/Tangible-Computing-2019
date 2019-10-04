
// let names = ['ayesha',['noor','noor2'],'bella','mona','rafif','nikhilesh','hoor','ahsan','aditi','hani']
// names.push('sayjel') // 

// console.log(names[1][1])


// // names.length // size of array 



// // console.log(names[0])
// // console.log(names[1])
// // console.log(names[2])


// for (var i = 0; i < names.length; i++){
//   console.log(i,':',names[i])
// }

// console.log('sketch.js')

// let species = [drawSanta,drawPig,drawJabroni,drawYogi]

// function setup(){

//   textSize(50)
//   textAlign(CENTER)
//   createCanvas(400,400);


//   let critter = {

//       name: "JABRONI", 
//       posX: width/2, 
//       posY: width/2,
//       rot: 0,  
//       size: 200, 
//       color: [215,155,214], 
//       tail: true, 
//       draw: species[3]
    
//     }



//   let critter02 = {

//       name: "ADONIS", 
//       posX: width/2, 
//       posY: width/2,
//       rot: 0,  
//       size: 200, 
//       color: [215,155,214], 
//       tail: true, 
//       draw: drawPig
    
//     }


//     // critter.draw()

//     push()
//     scale(0.25)
//     translate(100,0)
//     critter.draw()
//     pop()

//     push()
//     scale(0.25)
//     translate(500,0)
//     critter02.draw()
//     pop()
    




//     // drawJabroni(critter)



// }



// // make your own creature using this code, share via whatsapp  


//     function drawJabroni(){

//       let c = this 

//       push()
    
//       // fill in code here, draw a funny face

//       translate(c.posX,c.posY)
//       text(c.name,0,-c.size/2-15)
//       noStroke()
//       // fill(c.color,50)
//       fill(c.color[0],c.color[1],c.color[2],10)

//       for (var i = c.size;i > 0; i-=5){
//         console.log(i)
//         ellipse(0,0,i,i)
//       }
//       // for (var r = c.size; r > 0 ; r-= 10){

//       //   ellipse(0,0,r,r)

//       // }


//       fill(0)
//       ellipse(c.size/10,-c.size/8,c.size/16,c.size/16)
//       ellipse(-c.size/10 ,-c.size/8,c.size/16,c.size/16)
//       ellipse(0 ,c.size/10,c.size/8,c.size/8)
//       stroke(0,150)
//       strokeWeight(5)
//       line(c.size/2,-c.size/12,c.size/2+c.size/12,c.size/12)
//       line(-c.size/2,-c.size/12,-c.size/2-c.size/12,c.size/12)
//       line(c.size/12,c.size/2,c.size/12,c.size*0.6)
//       line(-c.size/12,c.size/2,-c.size/12,c.size*0.6)
//       pop()


//     }





// function drawPig() {

//   let c = this 

//   push()
//   translate(c.posX, c.posY)
//   noStroke()
//   rectMode(CENTER)
//   text(c.name, c.size, -c.size)
//   fill(c.color)
//   //face
//   rect(0, 0, c.size, c.size)
//   pop()

//   //nose
//   push()
//   rectMode(CENTER)
//   translate(c.posX, c.posY + 15)
//   strokeWeight(3)
//   stroke(240, 180, 230)
//   fill(215, 155, 214)
//   rect(0, 0, 50, 30)
//   pop()

//   //nostrils
//   push()
//   rectMode(CENTER)
//   translate(c.posX, c.posY + 15)
//   noStroke()
//   fill(200, 90, 90)
//   rect(-18, 0, c.size / 10, c.size / 10)
//   rect(18, 0, c.size / 10, c.size / 10)
//   pop()

//   //eyes
//   push()
//   rectMode(CENTER)
//   noStroke()
//   translate(c.posX, c.posY)
//   fill(0)
//   rect(-44.75, -6.5, c.size / 10, c.size / 10)
//   rect(44.75, -6.5, c.size / 10, c.size / 10)
//   fill(255)
//   rect(-35, -6.5, c.size / 10, c.size / 10)
//   rect(35, -6.5, c.size / 10, c.size / 10)


// }


//   function drawSanta(){

//       let c = this
     
//       push()
    
//       // fill in code here, draw a funny face

//       translate(c.posX,c.posY)
//       text(c.name, c.size,-c.size)
      
//       fill(214,13,13)
//        ellipse(0,65,c.size*2,c.size*2)

//        fill(236,203,138)
//        ellipse(0,0,c.size,c.size)


//        fill(255,220)
//         ellipse(0,27,c.size+1.5,c.size+1.5)


//         fill(214,13,13)
//         triangle(-25, -15, 0, -65, 25, -16)  

//         fill(255)
//         line(-10, 10, 10, 10)
//         line(-12, -8, -4, -10)
//          line(12, -8, 4, -10)
//          ellipse(0,-60,c.size/3,c.size/3)


//         fill(0)
//         ellipse(8,-3,c.size/7,c.size/7)
//         ellipse(-8,-3,c.size/7,c.size/7)
//          ellipse(0,60,c.size/3,c.size/3)
//          ellipse(0,80,c.size/3,c.size/3)

        


     

//       pop()


//     }


//   function drawYogi(){


//     let c = this
     
//     push()
    
//       // fill in code here, draw a funny face

//       translate(c.posX,c.posY)
//       text(c.name, c.size,-c.size)
//       fill(c.color)

//       push()
//       translate(-c.size/2,-c.size/2)
//       triangle(40,30,30,60,-10,-10)
//       pop()

//       rect(-50,-50,c.size,c.size)
//       fill (0)
//       ellipse(15,-20,10,10)
//       ellipse(-15,-20,10,10)
//       rect(-20,15,40,10)
//       triangle(-5,5,5,5,0,10)

//       fill(255)
//       rect(-20,15,5,5)
//       rect(-15,15,5,5)
//       rect(-10,15,5,5)
//       rect(-5,15,5,5)
//       rect(0,15,5,5)
//       rect(5,15,5,5)
//       rect(10,15,5,5)
//       rect(15,15,5,5)
//       rect(-20,20,5,5)
//       rect(-15,20,5,5)
//       rect(-10,20,5,5)
//       rect(-5,20,5,5)
//       rect(0,20,5,5)
//       rect(5,20,5,5)
//       rect(10,20,5,5)
//       rect(15,20,5,5)
//       noStroke()
//       ellipse(17,-22,3,3)
//       ellipse(-13,-22,3,3)
//       ellipse(15,-18,5,5)
//       ellipse(-15,-18,5,5)




//       pop()

//     }