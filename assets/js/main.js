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

sr.reveal('.sobre_info', {
    origin: 'right',     // Origem da animação
    delay: 1300        // Atraso da animação em milissegundos
});

sr.reveal('.sobre_texto', {
    origin: 'right',     // Origem da animação
    delay: 1500          // Atraso da animação em milissegundos
});

sr.reveal('.mais', {
    origin: 'bottom',     // Origem da animação
    delay: 1700          // Atraso da animação em milissegundos
});


// Aplicando o efeito de revelação na seção "Educação"

sr.reveal('.heading', {
    origin: 'top',     // Origem da animação
    delay: 300          // Atraso da animação em milissegundos
});

sr.reveal('.title-education', {
    origin: 'left',     // Origem da animação
    delay: 600          // Atraso da animação em milissegundos
});

sr.reveal('.title-experience', {
    origin: 'right',     // Origem da animação
    delay: 600          // Atraso da animação em milissegundos
});

sr.reveal('.box-right', {
    origin: 'left',     // Origem da animação
    delay: 900          // Atraso da animação em milissegundos
});

sr.reveal('.box-left', {
    origin: 'right',     // Origem da animação
    delay: 900          // Atraso da animação em milissegundos
});


sr.reveal('.education-top', {
    origin: 'left',     // Origem da animação
    delay: 1200          // Atraso da animação em milissegundos
});

sr.reveal('.experience-top', {
    origin: 'right',     // Origem da animação
    delay: 1200          // Atraso da animação em milissegundos
});

sr.reveal('.education-mid', {
    origin: 'left',     // Origem da animação
    delay: 1500          // Atraso da animação em milissegundos
});

sr.reveal('.experience-mid', {
    origin: 'right',     // Origem da animação
    delay: 1500          // Atraso da animação em milissegundos
});

sr.reveal('.education-bottom', {
    origin: 'left',     // Origem da animação
    delay: 1800          // Atraso da animação em milissegundos
});

sr.reveal('.experience-bottom', {
    origin: 'right',     // Origem da animação
    delay: 1800          // Atraso da animação em milissegundos
});

sr.reveal('.slider-container', {
    origin: 'bottom',     // Origem da animação
    delay: 500          // Atraso da animação em milissegundos
});



// ***************************************************************************

// Carrossel

const repeat = false;
const noArrows = false;
const noBullets = false;


const container = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
    if (noBullets) {
        return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
            goToIndexSlide(i);
        })
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede');
    })
    container.appendChild(bulletContainer);
}

function initArrows() {
    if (noArrows) {
        return;
    }
    const leftArrow = document.createElement('a')
    const iLeft = document.createElement('i');
    iLeft.classList.add('bx')
    iLeft.classList.add('bx-chevron-left')
    leftArrow.classList.add('slider-left')
    leftArrow.appendChild(iLeft)
    leftArrow.addEventListener('click', () => {
        slideLeft();
    })
    const rightArrow = document.createElement('a')
    const iRight = document.createElement('i');
    iRight.classList.add('bx')
    iRight.classList.add('bx-chevron-right')
    rightArrow.classList.add('slider-right')
    rightArrow.appendChild(iRight)
    rightArrow.addEventListener('click', () => {
        slideRight();
    })
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
}

function slideInitial() {
    initBullets();
    initArrows();
    setTimeout(function () {
        slideRight();
    }, 500);
}

function updateBullet() {
    if (!noBullets) {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat();
}

function checkRepeat() {
    if (!repeat) {
        if (slideCurrent === slide.length - 1) {
            slide[0].classList.add('not-visible');
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (slideCurrent === 0) {
            slide[slide.length - 1].classList.add('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            slide[slide.length - 1].classList.remove('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight() {
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    } else {
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];

    }

    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function slideLeft() {
    if (slideCurrent > 0) {
        slideCurrent--;
    } else {
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function goToIndexSlide(index) {
    const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
    while (slideCurrent !== index) {
        sliding();
    }
}

slideInitial();