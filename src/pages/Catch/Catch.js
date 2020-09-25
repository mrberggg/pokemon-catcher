import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import CatchButton from './CatchButton';
import CatchList from './CatchList';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { CATCH_POKEMON } from '../../state/caughtPokemon/caughtPokemon.actions';

const useStyles = makeStyles((theme) => ({
  selectPokemonButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
}));

function Catch({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();
  const [selectedPokemon, setSelectedPokemon] = useState();

  function pokemonSelectedCb(pokemon) {
    setSelectedPokemon(pokemon);
  }
  function save(pokemon) {
    dispatch({ type: CATCH_POKEMON, payload: pokemon });
    // Redirect home after saving
    history.push('/');
  }
  return (
    <>
      <h1>Catch a Pokemon</h1>
      <CatchList pokemonSelectedCb={pokemonSelectedCb} />
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
