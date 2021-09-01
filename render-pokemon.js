

  //let pokeCaught = 0 

//RENDER FUNCTION INTO INDEX.HTML
  import { getPokedex, getRandomPokemon } from './utils/utils.js';
  import { catchPokemon, encounteredPokemon } from './utils/utils.js';
  import { renderPokemon } from './utils/utils.js';
  //stretch: howmanycaughtsofar()

  //local storage:
  //pokemon seen 
  //pokemon caught

  // This function getRandomPokemon()
// - does the hard work of finding three unique and random pokemon from our raw data
// - returns an array of three random pokemon

//const userSelection = document.getElementById('userSelection');
const userButton = document.getElementById('catchPokemon');

renderPokemon();

let tries = 0;

userButton.addEventListener('click', () => {
  const selectedPokemon = document.querySelector('input:checked');

  catchPokemon(selectedPokemon.value);
  renderPokemon();
  tries++;
  if (tries === 10) {
    window.location = '../results/index.html';
  }

});

