document.addEventListener("DOMContentLoaded", () => {
    const inputSenha = document.getElementById("senha");
    const toggleSenha = document.getElementById("toggle-senha");

    if (!inputSenha || !toggleSenha) return;

    // Alterna entre senha oculta (pontos) e visível.
    toggleSenha.addEventListener("click", () => {
        const visivel = inputSenha.type === "password";

        inputSenha.type = visivel ? "text" : "password";
        toggleSenha.classList.toggle("senha-visivel", visivel);
        toggleSenha.setAttribute("aria-pressed", String(visivel));
        toggleSenha.setAttribute("aria-label", visivel ? "Esconder senha" : "Mostrar senha");
        inputSenha.focus();
    });
});
