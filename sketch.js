function setup() {
  createCanvas(600, 500);
  //create circle with
  //radius 45, dist from center 0, rotationspeed 0, angle random val < 2 PI
  sun = new Planet(45, 0, 0, random(TWO_PI));
  //create 5 rotating bodies about sun with depth of spawn 1
  sun.spawnSpiners(5, 1);
}

function draw() {
  background(21); //black space
  translate(width / 2, height / 2); //sun in center
  sun.show(); //show solar system
  sun.spin(); //itterate solar system
}