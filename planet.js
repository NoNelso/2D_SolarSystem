function Planet(radius, distance, speed, angle, level) {
  //create object with vars and dependant array
  this.r = radius;
  this.d = distance;
  this.s = speed;
  this.a = angle;
  this.l = level;
  this.planets = [];

  this.spin = function() {
    this.a += this.s; // base spin rate on speed
    for (var i in this.planets) this.planets[i].spin(); //recursive check dependants & re-call function
  }

  this.spawnSpiners = function(childNum, lv) {
    console.log("C#", childNum, "LV", lv);
    for (var j = 0; j < childNum; ++j) { //create planets by children number per lv
      var rad = ceil(this.r / (lv + .3)); //each level is slightly smaler than parent
      var dis = floor(random(100, 150) / lv); //each planet rand dist from parent
      var spd = random(-.2, .2); //each planet at rand orbit speed
      var ang = random(TWO_PI); //no planet should spawn right ontop of brother
      var lev = lv;
      this.planets.push(new Planet(rad, dis, spd, ang, lev));
      if (lv < 3) { //if level not at cap spawn again
        this.planets[j].spawnSpiners(5 - lv, 1 + lv);
      }
    }
    noLoop();
  }

  this.show = function() { //save state, move center, show, and reload state
    push();
    rotate(this.a);
    translate(this.d, 0);
    ellipse(0, 0, this.r * 2);
    for (var k in this.planets) this.planets[k].show();
    pop();
  }
}