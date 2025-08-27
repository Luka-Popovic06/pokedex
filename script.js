'use strict';
import { domElements } from './dom.js';
import { pokemonNameOrId } from './input.js';
import { getPokemon, getPokemonByType } from './pokemonCreator.js';

domElements.main.addEventListener('click', function (e) {
  if (e.target.closest('.overlay')) {
    domElements.pokemonInfoCard.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
  } else if (e.target.closest('.type')) {
    const typePokemon = e.target.closest('.type');
    console.log(typePokemon);
    getPokemonByType(`${typePokemon.dataset.type}`);
  }
});

domElements.form.addEventListener('submit', function (e) {
  e.preventDefault();
  getPokemon(pokemonNameOrId);
});
