// Função Typing

const typedTextSpan = document.querySelector(".text");

const textArray = ["Desenvolvedor WEB", "Desenvolvedor Front-End", "Analista de Sistemas"];
const typingDelay = 100;
const erasinDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasinDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 100);
});

// **************************************************************************

// Função "Leia Mais"

let lerMais = document.querySelectorAll('.mais');
for(let i=0; i < lerMais.length; i++){
    lerMais[i].addEventListener('click', function(){
        lerMais[i].parentNode.classList.toggle('ativo')
    })
}

// **************************************************************************

// Scroll Reveal

const sr = ScrollReveal({
    distance: '50px',   // Distância de deslocamento
    duration: 1000,     // Duração da animação em milissegundos
    easing: 'ease-in-out',  // Tipo de easing
    reset: false      // Reativar animação em cada rolagem
});


// Aplicando o efeito de revelação na seção "Sobre Mim"
sr.reveal('.foto_sobre', {
    origin: 'left',     // Origem da animação
    delay: 300          // Atraso da animação em milissegundos
});

sr.reveal('.sobre_titulo h1', {
    origin: 'top',     // Origem da animação
    delay: 500          // Atraso da animação em milissegundos
});

sr.reveal('.sobre_titulo p', {
    origin: 'right',     // Origem da animação
    delay: 700          // Atraso da animação em milissegundos
});

sr.reveal('.sobre_titulo span', {
    origin: 'right',     // Origem da animação
    delay: 900          // Atraso da animação em milissegundos
});

sr.reveal('.sobre_texto h1', {
    origin: 'right',     // Origem da animação
    delay: 1100          // Atraso da animação em milissegundos
});

sr.reveal('.sobre_texto', {
    origin: 'right',     // Origem da animação
    delay: 1300          // Atraso da animação em milissegundos
});

sr.reveal('.mais', {
    origin: 'right',     // Origem da animação
    delay: 1500          // Atraso da animação em milissegundos
});

sr.reveal('.sobre_info p', {
    origin: 'bottom',     // Origem da animação
    delay: 1700        // Atraso da animação em milissegundos
});

// Aplicando o efeito de revelação na seção "Educação"

// **************************************************************************

