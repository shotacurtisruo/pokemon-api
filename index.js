async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        if (!response.ok){
            throw new Error("Could not fetch resource");

        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const shinyPokemonSprite = data.sprites.front_shiny;
        const pokemonSpecies = data.species.name;
        


        const imgElement = document.getElementById("pokemonSprite");
        const shinyImgElement = document.getElementById("shinyPokemonSprite");
        const pokemonDescription = document.getElementById("pokemonDescription");
        

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";


        shinyImgElement.src = shinyPokemonSprite;
        shinyImgElement.style.display = "block";

        pokemonDescription.textContent = pokemonSpecies;

     


    }
    catch(error){
        console.log(error);
    }
}