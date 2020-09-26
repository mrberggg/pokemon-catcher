import { Button, IconButton, makeStyles } from '@material-ui/core';
import { Info as InfoIcon } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PokemonList from '../../components/PokemonList/PokemonList';

const useStyles = makeStyles({
  catchButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
  },
});

function Home({ caughtPokemon }) {
  const classes = useStyles();
  return (
    <div className="home">
      <h1>Pokemon Catcher</h1>
      <div className={classes.catchButton}>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/catch"
        >
          Catch pokemon
        </Button>
      </div>
      <div>
        <PokemonList
          pokemonList={caughtPokemon}
          actionIcon={({ pokemon }) => (
            <IconButton
              className={classes.icon}
              component={RouterLink}
              to={`details/${pokemon.id}`}
            >
              <InfoIcon />
            </IconButton>
          )}
        />
      </div>
    </div>
  );
}

export default connect((state) => state)(Home);
