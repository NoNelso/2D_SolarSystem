function setup() {
  createCanvas(600, 500);
  //create circle with
  //radius 45, dist from center 0, rotationspeed 0, angle 0, level 0
  sun = new Planet(45, 0, 0, 0, 1);
  //create 5 rotating bodies about sun with depth of spawn 1
  sun.spawnSpiners(5, 1);
  console.log("sun", sun);
}

function draw() {
  background(21); //black space
  translate(width / 2, height / 2); //sun in center
  sun.show(); //show solar system
  sun.spin(); //itterate solar system
}

function keyPressed() {
  if (keyCode == 72) noLoop(); //h = stop animation loop
  if (keyCode == 71) loop(); //g = restart animation loop
}