import React, { Fragment } from 'react';
import CapaLivro from './IMG/capa-livro-exemplo.svg';
import btnVoltar from './IMG/left-arrow-white.svg';
import Rodape from './CorpoPagina/rodape';



const ConsultarEmprestimo = () => {
    return (
        <div className="container-fluid d-flex flex-column">

            <header className="row justify-content-start align-items-center cabecalho text-white">
                <img className="mr-2 ml-3 h6" src={btnVoltar} alt="Seta representando voltar" />
                <span className="h3">Consultar Empréstimo</span>
            </header>

            <section className="row justify-content-center flex-grow-1">
                <div className="row col-12 col-sm-12 col-md-8 col-lg-7 col-xl-6 p-5 align-items-start conteudo">
                    <table className="table table-bordered bg-white">
                        <tr>
                            <th scope="row">Nome:</th>
                            <td>Rodrio da Silva Barreto</td>
                        </tr>
                        <tr>
                            <th scope="row">Matrícula:</th>
                            <td>19654684ADM</td>
                        </tr>
                        <tr>
                            <th scope="row">E-mail:</th>
                            <td>exemplo@email.com</td>
                        </tr>
                        <tr>
                            <th scope="row">Telefone:</th>
                            <td>(21) 93939-9933</td>
                        </tr>
                    </table>


                    <div className="align-items-start mt-4 w-100">
                        <h3 className="text-center">Livros:</h3>
                        <div className="d-flex flex-column flex-sm-row justify-content-center livros">
                            <a href="emprestimo_renovar-emprestimo-confirmacao.html" className="d-flex flex-column w-100 p-2 m-3">
                                <img src={CapaLivro} alt="Livro fechado" className="size-book-10" /><br />
                                <h4 className="text-center">Cálculo Vol.1</h4>
                            </a>

                            <a href="emprestimo_renovar-emprestimo-confirmacao.html" className="d-flex flex-column w-100 p-2 m-3">
                                <img src={CapaLivro} alt="Livro fechado" className="size-book-10" /><br />
                                <h4 className="text-center">Algebra Linear</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}

export default ConsultarEmprestimo;