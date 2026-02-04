// Scroll suave para contato
function rolarContato() {
    document.getElementById("contato").scrollIntoView({behavior:"smooth"});
}

// Formulário
function enviarFormulario(event){
    event.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve 😊");
}

// Menu hamburger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu(){
    navLinks.classList.toggle('nav-active');
}

// Animação fade-in ao rolar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < trigger) section.classList.add('show');
    });
});
