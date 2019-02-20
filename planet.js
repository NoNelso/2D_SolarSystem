function Planet(radius, distance, speed, angle, level) {
  //create object with vars and dependant array
  this.r = radius;
  this.d = distance;
  this.s = speed;
  this.a = angle;
  this.l = level;
  this.planets = [];

  this.show = function() { //save state, move center, show, and reload state
    //console.log(sun.planets);
    push();
    rotate(this.a);
    translate(this.d, 0);
    ellipse(0, 0, this.r * 2);
    if (this.planets.length > 2)
      for (k = this.planets.length - 1; k >= 0; --k) {
        this.planets[k].show();
      }
    pop();
  }

  this.spin = function() {
    this.a += this.s; // base spin rate on speed
    if (this.planets.length > 2)
      for (l = 0; l < this.planets.length; ++l) //recursive check dependants
        this.planets[l].spin(); //re-call function
    //  noLoop();
  }

  this.spawnSpiners = function(childNum, lv) {
    //console.log("C#", childNum, "LV", lv);
    for (i = 0; i < childNum; ++i) { //create planets by children number per lv
      var rad = ceil(this.r / (lv + .3)); //each level is slightly smaler than parent
      var dis = floor(random(100, 150) / lv); //each planet rand dist from parent
      var spd = random(-.2, .2); //each planet at rand orbit speed
      var ang = random(TWO_PI); //no planet should spawn right ontop of brother
      var lev = lv;
      this.planets.push(new Planet(rad, dis, spd, ang, lev));
    }
    if (lv < 3) { //if level not at cap spawn again
      for (j = 0; j < childNum; ++j) {
        this.planets[j].spawnSpiners(5 - lv, 1 + lv);
      }
    }
  }
}