import { domElements } from './dom.js';

export const getPokemon = async p => {
  try {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`);
    const pokemon = await pokemonData.json();

    const { name, height, weight, types, sprites, id } = pokemon;
    const { front_default } = sprites;

    const imageUrl = front_default;
    const nameP = name;
    const heightP = height;
    const weightP = weight;
    const typeP = types.map(t => t.type.name).join(', ');
    const pokemonId = id;
    console.log(pokemon);

    domElements.pokemonImg.src = imageUrl;
    domElements.pokemonName.textContent = nameP;
    domElements.pokemonHeight.textContent = `${heightP} m`;
    domElements.pokemonWeight.textContent = ` ${weightP} kg`;
    domElements.pokemonType.textContent = `${typeP}`;
    domElements.pokemonId.textContent = `${pokemonId}`;

    domElements.pokemonInfoCard.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');
  } catch (error) {
    console.log(error);
  }
};
