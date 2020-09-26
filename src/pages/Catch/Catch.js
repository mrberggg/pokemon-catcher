import { IconButton, LinearProgress, makeStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PokemonList from '../../components/PokemonList/PokemonList';
import pokeApi from '../../services/pokeApi';
import { CATCH_POKEMON } from '../../state/caughtPokemon/caughtPokemon.actions';
import CatchButton from './CatchButton';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'white',
  },
  selectPokemonButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
}));

function Catch({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState();
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    const limit = 10;
    const pokemonCount = 1050 - limit; // value from count field in https://pokeapi.co/api/v2/pokemon
    const randomOffset = Math.floor(Math.random() * pokemonCount);
    setIsLoading(true);
    pokeApi.getPokemon(randomOffset, limit).then((list) => {
      setPokemonList(list);
      setIsLoading(false);
    });
  }, []);
  function save(pokemon) {
    dispatch({ type: CATCH_POKEMON, payload: pokemon });
    // Redirect home after saving
    history.push('/');
  }
  return (
    <>
      <h1>Catch a Pokemon</h1>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <PokemonList
          pokemonList={pokemonList}
          selectedPokemon={selectedPokemon}
          actionIcon={({ pokemon, isSelected }) => (
            <>
              {isSelected ? null : (
                <IconButton
                  className={classes.icon}
                  onClick={() => setSelectedPokemon(pokemon)}
                >
                  <AddIcon />
                </IconButton>
              )}
            </>
          )}
        ></PokemonList>
      )}
      {selectedPokemon ? (
        <>
          <h2>{selectedPokemon.name}'s Abilities</h2>
          <ul>
            {selectedPokemon.abilities.map((a) => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
          <div className={classes.selectPokemonButton}>
            <CatchButton selectedPokemon={selectedPokemon} save={save} />
          </div>
        </>
      ) : null}
    </>
  );
}

export default connect()(Catch);
