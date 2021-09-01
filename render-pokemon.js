

  //let pokeCaught = 0 

//RENDER FUNCTION INTO INDEX.HTML
  import { getPokedex, getRandomPokemon } from './utils/utils.js';
  
  //stretch: howmanycaughtsofar()

  //local storage:
  //pokemon seen 
  //pokemon caught

  // This function getRandomPokemon()
// - does the hard work of finding three unique and random pokemon from our raw data
// - returns an array of three random pokemon

//const userSelection = document.getElementById('userSelection');

const pokemanInput1 = document.getElementById('pokemon1');
const pokemanInput2 = document.getElementById('pokemon2');
const pokemanInput3 = document.getElementById('pokemon3');
const pokemanImg1 = document.getElementById('pokemonImg1');
const pokemanImg2 = document.getElementById('pokemonImg2');
const pokemanImg3 = document.getElementById('pokemonImg3');
const userButton = document.getElementById('catchPokemon')

// console.log(pokemanImg1, pokemanImg2, pokemanImg3, pokemanInput1, pokemanInput2, pokemanInput3);

const arr = getRandomPokemon();
console.log(arr[0])



pokemanImg1.src = arr[0].url_image;
pokemanInput1.value = arr[0].id;

pokemanImg2.src = arr[1].url_image;
pokemanInput2.value = arr[1].id;

pokemanImg3.src = arr[2].url_image;
pokemanInput3.value = arr[2].id;

const userSelectionPokemon = getPokedex();

userButton.addEventListener('click', () => {
  let userButton = document.querySelector('input:checked');
  

});

