import { CATCH_POKEMON } from './caughtPokemon.actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case CATCH_POKEMON: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
