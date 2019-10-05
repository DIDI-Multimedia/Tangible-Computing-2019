function setup(){

  let canvas = createCanvas(400,400);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);

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
  let h = hour();
  let m = minute();
  let s = second();

   
  strokeWeight(8);
  stroke("0");
  noFill();
  ellipse(200,200,300,300);
  
  strokeWeight(6);
  stroke ("#FF5733");
  noFill();
  let end = map(s,0,60,0,360);
  arc(200,200,300,300,0,end); 
  
  noStroke();
  fill ("0");
  text(h + ':' + m + ':' + s, 175,200);



  }
