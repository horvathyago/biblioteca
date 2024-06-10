const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
      sidebarToggle2 = body.querySelector(".sidebar-toggle2");

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
});

sidebarToggle2.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
});
//...

let alunoCount = 0; // Contador para contar os alunos

//...

const updateAlunoCount = () => {
    document.getElementById('number-alunos').textContent = alunoCount;
}

//...

const createAluno = (aluno) => {
    const dbAluno = getLocalStorage();
    dbAluno.push(aluno);
    setLocalStorage(dbAluno);
    alunoCount++; // Incrementar a contagem ao adicionar
    updateAlunoCount(); // Atualizar a contagem no dashboard
    updateTable();
};

const deleteAluno = (index) => {
    const dbAluno = readAluno();
    dbAluno.splice(index, 1);
    setLocalStorage(dbAluno);
    alunoCount--; // Decrementar a contagem ao deletar
    updateAlunoCount(); // Atualizar a contagem no dashboard
    updateTable();
};

//...

// Inicializar a contagem ao carregar a página
alunoCount = readAluno().length;
updateAlunoCount(); // Atualizar a contagem no dashboard

//...


