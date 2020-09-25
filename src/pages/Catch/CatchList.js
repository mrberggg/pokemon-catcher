import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  LinearProgress,
  makeStyles,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import pokeApi from '../../services/pokeApi';

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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPokemonId, setSelectedPokemonId] = useState();
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
  function clickOnPokemon(pokemon) {
    setSelectedPokemonId(pokemon.id);
    pokemonSelectedCb(pokemon);
  }
  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
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
      )}
    </>
  );
}

export default CatchList;
