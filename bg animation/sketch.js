let objects = [];
const drag = 0.99;
let m = 100;

let prevMouse;
let mouse;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i=0;i<100;i++){
    objects.push(new Objects(random(0, width), random(0, height), m));
  }
  // console.log(objects)
}

function draw() {
  background("#1f1f38");
  let F;
  mouse = createVector(mouseX, mouseY);
  prevMouse = createVector(pmouseX, pmouseY);
  F = p5.Vector.sub(mouse, prevMouse)
  
  
  
  for(let i=0;i<100;i++){
    objects[i].force(F.copy());
    objects[i].update();
    objects[i].show();
  }
  // console.log(objects)
}