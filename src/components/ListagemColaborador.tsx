import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Colaborador from '../classes/Colaborador';
import { deleteColaborador, updateColaborador } from '../actions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export interface ColaboradorState {
    colaboradores: Colaborador[],
    mensagem: string
}

export const ListagemColaborador: React.FC = () =>{

    const colaboradores = useSelector( (data: ColaboradorState) => data.colaboradores);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [editColaborador, setEditColaborador] = useState(new Colaborador("","",0,0,0));
    const { register, handleSubmit } = useForm<Colaborador>();

    const onSubmit = (data: Colaborador) => {
        const colaborador = new Colaborador(data.nome,data.cpf,data.salarioBruto,data.descontoPrevidencia,data.numeroDependentes);
         dispatch(updateColaborador(colaborador));
         handleClose();
    };
    //função para convert number em currency
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    //método responsável pelo fechamento do Modal
    const handleClose = () => setShow(false);

    //método responsável pela abertura do Modal
    const handleShow = (colaborador: Colaborador) => {
        setEditColaborador(colaborador);
        setShow(true);  
    }
    
    //método responsável pela atualização e envio dos dados novos pra Store do Redux
    const handleUpdate = (colaborador: Colaborador) => {
         setEditColaborador(colaborador);
         const newColaborador = new Colaborador(colaborador.nome,colaborador.cpf,colaborador.salarioBruto,colaborador.descontoPrevidencia,colaborador.numeroDependentes);
         newColaborador.id = editColaborador.id;
         console.log(1);
         handleSubmit(onSubmit);
         handleClose();
     } 


     //método responsável pela exclusão dos dados na tabela
    const handleDelete = (colaborador: Colaborador) => {
        dispatch(deleteColaborador(colaborador));
    }

    return (
        <>  
       <table>
           <thead>
           {colaboradores.length > 0 ? <tr>
               <th>Nome</th>
               <th>CPF</th>
               <th>Salário</th>
               <th>Desconto da Previdência</th>
               <th>Dependentes</th>
               <th>Desconto IRPF</th>
               <th></th>
               <th></th>
           </tr> : null}
           </thead>
           <tbody>
           {colaboradores.map((colaborador) => 
           <tr key={colaborador.id}>
                <th>{colaborador.nome}</th>
                <th>{colaborador.cpf}</th>
                <th>{formatter.format(colaborador.salarioBase)}</th>
                <th>{colaborador.descontoPrevidencia}</th>
                <th>{colaborador.numeroDependentes}</th>
                <th>{formatter.format(colaborador.descontoIRPF)}</th>
                <th>
                <Button variant="primary" onClick={() => handleShow(colaborador)}>
                    Editar
                </Button>
                </th>
                {/* <th><button type="button" className="btn btn-primary" onClick={()=> handleUpdate(colaborador)}>Editar</button></th> */}
                <th><button type="button" className="btn btn-danger" onClick={()=> handleDelete(colaborador)}>Excluir</button></th>
            </tr>
            )}
           </tbody>
       </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Colaborador: {editColaborador.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
        <label>
          Nome:
          <input
            name="nome"
            type="text"
            className = "form-control"
            ref = {register}
            />
        </label>
        <br />
        <label>
          CPF:
          <input
            name="cpf"
            type="text"
            className = "form-control"
            ref = {register}
            />
        </label>
        <br />
        <label>
          Salário Bruto:
          <input
            name="salarioBruto"
            type="number"
            className = "form-control"
            ref = {register}
            />
        </label>
        <br />
        <label>
          Desconto da Previdência:
          <input
            name="descontoPrevidencia"
            type="number"
            className = "form-control"
            ref = {register}
            />
        </label>
        <br />
        <label>
          Número de Dependentes:
          <input
            name="numeroDependentes"
            type="number"
            className = "form-control"
            ref = {register}
            />
        </label>
        <br />
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={()=>handleUpdate(editColaborador)}>
          {/* <Button variant="primary" onClick={ () => handleUpdate(editColaborador)}> */}
            Editar Colaborador
          </Button>
        </Modal.Footer>
      </Modal>
       </>
    )
}