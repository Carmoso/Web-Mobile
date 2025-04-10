document.addEventListener("DOMContentLoaded", () => {
    const inputTarefa = document.getElementById("novaTarefa");
    const botaoAdicionar = document.getElementById("adicionarTarefa");
    const listaTarefas = document.getElementById("listaTarefas");
    const listaMetas = document.getElementById("listaMetas");
    const botaoTema = document.getElementById("mudarTema");

    let jaMostrouParabens = false;

    botaoAdicionar.addEventListener("click", () => {
        const texto = inputTarefa.value.trim();
        if (texto !== "") {
            adicionarTarefa(texto);
            inputTarefa.value = "";
            jaMostrouParabens = false;
        }
    });

    function adicionarTarefa(texto) {
        const li = document.createElement("li");
        li.style.marginBottom = "8px";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";

        const span = document.createElement("span");
        span.textContent = texto;

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
                listaMetas.appendChild(li);
            } else {
                span.style.textDecoration = "none";
                listaTarefas.appendChild(li);
            }
            verificarConclusao();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        listaTarefas.appendChild(li);
    }

    function verificarConclusao() {
        const checkboxes = listaTarefas.querySelectorAll('input[type="checkbox"]');
        const todosMarcados = Array.from(checkboxes).every(cb => cb.checked);

        if (checkboxes.length > 0 && todosMarcados && !jaMostrouParabens) {
            alert("🎉 Parabéns! Você concluiu todas as suas tarefas!");
            jaMostrouParabens = true;
        }
    }

    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});

