import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import pokeApi from '../../services/pokeApi';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  gridTile: {
    maxWidth: '200px',
  },
  icon: {
    color: 'white',
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.dark}`,
  },
}));

function CatchList({ pokemonSelectedCb }) {
  const classes = useStyles();
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState();
  useEffect(() => {
    pokeApi.getPokemon().then((list) => {
      setPokemonList(list);
    });
  }, []);
  function clickOnPokemon(pokemon) {
    setSelectedPokemonId(pokemon.id);
    pokemonSelectedCb(pokemon);
  }
  return (
    <GridList cellHeight={160}>
      {pokemonList.map((pokemon) => {
        const isSelected = selectedPokemonId === pokemon.id;
        return (
          <GridListTile
            key={pokemon.id}
            className={classNames(classes.gridTile, {
              [`${classes.selected}`]: isSelected,
            })}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <GridListTileBar
              title={pokemon.name}
              actionIcon={
                isSelected ? null : (
                  <IconButton
                    className={classes.icon}
                    onClick={() => clickOnPokemon(pokemon)}
                  >
                    <AddIcon />
                  </IconButton>
                )
              }
            />
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default CatchList;
