function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("Favor, preencha todos os campos")
    } else {
        window.location.href = 'cadastro.html';
    }
}

var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById('nomeUser').value = "";
        criaLista();
    } else {
        alert("Usuário, favor preencher o campo nome");
    }

}
function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar </button> <button class ='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(i - 1, 1);
}

function excluir(i) {
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}