var Pet = function Pet(species, speciesImg, gender) {
  "use strict";
  var name = arguments[3] !== (void 0) ? arguments[3] : 'Fluffy';
  var age = arguments[4] !== (void 0) ? arguments[4] : 5;
  this.species = species;
  this.speciesImg = ("../media/" + speciesImg);
  this.gender = gender;
  this.name = name;
  this.age = age * 1;
  this.health = _.random(10, 101);
  this.full = _.random(5, 51);
  this.mood = _.random(1, 11);
};
($traceurRuntime.createClass)(Pet, {
  eat: function() {
    "use strict";
    this.full += _.random(1, 5);
    this.health -= _.random(1, 4);
    this.mood -= _.random(1, 2);
    if (this.full >= 50) {
      this.full = 50;
    }
    if (this.health <= 0) {
      this.die();
    }
    if (this.mood <= 0) {
      this.mood = 0;
    }
  },
  play: function() {
    "use strict";
    this.mood += _.random(1, 3);
    this.full -= _.random(1, 3);
    this.health -= _.random(1, 4);
    if (this.mood >= 10) {
      this.mood = 10;
    }
    if (this.full <= 0) {
      this.full = 0;
    }
    if (this.health <= 0) {
      this.die();
    }
  },
  sleep: function() {
    "use strict";
    this.health += _.random(1, 7);
    this.mood -= _.random(1, 2);
    this.full -= _.random(1, 3);
    if (this.health >= 100) {
      this.health = 100;
    }
    if (this.full <= 0) {
      this.full = 0;
    }
    if (this.mood <= 0) {
      this.mood = 0;
    }
  },
  die: function() {
    "use strict";
    this.health = 0;
    $('div[data-name=' + this.name + ']').addClass('dead');
    alert('Your pet has died');
  },
  update: function() {
    "use strict";
    $('div[data-name=' + this.name + '] > :nth-child(6) .inner').css('width', (this.health + "%"));
    $('div[data-name=' + this.name + '] > :nth-child(7) .inner').css('width', (this.full * 2 + "%"));
    $('div[data-name=' + this.name + '] > :nth-child(8) .inner').css('width', (this.mood * 10 + "%"));
  },
  render: function() {
    "use strict";
    $('#pets').append(("<div data-name=" + this.name + " class=pet>\n                               <div><img src=" + this.speciesImg + "></div>\n                               <div>Name: " + this.name + "</div>\n                               <div>Age: " + this.age + "</div>\n                               <div>Species: " + this.species + "</div>\n                               <div>Gender: " + this.gender + "</div>\n                               <div>Health:<div id=health class=outer><div class=inner style=\"width: " + this.health + "%\"></div></div></div>\n                               <div>Full:<div id=full class=outer><div class=inner style=\"width: " + this.full * 2 + "%\"></div></div></div>\n                               <div>Mood:<div id=mood class=outer><div class=inner style=\"width: " + this.mood * 10 + "%\"></div></div></div>\n                               <button class=eat>Eat</button>\n                               <button class=play>Play</button>\n                               <button class=sleep>Sleep</button>\n                           </div>"));
  }
}, {find: function(name) {
    "use strict";
    return _(pets).find((function(p) {
      return p.name === name;
    }));
  }});

//# sourceMappingURL=pet.map
