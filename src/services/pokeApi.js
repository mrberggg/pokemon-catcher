import axios from 'axios';
import { capitalize } from 'lodash';

function formatPokemonData(pokemon) {
  pokemon.name = capitalize(pokemon.name);
  return pokemon;
}

async function getPokemonDetailsByUrl(url) {
  const res = await axios.get(url);
  if (res.status !== 200) {
    throw new Error(`Error fetching pokemon details`);
  }
  return formatPokemonData(res.data);
}

async function getPokemonDetails(id) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (res.status !== 200) {
    throw new Error(`Error fetching pokemon details`);
  }
  return formatPokemonData(res.data);
}

async function getPokemon(offset = 10, limit = 10) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  if (res.status !== 200) {
    throw new Error('Error fetching pokemon records');
  }
  const list = res.data.results;
  const detailsPromise = list.map((pokemon) =>
    getPokemonDetailsByUrl(pokemon.url)
  );
  const details = await Promise.all(detailsPromise);
  return details;
}

export default {
  getPokemon,
  getPokemonDetails,
};
