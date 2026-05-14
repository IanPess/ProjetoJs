let tarefas = [];
let editando = null;
function Adicionar(){
    var tituloid = document.getElementById("titulo");
    var descricaoid = document.getElementById("descricao");
    var prioridadeid = document.getElementById("prioridade");
    var dataLimiteid = document.getElementById("dataLimite");
    var statusid = document.getElementById("status");
    var observacao = document.getElementById("Obs");

    let novaTarefa = {
        titulo : tituloid.value,
        descricao : descricaoid.value,
        prioridade : prioridadeid.value,
        dataLimite : dataLimiteid.value,
        status : statusid.value,
        observacao: observacao ? observacao.value : ""
}
if (tituloid.value != "" && prioridadeid.value != "" && dataLimiteid.value != "" && statusid.value != "") {
        if(editando == null){
        tarefas.push(novaTarefa);
        SalvarLocalStorage();
        LimparFormulario();
    }else{
        tarefas[editando] = novaTarefa;
        editando = null;
        SalvarLocalStorage();
        LimparFormulario();
    }
    }else{
         alert('Cadastre todos os dados Obrigatorios');
    }
    
    

}
function Remover(indice){
    tarefas.splice(indice,1)
    SalvarLocalStorage();
}
function LimparFormulario(){
   document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("prioridade").value = "";
    document.getElementById("dataLimite").value = "";
    document.getElementById("status").value = "";
   let obs = document.getElementById("Obs");
   if(obs != null){
    obs.value = "";
   }
    editando = null
}

function SalvarLocalStorage(){
    localStorage.setItem(
    "tarefas",
    JSON.stringify(tarefas)
)}
function CarregarLocalStorage() {

    let dados = localStorage.getItem("tarefas");

    if (dados) {
        tarefas = JSON.parse(dados);
    } else {
        tarefas = [];
    }

    RenderizarTabela(tarefas);
}
window.addEventListener("DOMContentLoaded", CarregarLocalStorage);



    
