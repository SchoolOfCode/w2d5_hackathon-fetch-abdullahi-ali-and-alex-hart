async function fetchKantoPokemon(){
    let thePromis = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    let response = await thePromis.json();
    let allpokemon = response.results
    console.log(allpokemon)
    
    allpokemon.forEach(addToDropDown)

}  
let dataList = document.querySelector("datalist")
 function addToDropDown(pokemon){
     
     let name = pokemon.name;
     let newPokemonToOptions = document.createElement("option")
     //console.log(newPokemonToOptions)
     newPokemonToOptions.value = name;
     dataList.innerchild = newPokemonToOptions
     //console.log(dataList)

 }
 
 fetchKantoPokemon()
 //function called when submit button is pressed with ${selectedPokemon}
 let hp = document.getElementById("hp");
 let attack = document.getElementById("attack");
 let defense = document.getElementById("defense") ;
 let speed = document.getElementById("speed");
 let specialAttack = document.getElementById("specialAttack");
 let specialDefense = document.getElementById("specialDefense");
 let total = document.getElementById("total");
 
 let submit = document.querySelector("button");
 
 submit.addEventListener("click", fetchPokemonStats)
 
 async function fetchPokemonStats(){
     let chosenPokemon = document.querySelector("input").value

     console.log(chosenPokemon)
     let thePromis = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
     let theResponse = await thePromis.json();
     console.log(theResponse)
     let theStats = theResponse.stats;
     console.log(theStats);
 }
 