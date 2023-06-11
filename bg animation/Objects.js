class Objects{
  constructor(x, y, m){
    this.pos = createVector(x, y);
    this.m = m;
    this.v = createVector(0, 0);
  }
  update(){
    this.pos.add(this.v)
    let F = p5.Vector.random2D();
    F.setMag(random(0, 5));
    F.div(this.m)
    this.v.add(F);
    this.v.mult(drag)
    
    if(this.pos.x > width){
      this.pos.x -= width;
    }
    else if(this.pos.x < 0){
           this.pos.x += width;
    }
    if(this.pos.y > height){
      this.pos.y -= height;
    }
    else if(this.pos.y < 0){
           this.pos.y += height;
    }
  }
  
  force(F){
    F.div(this.m)
    this.v.add(F);
  }
  
  show(){
    push();
    fill(255, 50);
    noStroke();
    circle(this.pos.x%width, this.pos.y%height, 10);
    pop();
  }
}