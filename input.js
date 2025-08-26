import { domElements } from './dom.js';
export let pokemonNameOrId;
domElements.input.addEventListener('input', function (e) {
  pokemonNameOrId = e.target.value.toLowerCase();
});
