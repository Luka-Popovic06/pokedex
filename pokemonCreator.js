import { domElements } from './dom.js';
import { pokemonNameOrId } from './input.js';

export const getPokemon = async () => {
  try {
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
    );
    const pokemon = await pokemonData.json();
    const imageUrl = pokemon.sprites.front_default;
    const name = pokemon.name;
    const height = pokemon.height;
    const weight = pokemon.weight;
    const type = pokemon.types.map(t => t.type.name).join(', ');
    const id = pokemon.id;
    console.log(pokemon);

    domElements.pokemonImg.src = imageUrl;
    domElements.pokemonName.textContent = name;
    domElements.pokemonHeight.textContent = `${height} m`;
    domElements.pokemonWeight.textContent = ` ${weight} kg`;
    domElements.pokemonType.textContent = `${type}`;
    domElements.pokemonId.textContent = `${id}`;

    domElements.pokemonInfoCard.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');
  } catch (error) {
    console.log(error);
  }
};

/*const getPokemonByType = async type => {
  try {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const pokemonD = await pokemonData.json();
    const pokemons = pokemonD.pokemon.map(p => p.pokemon.name);
    pokemons.forEach(pokemon => {
      makePokemons(pokemon);
    });
    console.log(pokemons);
  } catch (error) {
    console.log(error);
  }
};
getPokemonByType('fire');

const makePokemons = name => {
  //domElements.pokemonList.innerHTML = '';
  const html = `<li>${name}</li>`;
  domElements.pokemonList.insertAdjacentHTML('afterbegin', html);
};*/
