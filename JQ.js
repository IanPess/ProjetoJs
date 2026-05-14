function RenderizarTabela(lista) {

    const areaTabela = document.querySelector("#areaTabela");
    if (lista.length === 0) {
        areaTabela.innerHTML = `
            <div class="table-empty-state">
                <p>Nenhuma tarefa cadastrada.</p>
            </div>
        `;
        return;
    }
    areaTabela.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Prioridade</th>
                    <th>Data Limite</th>
                    <th>Status</th>
                    <th>Observações</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="tbodyTarefas"></tbody>
        </table>
    `;

    const tbody = document.querySelector("#tbodyTarefas");
    lista.forEach((item, indice) => {

        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.titulo}</td>
            <td>${item.descricao}</td>
            <td>${item.prioridade}</td>
            <td>${item.dataLimite}</td>
            <td>${item.status}</td>
            <td>${item.observacao}</td>
            <td>
                <button class="btnExcluir" data-indice="${indice}">
                    Excluir
                </button>
                <button class="btnEditar" data-indice="${indice}">
                    Editar
                </button>
            </td>
        `;

        tbody.appendChild(tr);

    });

}


$("#btnConcluir").on("click", function () {

    Adicionar();

    RenderizarTabela(tarefas);

});

$("form").on("submit", function (e) {
    e.preventDefault();
});
$(document).on("click", ".btnExcluir", function () {

    let indice = $(this).data("indice");

    Remover(indice);

    RenderizarTabela(tarefas);

});
$(document).on("dblclick", ".btnEditar", function () {

    let indice = $(this).data("indice");
    let tarefa = tarefas[indice];
    document.getElementById("titulo").value = tarefa.titulo;
    document.getElementById("descricao").value = tarefa.descricao;
    document.getElementById("prioridade").value = tarefa.prioridade;
    document.getElementById("dataLimite").value = tarefa.dataLimite;
    document.getElementById("status").value = tarefa.status;
    if(tarefa.observacao){
        RenderizarBotao()
        let Obs = document.getElementById("Obs");
        Obs.value = tarefa.observacao;
    }
    editando = indice;
  
});

function RenderizarBotao(){

    const areaOBS = document.querySelector("#areaObservacao");

    areaOBS.innerHTML = `
            <textarea id="Obs"></textarea>
    `;
}

$("#btnObservacao").on("click", function () {

    RenderizarBotao();

});
$("#btnFiltrar").on("click", function () {

    var filtroPrioridade = document.getElementById("filtroPrioridade").value;
    var filtroStatus = document.getElementById("filtroStatus").value;

    let tarefasFiltradas = tarefas.filter((item) => 
        (filtroStatus == "" || item.status == filtroStatus) &&
        (filtroPrioridade == "" || item.prioridade == filtroPrioridade)
    );

    RenderizarTabela(tarefasFiltradas);

});
