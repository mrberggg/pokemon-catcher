import { Link as RouterLink } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import CaughtList from './CaughtList';

const useStyles = makeStyles({
  catchButton: {
    display: 'flex',
    justifyContent: 'center',
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
        <CaughtList pokemonList={caughtPokemon} />
      </div>
    </div>
  );
}

export default connect((state) => state)(Home);
