
export function findById(encounterArray, id) {
  
    // loop through the array
    for (let singularPokemon of encounterArray) {
      //if this items id matches the id we were passed as an argument...
        if (singularPokemon.id === Number(id)) {
      //return that item....
            return singularPokemon;
        }
    }
  }
