function RenderizarTabela() {

    const areaTabela = document.querySelector("#areaTabela");

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

    tarefas.forEach((item, indice) => {

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

    RenderizarTabela();

});


$(document).on("click", ".btnExcluir", function () {

    let indice = $(this).data("indice");

    Remover(indice);

    RenderizarTabela();

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