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
    for (i = planets.length; i > 0; --i) this.planets[i].show();
    pop();
  }

  this.spin = function() {
    this.a += this.s; // spin based on speed
    for (i = planets.length; i > 0; --i)
      this.planets[i].orbit(); // recursively call through dependents
  }

  this.spawnSpiners = function(childNum, level) {
    for (i = 0; i < childNum; ++i) { //create planets = to children number
      var rad = this.r / (level * 2);
      var dis = floor(random(50, 150));
      var spd = random(-1, 1);
      let ang = random(TWO_PI);
      this.planets.push(new Planet(rad, dis, spd, ang));
      if (level < 3) { //if level not at cap spawn again
        var num = floor(random(0, 4));
        this.planets.spawnSpiners(num, level + 1);
      }
    }
  }
}