import React, { Fragment } from 'react';
import btnVoltar from './IMG/left-arrow-white.svg';
import Rodape from './CorpoPagina/rodape';

const RenovarEmprestimo = () => {
    return (
        <div classname="container-fluid">
            <header classname="row justify-content-start align-items-center cabecalho text-white">
                <img classname="mr-2 ml-3 h6" src={btnVoltar} alt="Seta representando voltar" />
                <span classname="h3">Renovar Empréstimo</span>
            </header>

            <section classname="row justify-content-center corpo_login mt-5">
                <form classname="formulario_email col-12 col-sm-10 col-md-7 col-lg-7 col-xl-5 h-100 w-25" action="#" method="POST">
                    <h3 classname="row justify-content-center text-center titulo_email h-25 mb-0 mt-3">Ensira a Matrícula do Aluno</h3>

                    <input autofocus classname="input_login w-100" type="text" name="matricula" placeholder="Matrícula" />
                    <input classname="btn btn-block align-self-center" id="pesq" type="submit" value="Pesquisar" />
                </form>
            </section>

            <Rodape />
        </div>
    );
}
export default RenovarEmprestimo;