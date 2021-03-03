import React from 'react';
import btnProFileUserWhite from './IMG/profile-user-white.svg';
import btnLogoRodape from './IMG/logo-University-Library.svg';
import btnManterEmprestimos from './IMG/Botoes/btn_ManterEmprestimos.jpg';
import btnRelatorios from './IMG/Botoes/btn_Relatorios.jpg';
import btnLivros from './IMG/Botoes/btn_Livros.jpg';
import btnCadastrarUsuario from './IMG/Botoes/btn_CadastrarUsuario.jpg';
import '../pasta_JS/padrao_JS';




const MenuInicialBibliotecario = () => {
    return (
        <div className="container-fluid ">
            <div className="text-white font-weight-bold align-items-center justify-content-center ajuste5" id="tela_fundo" >
               
            </div>

            <header className="row justify-content-start align-items-center cabecalho text-white">
                <img src={btnProFileUserWhite} alt="Icone do usuário" className="btn mr-3 ml-3" />
                <h1 className="h2 font-weight-bold text-center">Bem vindo, </h1>
            </header>

            <section className="row sessao2 justify-content-center m-1">
                <div className="d-flex flex-column">
                    <a href="emprestimo_manter-emprestimo.html"><img src={btnManterEmprestimos} alt="imagem nao carregou" className="img-thumbnail mt-0 text-white" /></a>
                    <a href="relatorios.html"><img src={btnRelatorios} alt="imagem nao carregou" className="img-thumbnail text-white" /></a>
                    <a href="livro_lista-de-livros2.html"><img src={btnManterEmprestimos} alt="imagem nao carregou" className="img-thumbnail text-white" /></a>
                    <a href="cadastrar-usuario.html"><img src={btnCadastrarUsuario} alt="imagem nao carregou" className="img-thumbnail text-white" /></a>
                </div>
            </section>

            <footer className="row rodape justify-content-center text-white">
                <div className="d-flex p-3 align-items-center">
                    <img src={ btnLogoRodape } alt="Logo da University Library" />
                    <h6 className="p-1 font-weight-bold">University Library (2021)</h6>
                </div>
            </footer>
        </div>







    );
}
export default MenuInicialBibliotecario;