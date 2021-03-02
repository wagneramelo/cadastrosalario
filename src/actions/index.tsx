import Colaborador from "../classes/Colaborador";
import { ADD_COLABORADOR } from './actionTypes';
import { DELETE_COLABORADOR } from './actionTypes';
import { UPDATE_COLABORADOR } from './actionTypes';
 

//Actions do Redux
export const addColaborador = (colaborador : Colaborador) => ({
    type: ADD_COLABORADOR,
    data: colaborador
});

export const deleteColaborador = (colaborador : Colaborador) => ({
    type: DELETE_COLABORADOR,
    data: colaborador
});

export const updateColaborador = (colaborador : Colaborador) => ({
    type: UPDATE_COLABORADOR,
    data: colaborador
});