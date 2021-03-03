import React from 'react';
import btnVoltar from './IMG/left-arrow-white.svg';
import btnLogoRodape from './IMG/logo-University-Library.svg';

const LivroListaDeLivros2 = () => {
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

            <footer className="row rodape justify-content-center text-white">
                <div className="d-flex p-3 align-items-center">
                    <img src={btnLogoRodape} alt="Logo da University Library" />
                    <h6 className="p-1 font-weight-bold">University Library (2021)</h6>
                </div>
            </footer>
        </div>



    );
}
export default LivroListaDeLivros2;