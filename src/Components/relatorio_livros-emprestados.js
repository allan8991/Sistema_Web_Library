import React from 'react';
import CabecalhoVoltar from './CorpoPagina/cabecalho-voltar';
import Rodape from './CorpoPagina/rodape';
import info_img from './IMG/information-color.svg';

const RelatorioLivrosEmprestado = () => {
    return (
        <div class="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Relatório de Livros Emprestados" />

            <section class="row justify-content-center align-items-start flex-grow-1">
                <div class="row col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 justify-content-center p-0">

                    <div class="w-100 conteudo mx-0">
                        <div class="d-flex w-100 justify-content-center m-0">
                            <form class="px-3 pt-3 justify-content-center" action="#" method="">
                                <h2 class="h4 mb-0">Filtro:</h2>
                                <input class="input_login d-block w-100" type="text" name="titulo" placeholder="Título do Livro" />
                                <input class="input_login d-block d-sm-inline" type="date" name="data-inicio" placeholder="Data Início" />
                                <input class="input_login d-block d-sm-inline" type="date" name="data-fim" placeholder="Data Fim" />
                                <input class="btn btn-block align-self-center d-block" id="enviar" type="submit" value="Filtrar" />
                            </form>
                        </div>

                        <div class="table-responsive-sm">
                            <table class="table table-hover table-sm table-striped">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Título</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Data Emp.</th>
                                        <th scope="col">Data Dev.</th>
                                        <th scope="col">Info.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Calculo Vol.1</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" class="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Calculo Vol.1</td>
                                        <td>Maria Clara da Silva</td>
                                        <td>10/03/2020</td>
                                        <td>15/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" class="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Use a Cabeça Java</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" class="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr><tr>
                                        <th scope="row">4</th>
                                        <td>Calculo Vol.1</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" class="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Calculo Vol.1</td>
                                        <td>Maria Clara da Silva</td>
                                        <td>10/03/2020</td>
                                        <td>15/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" class="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Use a Cabeça Java</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" class="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default RelatorioLivrosEmprestado;