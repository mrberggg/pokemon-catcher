import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import CatchButton from './CatchButton';
import CatchList from './CatchList';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  selectPokemonButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
}));

function Catch() {
  const classes = useStyles();
  const history = useHistory();
  const [selectedPokemon, setSelectedPokemon] = useState();

  function pokemonSelectedCb(pokemon) {
    setSelectedPokemon(pokemon);
  }
  function save(pokemon) {
    console.log('save', pokemon);
    // Redirect home after saving
    history.push('/');
  }
  return (
    <>
      <h1>Catch a Pokemon</h1>
      <CatchList pokemonSelectedCb={pokemonSelectedCb} />
      {selectedPokemon ? (
        <div className={classes.selectPokemonButton}>
          <CatchButton selectedPokemon={selectedPokemon} save={save} />
        </div>
      ) : null}
    </>
  );
}

export default Catch;
