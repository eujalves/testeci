document.addEventListener("DOMContentLoaded", () => {
    const inputSenha = document.getElementById("senha");
    const toggleSenha = document.getElementById("toggle-senha");
    const cadastrarBtn = document.getElementById("cadastrar-btn");
    const entrarBtn = document.getElementById("entrar-btn");

    if (inputSenha && toggleSenha) {
        // Alterna entre senha oculta (pontos) e visível.
        toggleSenha.addEventListener("click", () => {
            const visivel = inputSenha.type === "password";

            inputSenha.type = visivel ? "text" : "password";
            toggleSenha.classList.toggle("senha-visivel", visivel);
            toggleSenha.setAttribute("aria-pressed", String(visivel));
            toggleSenha.setAttribute("aria-label", visivel ? "Esconder senha" : "Mostrar senha");
            inputSenha.focus();
        });
    }

    if (cadastrarBtn) {
        cadastrarBtn.addEventListener("click", () => {
            window.location.href = "/public/pages/cadastro-completo/index.html";
        });
    }

    if (entrarBtn) {
        entrarBtn.addEventListener("click", () => {
            window.location.href = "/public/pages/login-paciente/index.html";
        });
    }
});
