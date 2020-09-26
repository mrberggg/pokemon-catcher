import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

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
  selected: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.dark}`,
  },
}));

function PokemonList({ pokemonList, selectedPokemon, actionIcon = () => {} }) {
  const classes = useStyles();
  return (
    <GridList cellHeight={160}>
      {pokemonList.map((pokemon) => {
        const isSelected = selectedPokemon?.id === pokemon.id;
        return (
          <GridListTile
            key={pokemon.id}
            className={classNames(classes.gridTile, {
              [`${classes.selected}`]: isSelected,
            })}
            data-testid="grid-list-tile"
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <GridListTileBar
              title={pokemon.name}
              actionIcon={actionIcon({ pokemon, isSelected })}
              className={classes.icon}
              data-testid="grid-list-tile-bar"
            />
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default PokemonList;
