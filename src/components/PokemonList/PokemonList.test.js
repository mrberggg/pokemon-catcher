import { render, screen } from '@testing-library/react';
import React from 'react';
import PokemonList from './PokemonList';

function createTestPokemon(id) {
  return {
    id,
    name: `test ${id}`,
    sprites: {
      front_default: 'img.png',
    },
  };
}

describe('PokemonList', () => {
  it('should render pokemon in grid', () => {
    const pokemonList = [createTestPokemon(1), createTestPokemon(2)];
    render(<PokemonList pokemonList={pokemonList} />);
    const result = screen.queryAllByTestId('grid-list-tile');
    expect(result.length).toEqual(2);
  });

  it('should render action icon', () => {
    const pokemonList = [
      createTestPokemon(1),
      createTestPokemon(2),
      createTestPokemon(3),
    ];
    const actionIcon = () => <div data-testid="action-icon"></div>;
    render(<PokemonList pokemonList={pokemonList} actionIcon={actionIcon} />);
    const result = screen.queryAllByTestId('action-icon');
    expect(result.length).toEqual(3);
  });
});
