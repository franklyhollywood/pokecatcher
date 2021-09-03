// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils/findById.js';
import pokemon from '../pokeman-data.js';
import { setPokedex } from '../utils/utils.js';

const test = QUnit.test;

test('Should return a correct pokemon object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',  
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(pokemon, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should place pokedex into localstorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // create the raw data to test function with:
    const expected = [
        {
            id: 3, 
            seen: 1, 
            caught: 0, 
            name: 'charmander' 
        }
    ];
    
    // Use the tested function to set raw data to local storaga
    setPokedex(expected);


    //Act 
    // Call the function you're testing and set the result to a const
    //THis is now, we use local storage getitem to manually pull down what is in local storage
    const stringyActual = localStorage.getItem('POKEMON');
    const actual = JSON.parse(stringyActual);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
