// Using the random function
function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(1, 75, 100);
  // circle properties
  fill(237, 34, 93);
  noStroke();
  var diameter = 50;
  for (var i=0; i<width/diameter; i=i+1) {
    for (var j=0; j<height/diameter; j=j+1) {
      ellipse(
      	diameter/2 + i * diameter,
        diameter/2 + j * diameter,
        diameter*random(),
        diameter
      );
    }
  }
}
//===========================================
// Using the random function
function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  fill(237, 34, 93);
  frameRate(1);
}
function draw() {
  var random_0 = random();
  var random_1 = random(10);
  var random_2 = random(100, 1000);
  var offset = 40;

  textSize(24);
  background(255);
  text(random_0, width/2, height/2-offset);
  text(random_1, width/2, height/2-0);
  text(random_2, width/2, height/2+offset);
}
//============================================
//Using the noise function
//Applying a different animation to each circle
function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(1, 75, 100);
  // circle properties
  fill(237, 34, 93);
  noStroke();
  var diameter = 50;
  for (var i=0; i<width/diameter; i=i+1) {
    for (var j=0; j<height/diameter; j=j+1) {
      ellipse(
      	diameter/2 + i * diameter,
        diameter/2 + j * diameter,
        diameter*noise(frameCount/100+j*10000+i*10000),
        diameter*noise(frameCount/100+j*10000+i*10000)
      );
    }
  }
}