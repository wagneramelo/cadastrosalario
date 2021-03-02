import React from 'react';
import Colaborador from '../classes/Colaborador';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addColaborador } from '../actions';

export interface ColaboradorState {
  colaboradores: Colaborador[],
  mensagem: string
}

export const FormColaborador: React.FC = () =>{

    const { register, handleSubmit } = useForm<Colaborador>();
    const dispatch = useDispatch();

    //método executado no submit do formulário
    const onSubmit = (data: Colaborador) => {
      const colaborador = new Colaborador(data.nome,data.cpf,data.salarioBruto,data.descontoPrevidencia,data.numeroDependentes);
      dispatch(addColaborador(colaborador));
    };

    return (
      <>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <label>
          Nome:
          <input
            name="nome"
            type="text"
            className = "form-control"
            ref = {register}/>
        </label>
        <br />
        <label>
          CPF:
          <input
            name="cpf"
            type="text"
            className = "form-control"
            ref = {register}/>
        </label>
        <br />
        <label>
          Salário Bruto:
          <input
            name="salarioBruto"
            type="number"
            className = "form-control"
            ref = {register}/>
        </label>
        <br />
        <label>
          Desconto da Previdência:
          <input
            name="descontoPrevidencia"
            type="number"
            className = "form-control"
            ref = {register}/>
        </label>
        <br />
        <label>
          Número de Dependentes:
          <input
            name="numeroDependentes"
            type="number"
            className = "form-control"
            ref = {register}/>
        </label>
        <br />
        <input
          type="submit"
          className = "btn btn-success"
          value="Cadastrar Colaborador"/>
      </form>
      </>
    )
}