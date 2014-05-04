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
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.eat();
    pet.update();
  }
  function play() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.play();
    pet.update();
  }
  function sleep() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }
  function add() {
    var gender = $('#gender').val();
    var speciesImg = $('#species').val();
    var species = $('#species option:selected').text();
    var name = $('#name').val() || undefined;
    var age = $('#age').val() || undefined;
    var pet = new Pet(species, speciesImg, gender, name, age);
    pets.push(pet);
    pet.render();
  }
})();

//# sourceMappingURL=main.map
