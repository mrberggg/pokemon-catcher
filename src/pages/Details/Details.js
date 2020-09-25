import { LinearProgress, makeStyles } from '@material-ui/core';
import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pokeApi from '../../services/pokeApi';

const useStyles = makeStyles({
  sprite: {
    height: '50px',
    width: 'auto',
    position: 'relative',
    top: '12px',
  },
});

function Details() {
  const classes = useStyles();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    pokeApi.getPokemonDetails(id).then((res) => {
      setPokemonDetails(res);
      setIsLoading(false);
    });
  }, [id]);
  if (isLoading) {
    return <LinearProgress />;
  }
  return (
    <>
      <h1>
        {capitalize(pokemonDetails.name)}
        <img
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
          className={classes.sprite}
        />
      </h1>
      <h2>Details</h2>
      <ul>
        <li>
          Abilities: {pokemonDetails.abilities.map((a) => a.ability.name)}
        </li>
        <li>Base Experience: {pokemonDetails.base_experience}</li>
        <li>Height: {pokemonDetails.height}</li>
        <li>Weight: {pokemonDetails.weight}</li>
      </ul>
    </>
  );
}

export default Details;
