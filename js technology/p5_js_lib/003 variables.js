
// ouseIsPressed

//=================================
function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}

function draw() {
  background(1, 186, 240);
  var x=width/2;
  var y=height/2;
  var size=200;
  //circle
  fill(237,34,93);
  noStroke();
  ellipse(x,y,size,size);
  //conditionally display rectangle on mouse ptess
  if(mouseIsPressed === true){
    fill(255);
    rect(x,y, size*0.75, size*0.15);
  } 
  
}
//=============================
//Toggle display on mouse click
var toggle=true;
function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}

function draw() {
  //change the toggle value based on mouse press
  if(mouseIsPressed === true){
    toggle = !toggle;
  }
  //display a different bg color based on the toggle value
  if(toggle===true){
    background(1,186, 240);
  }else{
    background(250,150,50);
  }
  
  //declaration of variables
  var x=width/2;
  var y=height/2;
  var size=200;
  //circle
  fill(237,34,93);
  noStroke();
  ellipse(x,y,size,size);
  //rectangle
  fill(255);
  rect(x,y,size*0.75,size*0.15);  
  
}
//==============================
// Using mouseX and mouseY variables
//Try moving your mouse on the canvas
function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(1,75,100);
  //declaration of variables
  var x=mouseX;
  var y=mouseY;
  var size=50;
  //circle
  fill(237,34,93);
  noStroke();
  ellipse(x,y,size,size);
  
}
//=============================
//Persisting the drawing on the screen
function setup() {
  createCanvas(800, 300);
  background(1,75,100);
}

function draw() {
  //declaration of variables
  var x=mouseX;
  var y=mouseY;
  var size=25;
  //circle
  fill(237,34,93,100);
  noStroke();
  ellipse(x,y,size,size);
  
}