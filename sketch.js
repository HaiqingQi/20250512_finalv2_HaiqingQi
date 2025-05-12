let particles = [];
let maxParticles;
let x, y, rad, xDir, yDir;
let r, g, b;
let angle1, angle2, angle3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(255, 240, 250); 

 
  maxParticles = 50;
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new particle(width / 2, height / 2, random(4, 10)));
  }


  r = 255;
  g = 200;
  b = 220;

  x = random(width);
  y = random(height);
  rad = 10;

  xDir = random(-1, 1);
  yDir = random(-1, 1);

  angle1 = 0;
  angle2 = 90;
  angle3 = 180;
}

function draw() {
  background(255, 240, 250, 20); 

   
  for (let i = 0; i < maxParticles; i++) {
    particles[i].display(30);
    particles[i].update(0.01);
  }

  
rad = mapSinAngle(5, 12, angle1);
r = mapSinAngle(230, 255, angle1);
  b = mapSinAngle(200, 255, angle2);  
  g = mapSinAngle(210, 255, angle3);
  display(r, g, b, 5);
  update(1.5);
  bounds();

 angle1 += 2;
  angle2 += 1.5;
  angle3 += 2.5;
  mysignature();
}

function display(cR, cG, cB, numShapes) {
for (let i = numShapes; i > 0; i--) {
let offSetX = mapSinAngle(-5, 5, angle2);
 let offSetY = mapSinAngle(-6, 6, angle3);
 fill(cR, cG, cB, 180);
stroke(255, 200, 220); 
circle(x + offSetX * i, y + offSetY * i, rad * i);
  }
}

function update(speed) {
  x += xDir * speed;
  y += yDir * speed;
}

function bounds() {
if ((x > width) || (x < 0)) {
xDir = -xDir;
  }
 if ((y > height) || (y < 0)) {
yDir *= -1;
  }
}

function mapSinAngle(newA, newB, myAngle) {
let myMap = map(sin(myAngle), -1, 1, newA, newB);
return myMap;
}

function mysignature() {
  fill(255);
  textSize(12);

  text("Haiqing Qi", width - 80, height - 40);
}