function setup() {
  createCanvas(800, 500);
  textAlign(CENTER,CENTER);
  frameRate(6);
}

function draw() {
  background(220);
  fill(237, 34,93);
  textSize(36);
  
  text("frameCount: "+ frameCount, width/2, height/2);
}
//===========
function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
}

function draw() {
  background(1,186,240);
  var x=width/2;
  var y=height/2;
  var size=200+frameCount;
  
  fill(237, 34,93);
  noStroke();
  ellipse(x,y, size, size);
  
  fill(255);
  rect(x,y, size*0.75, size*0.15);
}
//=====================
var num;
function setup() {
  num = 1;
  createCanvas(800, 500);
  textAlign(CENTER,CENTER);
  fill(238,34,93);
}

function draw() {
  var value;
  background(220);
  fill(237, 34,93);
  textSize(48);
  
  if(num === 1){
    value='TRUE';
  }else if (num===2){
    value='STILL TRUE';
  } else if (num===3){
    value='YEP, TRUE';
  } else{
    value='FALSE';
  }
  
  text(value,width/2,height/2);
}
//===============
var size;
function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  size=200;
}

function draw() {
  background(1,186,240);
  var x=width/2;
  var y=height/2;
  size=200;
  if(50 < frameCount && frameCount<100){
    size=size+frameCount;
  } else {
    size =size+100;
  }
  
  fill(237, 34,93);
  noStroke();
  ellipse(x,y, size, size);
  
  fill(255);
  rect(x,y, size*0.75, size*0.15);

}