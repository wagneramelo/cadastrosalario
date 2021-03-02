import { createStore } from 'redux';
import { colaboradorReducer } from '../reducers/ColaboradorReducer';

export const ColaboradorStore = createStore(colaboradorReducer);