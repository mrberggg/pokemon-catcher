import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Info as InfoIcon } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

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
}));

function CaughtList({ pokemonList }) {
  const classes = useStyles();
  return (
    <GridList cellHeight={160}>
      {pokemonList.map((pokemon) => (
        <GridListTile key={pokemon.id} className={classNames(classes.gridTile)}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <GridListTileBar
            title={pokemon.displayName}
            actionIcon={
              <IconButton
                className={classes.icon}
                component={RouterLink}
                to={`details/${pokemon.id}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default CaughtList;
