const hp_btn = document.getElementById("hp_btn");
const hp_name = document.getElementById("hp_name");
const hp_result = document.getElementById("hp_result");
const hp_bday = document.getElementById("bday");
const hp_age = document.getElementById("age");
const hp_ancestry = document.getElementById("ancestry");
const hp_patronus = document.getElementById("patronus");
const hp_wand = document.getElementById("wand");
const hp_actor = document.getElementById("actor");



const hp_house = document.querySelector(".house");
let date = new Date();
let currentYear = date.getFullYear();

hp_btn.addEventListener("click", getRandomHp);

// Get Random Harry Potter (HP) Character from API
function getRandomHp() {
  fetch("https://hp-api.herokuapp.com/api/characters")
    .then((res) => res.json())
    .then((data) => {
      // Call random key generator function
      const randKey = getRandKey(data);

      // Assign variables to data object properties
      const hpName = data[randKey].name;
      const hpImg = data[randKey].image;
      const hpHouse = data[randKey].house;
      const hpDob = data[randKey].dateOfBirth;
      const hpAge = currentYear - data[randKey].yearOfBirth;
      const hpAncestry = data[randKey].ancestry;
      const hpPatronus = data[randKey].patronus;
      const hpWand = data[randKey].wand.core;
      const hpActor = data[randKey].actor;

      // Run random HP character function again if encountered hpImg or hpName are empty
      if (hpImg == "" || hpName == "") {
        getRandomHp();
      } else {
        // Display HP character name and image on HTML
        hp_name.textContent = hpName;
        hp_result.innerHTML = `<img src=${hpImg} alt=${hpName} />`;
        hp_house.innerHTML = hpHouse.toUpperCase();
        hp_bday.textContent = hpDob;
        hp_age.textContent = hpAge;
        hp_ancestry.textContent = hpAncestry.toUpperCase();
        hp_patronus.textContent = hpPatronus.toUpperCase();
        hp_wand.textContent = hpWand.toUpperCase();
        hp_actor.textContent = hpActor.toUpperCase();
        
      }
    });
}

// Generate random key number
function getRandKey(data) {
  let randKey = parseInt(Math.floor(Math.random() * data.length + 1));
  return randKey;
}
