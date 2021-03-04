function carregar() {
    document.querySelector("header img").addEventListener("click", () => {
        document.getElementById("tela_fundo").style.backgroundColor = "#436D7C";
        document.getElementById("tela_fundo").style.display = "block";
        document.querySelector("#tela_fundo").style.height = "400px";
        document.querySelector("#tela_fundo").style.width = "400px";
        document.getElementById("tela_fundo").style.zIndex = "4";
        document.getElementById("tela_fundo").style.border = "10px solid white";
        document.getElementById("tela_fundo").style.borderRadius = "10px";
        document.getElementById("tela_fundo").style.position = "fixed";
        document.getElementById("tela_fundo").style.top = "0px";
        document.getElementById("tela_fundo").style.left = "4px";
        document.getElementById("visualizar_perfil").style.marginTop = "110px";
        document.querySelector("#tela_sair").style.marginLe = "350px";
    });

    //document.querySelector("#tela_sair").addEventListener("click", () => {
    //   document.getElementById("tela_fundo").style.display = "none";
    //});
}
window.addEventListener("load", carregar);
