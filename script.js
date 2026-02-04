function rolarContato() {
    document.getElementById("contato").scrollIntoView({
        behavior: "smooth"
    });
}

function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato.");
}
