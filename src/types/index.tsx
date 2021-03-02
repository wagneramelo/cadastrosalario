import  Colaborador from '../classes/Colaborador';

export interface ColaboradorState {
    colaboradores: Colaborador[],
    mensagem: string
}

export interface ActionRedux {
    type: string;
    data: Colaborador;
}