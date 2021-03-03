import React from 'react';
import btnVoltar from './IMG/left-arrow-white.svg';

const RegistrarEmprestimo = () => {
    return (
        <div classname="container-fluid d-flex flex-column">
            <header classname="row justify-content-start align-items-center cabecalho text-white">
                <img classname="mr-2 ml-3 h6" src={btnVoltar} alt="Seta representando voltar" />
                <span classname="h3">Registrar Empréstimo</span>
            </header>

            <section classname="row justify-content-center align-items-start flex-grow-1">
                <div classname="row conteudo col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 w-25 p-0">

                    <form classname="row mx-4 justify-content-center w-100 mt-5 p-0" action="#" method="">

                        <div classname="input-group">
                            <input type="text" classname="input_login form-control m-0" name="matricula" id="matricula" placeholder="Matrícula" />
                            <button classname="btn btn-outline-primary " type="button" id="consultar-matricula">Consultar</button>
                        </div>
                    </form>

                    <form classname="row mx-4 justify-content-center w-100" action="#" method="">
                        <div classname="input-group w-100">
                            <input type="text" classname="input_login form-control my-2" name="isbn" placeholder="ISBN" />
                            <button classname="btn btn-outline-primary my-2" type="button" id="consultar-isbn">Consultar</button>
                        </div>
                    </form>


                    <form classname="row mx-4 justify-content-center" action="#" method="POST">
                        <input classname="input_login w-100 my-2 form-control" type="text" name="nome-usuario" placeholder="Nome" disabled />
                        <input classname="input_login w-100 my-2 form-control" type="email" name="email-usuario" placeholder="E-mail" disabled />
                        <input classname="input_login w-100 my-2 form-control" type="text" name="titulo-livro" placeholder="Título" disabled />
                        <input classname="input_login w-100 my-2 form-control" type="text" name="autor-livro" placeholder="Autor" disabled />

                        <input classname="my-5 btn" id="confirmar" type="submit" value="Registrar Empréstimo" />
                    </form>

                </div>
            </section>
        </div>
    );
}
export default RegistrarEmprestimo;