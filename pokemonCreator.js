import { domElements } from './dom.js';

export const getPokemon = async p => {
  try {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`);
    const pokemon = await pokemonData.json();

    const { name, height, weight, types, sprites, id } = pokemon;
    const { front_default } = sprites;

    const typeP = types.map(t => t.type.name).join(', ');

    domElements.pokemonImg.src = front_default;
    domElements.pokemonName.textContent = name;
    domElements.pokemonHeight.textContent = `${height} m`;
    domElements.pokemonWeight.textContent = ` ${weight} kg`;
    domElements.pokemonType.textContent = `${typeP}`;
    domElements.pokemonId.textContent = `${id}`;

    domElements.pokemonInfoCard.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByType = async type => {
  try {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const pokemonD = await pokemonData.json();
    const { pokemon } = pokemonD;
    const pokemons = pokemon.map(p => p.pokemon.name);
    pokemons.forEach(pokemon => {
      makePokemons(pokemon);
    });
  } catch (error) {
    console.log(error);
  }
};

const makePokemons = name => {
  const html = `<li class="pokemon-list-item" data-name=${name}>${name}</li>`;
  domElements.pokemonList.insertAdjacentHTML('afterbegin', html);
};
