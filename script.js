 let tarefas = [];
function Adicionar(){
    var tituloid = document.getElementById("titulo");
    var descricaoid = document.getElementById("descricao");
    var prioridadeid = document.getElementById("prioridade");
    var dataLimiteid = document.getElementById("dataLimite");
    var statusid = document.getElementById("status");


    if (tituloid.value != "" && prioridadeid.value != "" && dataLimiteid.value != "" && statusid.value != "") {
        alert('Os dados foram encaminhados com sucesso');
    }else{
         alert('Cadastre todos os dados Obrigatorios');
    }
    novaTarefa = {
        titulo : tituloid.value,
        descricao : descricaoid.value,
        prioridade : prioridadeid.value,
        dataLimite : dataLimiteid.value,
        status : statusid.value
}
tarefas.push(novaTarefa)
const tbody = document.querySelector("#areaTabela");
    
    // Limpa a tabela
    tbody.innerHTML = "";
 
    // Adiciona linhas dinamicamente
    tarefas.forEach(item => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.titulo}</td><td>${item.descricao}</td><td>${item.prioridade}</td><td>${item.dataLimite}</td><td>${item.status}</td>`;
        tbody.appendChild(tr);
    });
}


    
