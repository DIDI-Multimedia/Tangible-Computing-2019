function setup(){

  let canvas = createCanvas(400,400);
  canvas.parent('sketch-holder');
  //angleMode(DEGREES);

}
//For Future Coloring
//"#1a0633" - purple
//"#581845" - light purple
//"#900C3F" - reddish marroon 
//"#C70039" - red
//"#FF5733" - orange
//"#FFC30F" - yellow


function draw()
{
  background("#1a0633");
  //translate(200, 200);
  //rotate(-HALF_PI);
  let h = hour();
  let m = minute();
  let s = second();
  
  let ArcSec = map(s,0,60,0,360);
  let ArcMin = map(m,0,60,0,360);
  let ArcHr = map(h,0,24,0,360);

  stroke(220);
  noFill();
  ellipse(200,200,300,300);
   
  strokeWeight(8);
  stroke("0");
  noFill();
  arc(200,200,300,300,0,ArcSec);
  //rotate(-90);
  stroke("#FFC30F");
  arc(200,200,180,180,0,ArcMin);
  stroke ("#C70039");
  arc(200,200,240,160,0,ArHr);
  
  //strokeWeight(6);
  //stroke ("#FF5733");
  //noFill();
  //let end = map(s,0,60,0,200);
  //line(200,200,50,200,50,end); 
  
  noStroke();
  fill ("0");
  text(h + ':' + m + ':' + s, 175,200);



  }
  

