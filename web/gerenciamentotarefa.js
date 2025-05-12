// Abre o modal para adicionar tarefa
document.getElementById("btnAdicionarTarefa").addEventListener("click", abrirModalTarefa);

// Função para abrir o modal
function abrirModalTarefa() {
    document.getElementById("modalTarefa").style.display = "flex";
}

// Função para fechar o modal
function fecharModalTarefa() {
    document.getElementById("modalTarefa").style.display = "none";
}

// Adiciona a tarefa na lista ao enviar o formulário
document.getElementById("formTarefa").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const descricao = document.getElementById("descricaoTarefa").value;
    const setor = document.getElementById("setorTarefa").value;
    const prioridade = document.getElementById("prioridadeTarefa").value;

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>#</td>
        <td>${descricao}</td>
        <td>${setor}</td>
        <td>${prioridade}</td>
        <td>Em andamento</td>
        <td>
            <button class="btn">Editar</button>
            <button class="btn" style="background-color: #f44336;">Excluir</button>
        </td>
    `;
    document.getElementById("listaTarefas").appendChild(tr);
    fecharModalTarefa();
});
