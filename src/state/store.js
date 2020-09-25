import { combineReducers, createStore } from 'redux';
import caughtPokemon from './caughtPokemon/caughtPokemon.reducers';

const rootReducer = combineReducers({ caughtPokemon });

export default createStore(rootReducer);
