'use strict';
import { domElements } from './dom.js';
import { getPokemon } from './pokemonCreator.js';

domElements.main.addEventListener('click', function (e) {
  if (e.target.closest('.overlay')) {
    domElements.pokemonInfoCard.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
  }
});

domElements.form.addEventListener('submit', function (e) {
  e.preventDefault();
  getPokemon();
});
