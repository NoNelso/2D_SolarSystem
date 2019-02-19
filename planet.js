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
    if (this.planets.length != null)
      for (k = this.planets.length - 1; k >= 0; k--) {
        console.log("k", k);
        this.planets[k].show();
      }
    pop();
  }

  this.spin = function() {
    this.a += this.s; // base spin rate on speed
    for (l = this.planets.length - 1; l >= 0; --l) //recursive check dependants
      this.planets[l].spin(); //re-call function
  }

  this.spawnSpiners = function(childNum, level) {
    for (i = 0; i < childNum; ++i) { //create planets by children number per lv
      var rad = ceil(this.r / (level + .3)); //each level is slightly smaler than parent
      var dis = floor(random(100, 150) / level); //each planet rand dist from parent
      var spd = random(-.1, .1); //each planet at rand orbit speed
      var ang = random(TWO_PI); //no planet should spawn right ontop of brother
      this.planets.push(new Planet(rad, dis, spd, ang));
    }
    if (level < 3) { //if level not at cap spawn again
      for (j = 0; j < this.planets.length; ++j) {
        this.planets[j].spawnSpiners(5 - level, 1 + level);
      }
    }
  }
}