function rolarContato() {
    document.getElementById("contato").scrollIntoView({
        behavior: "smooth"
    });
}

function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato 😊");
}
