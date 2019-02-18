function Planet(radius, distance, speed, angle) {
  //create object with vars and dependant array
  this.r = radius;
  this.d = distance;
  this.s = speed;
  this.a = angle;
  this.planets = [];

  this.show = function() { //save state, move center, show, and reload state
    push();
    rotate(this.a);
    translate(this.d, 0);
    ellipse(0, 0, this.r * 2);
    for (i = this.planets.length - 1; i >= 0; --i) this.planets[i].show();
    pop();
  }

  this.spin = function() {
    this.a += this.s; // base spin rate on speed
    for (i = this.planets.length - 1; i >= 0; --i) //recursive check dependants
      this.planets[i].spin(); //re-call function
  }

  this.spawnSpiners = function(childNum, level) {
    for (i = 0; i < childNum; ++i) { //create planets = to children number
      var rad = this.r / (level + 1);
      var dis = floor(random(100, 150) / level);
      var spd = random(-.1, .1);
      var ang = random(TWO_PI);
      this.planets.push(new Planet(rad, dis, spd, ang));
      if (level < 3) { //if level not at cap spawn again
        //var num = floor(random(0, 4))
        this.planets[i].spawnSpiners(5 - level, level + 1);
      }
    }
  }
}