import pokemon from '../pokeman-data.js';
import { findById } from './findById.js';

// This function getRandomPokemon()
// - does the hard work of finding three unique and random pokemon from our raw data
// - returns an array of three random pokemon

function getRandomIndex() {
    return Math.floor(Math.random() * pokemon.length);
}

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


export function renderPokemon() {
    const pokemanInput1 = document.getElementById('pokemon1');
    const pokemanInput2 = document.getElementById('pokemon2');
    const pokemanInput3 = document.getElementById('pokemon3');
    const pokemanImg1 = document.getElementById('pokemonImg1');
    const pokemanImg2 = document.getElementById('pokemonImg2');
    const pokemanImg3 = document.getElementById('pokemonImg3');
    const userButton = document.getElementById('catchPokemon')
    
    // console.log(pokemanImg1, pokemanImg2, pokemanImg3, pokemanInput1, pokemanInput2, pokemanInput3);
    
    const arr = getRandomPokemon();
    //console log single random pokemon
    
    
    
    
    pokemanImg1.src = arr[0].url_image;
    pokemanInput1.value = arr[0].id;
    
    pokemanImg2.src = arr[1].url_image;
    pokemanInput2.value = arr[1].id;
    
    pokemanImg3.src = arr[2].url_image;
    pokemanInput3.value = arr[2].id;
    
    //const userSelectionPokemon = getPokedex();
    
    encounteredPokemon(arr[0].id);
    encounteredPokemon(arr[1].id);
    encounteredPokemon(arr[2].id);

    pokemanInput1.checked = false;
    pokemanInput2.checked = false;
    pokemanInput3.checked = false;
    
    }





// renderNewPokemon()
// - We need to find three unique pokemon to show the user
//     - getRandomPokemon()
//     - Whenever we find 3 new pokemon, we need to track that they have now been "seen"
//     - call encounterPokemon() on all 3 new pokemon

const POKEMON = 'POKEMON';

// setPokedex(pokedex)
// - takes in a pokedex, stringifies it and puts it into local storage
// Make cart stringified so that the local storage can use it:
export function setPokedex(pokedex) {
    //stringify cart array:
    const stringifiedPokemon = JSON.stringify(pokedex);
    //Put cart into local storage:
    localStorage.setItem(POKEMON, stringifiedPokemon);
}


// getPokedex()
// - retrieves and parses the pokedex in local storage
export function getPokedex() {
    //here we are getting anything in localStorage:
    const stringifiedPokedex = localStorage.getItem(POKEMON);
    
    if (!stringifiedPokedex) {

        return [];
    }// parse the stringigied cart so that it is readable as an array/object:
    const finalPokemon = JSON.parse(stringifiedPokedex);
    // return the final product
    return finalPokemon;
}

// encounterPokemon(id)
// - getPokedex
// - If the pokemon has been previously seen, just increment the times seen
// - If this is the first time, make a new object with `{ id: 5, encoutered: 1, caught: 0 }`
// - setPokedex

export function encounteredPokemon(id) {
    const encounterArray = getPokedex();
    const lastSeen = findById(encounterArray, id);
    if (lastSeen) {
        lastSeen.seen++;
    } else {
        const pokemonObject = { id:id, seen: 1, caught: 0 };
        encounterArray.push(pokemonObject);
    }
    setPokedex(encounterArray);
}

// catchPokemon(id)
// - getPokedex
// - no need to check if it's been encountered. If you got this far, it _has_ been encountered.
// - Increment the `caught` of this pokemon in local storage
// - setPokedex

export function catchPokemon(id) {
    const catchArray = getPokedex();
    
    const lastCaught = findById(catchArray, id);
    
    lastCaught.caught++;

    setPokedex(catchArray);
}