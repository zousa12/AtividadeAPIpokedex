function initialLoad(){
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        setPokemonsList(data.results)
    })
    
    //const pokemons = []
}

function setPokemonsList(pokemons){

    pokemons.forEach(function(pokemon, index){
        inserirPokemon(pokemon, index + 1) 
    });
    
}

function inserirPokemon(pokemon, id){

    const divlist = document.getElementById("section-list");

    const divItem = document.createElement("div")

    const elementImg = document.createElement("img");
    elementImg.src = getImageUrl(id)
    divItem.appendChild(elementImg);

    const element = document.createElement("p");
    element.innerHTML = pokemon.name;
    divItem.appendChild(element);

    divlist.appendChild(divItem)
}

function getImageUrl(id){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png"
   
}   