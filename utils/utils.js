import pokemon from '../pokeman-data.js';
import { findById } from './findById.js';



function getRandomIndex() {
    return Math.floor(Math.random() * pokemon.length);
}

//Get three random Pokemon:
export function getRandomPokemon() {
    let randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();
    let randomIndex3 = getRandomIndex();

    while (
        randomIndex1 === randomIndex2 
        || randomIndex2 === randomIndex3 
        || randomIndex1 === randomIndex3) {
        randomIndex1 = getRandomIndex();
        randomIndex2 = getRandomIndex();
        randomIndex3 = getRandomIndex();
    }

    return [
        pokemon[randomIndex1], 
        pokemon[randomIndex2], 
        pokemon[randomIndex3]
    ];
}

// Renders the three random pokeman on the page:
export function renderPokemon() {
    const pokemanInput1 = document.getElementById('pokemon1');
    const pokemanInput2 = document.getElementById('pokemon2');
    const pokemanInput3 = document.getElementById('pokemon3');
    const pokemanImg1 = document.getElementById('pokemonImg1');
    const pokemanImg2 = document.getElementById('pokemonImg2');
    const pokemanImg3 = document.getElementById('pokemonImg3');
    const userButton = document.getElementById('catchPokemon');
    
    //puts into "arr" our 3 random pokeman
    const arr = getRandomPokemon();
    
    // sets the image, and id for the three pokeman:
    pokemanImg1.src = arr[0].url_image;
    pokemanInput1.value = arr[0].id;
    
    pokemanImg2.src = arr[1].url_image;
    pokemanInput2.value = arr[1].id;
    
    pokemanImg3.src = arr[2].url_image;
    pokemanInput3.value = arr[2].id;
    
    //tracks that the three pokemon have now been seen:
    encounteredPokemon(arr[0].id);
    encounteredPokemon(arr[1].id);
    encounteredPokemon(arr[2].id);

    //Makes the checkmark dissappear when the three new pokemon arrive:
    pokemanInput1.checked = false;
    pokemanInput2.checked = false;
    pokemanInput3.checked = false;
    
}

//magic word?  just makes it prone to less mistakes....
const POKEMON = 'POKEMON';

// - takes in a pokedex, stringifies it and puts it into local storage
export function setPokedex(rawData) {
    //stringify pokedex array:
    const stringifiedData = JSON.stringify(rawData);
    //Put pokemon into local storage:
    localStorage.setItem(POKEMON, stringifiedData);
}


// - retrieves and parses the pokedex in local storage
export function getPokedex() {
    //if there is already something in local storage, get it:
    const stringifiedPokedex = localStorage.getItem(POKEMON);
    //if there is nothing in local storage, return empty array:
    if (!stringifiedPokedex) {
        return [];
    }// parse the stringigied pokemon so that it is readable as an array/object:
    const finalPokemon = JSON.parse(stringifiedPokedex);
    // return the final product
    return finalPokemon;
}


//Has the pokemon been seen before?
export function encounteredPokemon(id) {
    const encounterArray = getPokedex();
    const lastSeen = findById(encounterArray, id);
    const pokeName = findById(pokemon, id);
    //If pokemon has been seen, increment times seen:
    if (lastSeen) {
        lastSeen.seen++;
    // - If this is the first time, make a new object with `{ id: 5, encoutered: 1, caught: 0 }`
    } else {
        const pokemonObject = { id: id, seen: 1, caught: 0, name: pokeName.pokemon };
        encounterArray.push(pokemonObject);
    }
    setPokedex(encounterArray);
}

// catchPokemon(id)
export function catchPokemon(id) {
    //put into catchArray any pokemon in local storage:
    const catchArray = getPokedex();
    //Not sure what we are doing here:
    const lastCaught = findById(catchArray, id);
    // Increment the 'caught' of this pokemon in local storage:
    lastCaught.caught++;
    //Not sure what we are doing here either:
    setPokedex(catchArray);
}