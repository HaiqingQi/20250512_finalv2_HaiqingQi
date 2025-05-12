class particle {
  constructor(posX, posY, radius) {
    this.x = posX;
    this.y = posY;
    this.pSize = radius;
this.r = random(180, 200); 
this.g = random(240, 255); 
this.b = random(180, 210); 
    
    this.nPos1 = random(-1000, 1000);
    this.nPos2 = random(-1000, 1000);
  }

  display(alpha) {
    noStroke();
    fill(this.r, this.g, this.b, alpha);
    circle(this.x, this.y, this.pSize);
  }

  update(nSpeed) {
    let xNoise = noise(this.nPos1 += nSpeed);
    let yNoise = noise(this.nPos2 += nSpeed);
    let xMove = map(xNoise, 0, 1, 0, width);
    let yMove = map(yNoise, 0, 1, 0, height);
    this.x = xMove;
    this.y = yMove;
  }
}
