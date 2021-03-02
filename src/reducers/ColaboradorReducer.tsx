import  Colaborador from '../classes/Colaborador';
import { ADD_COLABORADOR, DELETE_COLABORADOR, UPDATE_COLABORADOR } from '../actions/actionTypes';

//interfaces para tipagem dos Reducers
export interface ColaboradorState {
    colaboradores: Colaborador[],
    mensagem: string
}

export interface AddActionRedux {
    type: string;
    data: Colaborador;
}

const initialState : ColaboradorState = {
    colaboradores: [],
    mensagem: ""
    
};

//reducers de adição, exclusão e update
export const colaboradorReducer = (state = initialState, action: AddActionRedux) : ColaboradorState => {
switch (action.type) {
    case ADD_COLABORADOR:
        return {
            ...state,
           colaboradores: [...state.colaboradores,action.data],
           mensagem: "Colaborador adicionado com sucesso"
        };
    case DELETE_COLABORADOR:
        return{
            colaboradores: state.colaboradores.filter((colaborador) => colaborador.id !== action.data.id),
            mensagem: "Colaborador deletado com sucesso"
        }
    case UPDATE_COLABORADOR:
        const newColaborador = new Colaborador('action.data.nome','action.data.cpf',2,3,4);
        //const newColaborador = new Colaborador(action.data.nome,action.data.cpf,action.data.salarioBruto,action.data.descontoPrevidencia,action.data.numeroDependentes);
        newColaborador.id = action.data.id;
        console.log(newColaborador);
        return{
            colaboradores: state.colaboradores.map((colaborador) => {
                console.log(colaborador.id + ' - ' + action.data.id)
                if(colaborador.id === action.data.id){
                    console.log("entrou dentro do update")
                   return {...colaborador,
                    nome: newColaborador.nome,
                    cpf: newColaborador.cpf,
                    salarioBase: newColaborador.salarioBase,
                    descontoPrevidencia: newColaborador.descontoPrevidencia,
                    numeroDependentes: newColaborador.numeroDependentes,
                    descontoIRPF: newColaborador.descontoIRPF
                   }
                }else{
                    return colaborador;
                }
            }),
            mensagem: "Colaborador atualizado com sucesso"
        }
    default:
        return state;
}
};