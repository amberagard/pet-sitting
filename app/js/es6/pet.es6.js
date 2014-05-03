/* exported Pet */
/* global _, pets */

class Pet {
    constructor(species, speciesImg, gender, name='Fluffy', age=5) {
        this.species = species;
        this.speciesImg = `../media/${speciesImg}`;
        this.gender = gender;
        this.name = name;
        this.age = age * 1;

        this.health = _.random(10, 101);
        this.full = _.random(5, 51);
        this.mood = _.random(1, 11);
    }

    static find(name) { //static turns from an instance method to a class method
        return _(pets).find(p=>p.name === name);
    }

    eat() {
        this.full += _.random(1, 5);
        this.health -= _.random(1, 4);
        this.mood -= _.random(1, 2);
        if(this.full >= 50) {this.full = 50;}
        if(this.health <= 0) {this.die();}
        if(this.mood <= 0) {this.mood = 0;}
    }

    play() {
        this.mood += _.random(1, 3);
        this.full -= _.random(1, 3);
        this.health -= _.random(1, 4);
        if(this.mood >= 10) {this.mood = 10;}
        if(this.full <= 0) {this.full = 0;}
        if(this.health <= 0) {this.die();}
    }

    sleep() {
        this.health += _.random(1, 7);
        this.mood -= _.random(1, 2);
        this.full -= _.random(1, 3);
        if(this.health >= 100) {this.health = 100;}
        if(this.full <= 0) {this.full = 0;}
        if(this.mood <= 0) {this.mood = 0;}
    }

    die() {
        this.health = 0;
        $('div[data-name='+this.name+']').addClass('dead');
        alert('Your pet has died');
    }

    update() {
        $('div[data-name='+this.name+'] > :nth-child(6) .inner').css('width', `${this.health}%`);
        $('div[data-name='+this.name+'] > :nth-child(7) .inner').css('width', `${this.full * 2}%`);
        $('div[data-name='+this.name+'] > :nth-child(8) .inner').css('width',`${this.mood * 10}%`);
        console.log(this.mood);
    }

    render() { // this is an instance method
        $('#pets').append(`<div data-name=${this.name} class=pet>
                               <div><img src=${this.speciesImg}></div>
                               <div>Name: ${this.name}</div>
                               <div>Age: ${this.age}</div>
                               <div>Species: ${this.species}</div>
                               <div>Gender: ${this.gender}</div>
                               <div>Health:<div id=health class=outer><div class=inner style="width: ${this.health}%"></div></div></div>
                               <div>Full:<div id=full class=outer><div class=inner style="width: ${this.full * 2}%"></div></div></div>
                               <div>Mood:<div id=mood class=outer><div class=inner style="width: ${this.mood * 10}%"></div></div></div>
                               <button class=eat>Eat</button>
                               <button class=play>Play</button>
                               <button class=sleep>Sleep</button>
                           </div>`);
    }
}
