const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();

})

function adicionarLinha (){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumTel = document.getElementById('num-contato');
    if(nomes.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(parseFloat(inputNumTel.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumTel.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumTel.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
