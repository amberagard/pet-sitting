/* global Pet, pets */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#add').click(add);
        $('#pets').on('click', '.eat', eat);
        $('#pets').on('click', '.play', play);
        $('#pets').on('click', '.sleep', sleep);
    }

    function eat() {
        let name = $(this).closest('.pet').data('name');
        let pet = Pet.find(name);
        pet.eat();
        pet.update();
    }

    function play() {
        let name = $(this).closest('.pet').data('name');
        let pet = Pet.find(name);
        pet.play();
        pet.update();
    }

    function sleep() {
        let name = $(this).closest('.pet').data('name');
        let pet = Pet.find(name);
        pet.sleep();
        pet.update();
    }

    function add() {
        let gender = $('#gender').val();
        let speciesImg = $('#species').val();
        let species = $('#species option:selected').text();
        let name = $('#name').val() || undefined;
        let age = $('#age').val() || undefined;

        let pet = new Pet(species, speciesImg, gender, name, age);
        pets.push(pet);
        pet.render();
    }
})();
