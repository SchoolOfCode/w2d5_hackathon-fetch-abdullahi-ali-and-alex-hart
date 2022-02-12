async function fetchKantoPokemon() {
  let thePromis = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  let response = await thePromis.json();
  let allpokemon = response.results;
  console.log(allpokemon);
  allpokemon.forEach(addToDropDown);
}
let dataList = document.querySelector("datalist");
function addToDropDown(pokemon) {
  let name = pokemon.name;
  let newPokemonToOptions = document.createElement("option");
  //console.log(newPokemonToOptions)
  newPokemonToOptions.value = name;
  dataList.appendChild(newPokemonToOptions);
  //console.log(dataList)
}

fetchKantoPokemon();
//function called when submit button is pressed with ${selectedPokemon}
let hp = document.getElementById("hp");
let attack = document.getElementById("attack");
let defense = document.getElementById("defense");
let speed = document.getElementById("speed");
let specialAttack = document.getElementById("specialAttack");
let specialDefense = document.getElementById("specialDefense");
let total = document.getElementById("total");
let pokeName = document.getElementById("pokeName");
let input = document.querySelector("input");
let submit = document.querySelector("button");
let apiImage = document.getElementById("apiImage");
let statsArea = document.getElementById("statsArea");

submit.addEventListener("click", fetchPokemonStats);
async function fetchPokemonStats() {
  let chosenPokemon = input.value;
  if (chosenPokemon === "") {
    alert("you must choose a pokemon!");
    return;
  }
  console.log(chosenPokemon);
  let thePromis = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`
  );
  let theResponse = await thePromis.json();
  let theStats = theResponse.stats;
  let pokeImage = theResponse.sprites.front_shiny;

  pokeName.innerText = chosenPokemon;
  creatRemoveImage(pokeImage);
  addStats(theStats);
  input.value = "";
  statsArea.style.display = "";
}

function creatRemoveImage(imageLink) {
  let newImage = document.createElement("img");
  newImage.src = imageLink;
  newImage.id = "pokeSprite";
  let currentImage = document.querySelectorAll("figure > img");
  console.log(currentImage);
  if (currentImage.length > 0) {
    console.log(apiImage);
    let toBeRemoved = document.getElementById("pokeSprite");
    apiImage.removeChild(toBeRemoved);
    apiImage.appendChild(newImage);
  } else {
    apiImage.appendChild(newImage);
  }
}

function addStats(theStats) {
  hp.innerText = `HP: ${theStats[0].base_stat}`;
  attack.innerText = `ATTACK: ${theStats[1].base_stat}`;
  defense.innerText = `Defense: ${theStats[2].base_stat}`;
  speed.innerText = `Speed: ${theStats[3].base_stat}`;
  specialAttack.innerText = `SpecialAttack: ${theStats[4].base_stat}`;
  specialDefense.innerText = `specialDefense: ${theStats[5].base_stat}`;
  total.innerText = `HP: ${
    theStats[0].base_stat +
    theStats[1].base_stat +
    theStats[2].base_stat +
    theStats[3].base_stat +
    theStats[4].base_stat +
    theStats[5].base_stat
  }`;
}
