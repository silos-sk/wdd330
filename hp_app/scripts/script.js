const hp_btn = document.getElementById("hp_btn");
const hp_name = document.getElementById("hp_name");
const hp_result = document.getElementById("hp_result");
const hp_bday = document.getElementById("bday");
const hp_age = document.getElementById("age");
const hp_ancestry = document.getElementById("ancestry");
const hp_patronus = document.getElementById("patronus");
const hp_wand = document.getElementById("wand");
const hp_actor = document.getElementById("actor");
const side = document.querySelectorAll(".side");
const result = document.querySelector(".result");



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
      const hpAge = 2011 - data[randKey].yearOfBirth;
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



        if (hp_house.textContent === "SLYTHERIN"){
          house("rgba(8, 147, 47, 0.545)")
          // result.style.borderColor = "rgba(8, 147, 47, 0.3)"
        } else if (hp_house.textContent === "GRYFFINDOR"){
          house("rgba(147, 5, 20, 0.54)")
        } else if (hp_house.textContent === "HUFFLEPUFF"){
          house("rgba(242, 226, 5, 0.54)")
          // result.style.borderColor = "rgba(242, 226, 5, 0.3)"
        } else if (hp_house.textContent === "RAVENCLAW"){
          house("rgba(4,19,85, 0.54)")
          // result.style.borderColor = "rgba(3, 12, 145, 0.3)"
        } else {
          house("rgb(202, 138, 36, 0.54)")
        }

        function house(color) {
          var elements = document.getElementsByClassName('side'); // get all elements
          for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = color;
            elements[i].style.borderColor = color;
          }
        }

        
      }
    });
}

// Generate random key number
function getRandKey(data) {
  let randKey = parseInt(Math.floor(Math.random() * data.length + 1));
  return randKey;
}
