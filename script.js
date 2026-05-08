let tarefas = [];
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
        alert('Os dados foram encaminhados com sucesso');
        tarefas.push(novaTarefa)
    }else{
         alert('Cadastre todos os dados Obrigatorios');
    }

}
function Remover(indice){
    tarefas.splice(indice,1)
}


    
