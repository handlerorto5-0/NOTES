var count = 0;
function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
}

function draw() {
  background(1,186,240);
  var x=width / 2;
  var y=height / 2;
  var size=200 + count;
  
  fill(237,34,93);
  stroke(0,255,0);
  ellipse(x,y, size,size);
  
  fill(255);
  rect(x,y,size*0.75 ,size*0.15);
  count = count +1;
}