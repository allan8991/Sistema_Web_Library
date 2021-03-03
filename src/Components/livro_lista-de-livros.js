import React from 'react';
import btnVoltar from './IMG/left-arrow-white.svg';
import Rodape from './CorpoPagina/rodape';

const LivroListaDeLivros = () => {
    return (

        <div className="container-fluid">
            <header className="row cabeçalho_lista_livro  justify-content-start align-items-center cabecalho_email">
                <img className="mr-2 ml-3 text-white h6" src={btnVoltar} alt="voltar" />
                <span className="text-white h3" >Lista de Livros</span>
            </header>

            <section className=" corpo_listar_livro   row  justify-content-center  corpo_login  ">
                <form className="form_listar_livro formulario_email  col-12 col-sm-10 col-md-7 col-lg-7 col-xl-5 form" action="#" method="POST">


                </form>
            </section>

            <Rodape />
        </div>

    );
}
export default LivroListaDeLivros;