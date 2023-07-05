let unit =30; //how many pixels a unit is
let points = [];
let points2=[];
let slider;
let unitLineHeight = 3;
let power=1;
let constant=2;
let step=0.05;
//let powerSlider;
function setup() {
  createCanvas(600, 600);
  stroke(0);
  createPoints();
  slider = createSlider(0.2, 80, unit, 0.2);
}

function createPoints(){
  for (let i = -constant; i <= constant; i+=step) {
    for (let j = -constant; j <= constant; j+=step) {
      let p1=new Complex(i,j);
      points.push(p1);
      let p2=new Complex(p1.a, p1.b);
      points2.push(p2);
    }
  }
  console.log(points2);
}

function draw() {
  //noLoop();
  clear();
  translate(width / 2, height / 2);
  scale(1, -1);
  background(220);
  drawCoordinates();
  for (let i = 0; i < points.length; i++) {

    points2[i]=points[i].raiseToPower(power);
    points2[i].show();

  }
  unit = slider.value();
  if(power<7){
    power+=0.01;
  }

  push();
  strokeWeight(0.7);
  scale(1,-1);
  text("Exponent: "+power.toFixed(2),width/2-100, -height/2+20);
  pop();
}

function drawCoordinates() {
  strokeWeight(1);
  line(-width / 2, 0, width / 2, 0);
  line(0, -height / 2, 0, height / 2);
  let n_x = width / (2 * unit);
  let n_y = height / (2 * unit);
  for (let i = -floor(n_x); i <= floor(n_x); i++) {
    if (i != 0) {
      line(i * unit, unitLineHeight, i * unit, -unitLineHeight);
      push();
      scale(1, -1);
      strokeWeight(0.1);
      pop();
    }
  }
  for (let i = -floor(n_y); i <= floor(n_y); i++) {
    if (i != 0) {
      line(unitLineHeight, i * unit, -unitLineHeight, i * unit);
      push();
      scale(1, -1);
      strokeWeight(0.1);  
      pop();
    }
  }
}

function mouseWheel(event) {
  slider.value(slider.value() - event.delta / 125);
}

function add(z1, z2){
  let z=new Complex();
  z.a=z1.a+z2.a;
  z.b=z1.b+z2.b;
  return z;
}

function mult(z1,z2){
  let z=new Complex();
  z.a=z1.a*z2.a-z1.b*z2.b;
  z.b=z1.a*z2.b+z2.a*z1.b;
  return z;
}
