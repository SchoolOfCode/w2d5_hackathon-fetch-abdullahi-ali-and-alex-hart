async function fetchKantoPokemon(){
    let thePromis = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    let response = await thePromis.json();
    let allpokemon = response.results
    console.log(allpokemon)
    //allpokemon.forEach(addToDropDown)
 }  
 
 function addToDropDown(pokemon){
     let name = pokemon.name;
     let newPokemonToOptions = document.createElement("option")
     newPokemonToOptions.value = name;
     
     
     //thedropdownvariable.innerchild = newPokemonToOptions
 }
 
 fetchKantoPokemon()
 //function called when submit button is pressed with ${selectedPokemon}
 let hp = document.getElementById("");
 let attack = document.getElementById("");
 let defense = document.getElementById("") ;
 let speed = document.getElementById("");
 let specialAttack = document.getElementById("");
 let specialDefense = document.getElementById("");
 let total = document.getElementById("");
 let chosenPokemon = document.querySelector("input").innerText
 
 async function fetchPokemonStats(){

 
     let thePromis = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
     let theResponse = await thePromis.json();
     let theStats = theResponse.stats;
     console.log(theStats);
 }
 fetchPokemonStats()