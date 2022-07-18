import { house } from "./utilities.js";
import { Character } from "./character.js";

const jsonUrl = "//hp-api.herokuapp.com/api/characters";

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

hp_btn.addEventListener("click", renderHpChar);

// Create instance of Character and run getChar method to get HP characters
const hp_char = new Character(jsonUrl);
hp_char.getChar();

// Get Random Harry Potter (HP) Character
function getRandomHp() {
  hp_char.randomChar(); // generate Random Character from HP API
  return hp_char.chars;
}

// Display Harry Potter Characters in HTML
function renderHpChar() {
  let chars = getRandomHp();

  // Assign variables to character's object properties
  const hpName = chars.name;
  const hpImg = chars.image;
  const hpHouse = chars.house;
  const hpDob = chars.dateOfBirth;
  const hpAge = 1996 - chars.yearOfBirth;
  const hpAncestry = chars.ancestry;
  const hpPatronus = chars.patronus;
  const hpWand = chars.wand.core;
  const hpActor = chars.actor;
  const yearOfBirth = chars.yearOfBirth;

  // change image url http to https
  let imgUrl = hpImg.replace("http", "https");

  // Display HP character name and image on HTML
  hp_name.textContent = hpName;
  hp_result.innerHTML = `<img src=${imgUrl} alt=${hpName} />`;
  hp_house.innerHTML = hpHouse.toUpperCase();
  hp_bday.textContent = hpDob;
  hp_age.textContent = hpAge;
  hp_ancestry.textContent = hpAncestry.toUpperCase();
  hp_patronus.textContent = hpPatronus.toUpperCase();
  hp_wand.textContent = hpWand.toUpperCase();
  hp_actor.textContent = hpActor.toUpperCase();

  // if the year of birth is empty, do not display any text on html
  if (yearOfBirth === "") {
    hp_age.textContent = "";
  }

  // change color of side info tiles according to character's house
  if (hp_house.textContent === "SLYTHERIN") {
    house("rgba(8, 147, 47, 0.545)", "side"); //Color: Green
    // Also change character image border color according to house
    // hp_result.style.borderColor = "rgba(8, 147, 47, 0.3)"
  } else if (hp_house.textContent === "GRYFFINDOR") {
    house("rgba(147, 5, 20, 0.54)", "side"); //Color: Gold
  } else if (hp_house.textContent === "HUFFLEPUFF") {
    house("rgba(242, 226, 5, 0.54)", "side");
    // hp_result.style.borderColor = "rgba(242, 226, 5, 0.3)"
  } else if (hp_house.textContent === "RAVENCLAW") {
    house("rgba(4,19,85, 0.54)", "side");
    // hp_result.style.borderColor = "rgba(3, 12, 145, 0.3)"
  } else {
    house("rgb(202, 138, 36, 0.54)", "side");
  }
} // End of getRandomHp
