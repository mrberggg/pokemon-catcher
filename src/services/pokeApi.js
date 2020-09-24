import axios from 'axios';

async function getPokemonDetails(pokemon) {
  const res = await axios.get(pokemon.url);
  if (res.status !== 200) {
    throw new Error(`Error fetching pokemon details for ${pokemon.name}`);
  }
  return res.data;
}

async function getPokemon(offset = 10, limit = 10) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  if (res.status !== 200) {
    throw new Error('Error fetching pokemon records');
  }
  const list = res.data.results;
  const detailsPromise = list.map(getPokemonDetails);
  const details = await Promise.all(detailsPromise);
  return details;
}

export default {
  getPokemon,
};
