import { CATCH_POKEMON } from './caughtPokemon.actions';
import caughtPokemonReducer from './caughtPokemon.reducers';

describe('caughtPokemon.reducers', () => {
  it('should add caught pokemon to state', () => {
    const initialState = ['pokemon 1'];
    const result = caughtPokemonReducer(initialState, {
      type: CATCH_POKEMON,
      payload: 'pokemon 2',
    });
    expect(result).toEqual(['pokemon 1', 'pokemon 2']);
  });
});
