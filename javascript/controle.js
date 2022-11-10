let contador = 0;
let input = document.getElementById('inputTarefa');
let btnadd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    // pega o valor digitado no input
    let valorInput = input.value;
    //se na for vasio, nem nulo, nem indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div id="icone_${contador}" onclick="marcarTarefa(${contador})" class="item-icone">
            <i class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
           ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>deletar</button>
        </div>
    </div>`;
        // adicionar novo item
        main.innerHTML += novoItem;

        //zerar o campo input
        input.value = "";
        input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);
    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
        

    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnadd.click();
    }
})