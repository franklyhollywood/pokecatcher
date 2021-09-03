

  

import { getPokedex, getRandomPokemon } from './utils/utils.js';
import { catchPokemon, encounteredPokemon } from './utils/utils.js';
import { renderPokemon } from './utils/utils.js';
  


//button element:
const userButton = document.getElementById('catchPokemon');
// Calling the render pokemon function:
renderPokemon();
// initialize counter of 10 pokemon caught:
let tries = 0;
//EventListener on button:
userButton.addEventListener('click', () => {
  //put user selection into const: selectedPokemon
    const selectedPokemon = document.querySelector('input:checked');
  // call catchpokeman function and pass it the selected pokemon
    catchPokemon(selectedPokemon.value);
    // when button is clicked, show three more pokemon:
    renderPokemon();
  //Increase the 10 counter by one each time a pokemon is selected
    tries++;
  //if tries are = 10, than redirect user to results page:
    if (tries === 10) {
        window.location = './results/index.html';
    }

});

