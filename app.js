const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const gotoBtn = document.querySelector('.gotoBtn');
const darkThing = document.querySelector('.dark_thing')
const window1 = document.querySelector('.window1')
const window2 = document.querySelector('.window2')
const window3 = document.querySelector('.window3')
const window4 = document.querySelector('.window4')
const topLayer1 = document.querySelector('.top_layer1')
const topLayer2 = document.querySelector('.top_layer2')
const topLayer3 = document.querySelector('.top_layer3')
const topLayer4 = document.querySelector('.top_layer4')
const cross = document.querySelectorAll('.fa-solid')
const button = document.querySelectorAll('button')

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`
    if (currentIndex === 0) {
        document.body.style.background = 'rgb(113,66,66)'
        document.body.style.background = 'linear-gradient(90deg, rgba(113,66,66,1) 0%, rgba(220,107,107,1) 48%, rgba(255,0,0,1) 100%)'
    }
    if (currentIndex === 1) {
        document.body.style.background = 'rgb(115,252,255)'
        document.body.style.background = 'radial-gradient(circle, rgba(115,252,255,1) 0%, rgba(120,255,122,1) 100%)'
    }
    if (currentIndex === 2) {
        document.body.style.background = 'rgb(110,78,39)'
        document.body.style.background = 'linear-gradient(90deg, rgba(110,78,39,1) 0%, rgba(255,173,73,1) 63%, rgba(193,193,193,1) 100%)'
    }
    if (currentIndex === 3) {
        document.body.style.background = 'rgb(36,96,36)'
        document.body.style.background = 'radial-gradient(circle, rgba(36,96,36,1) 0%, rgba(0,255,0,1) 100%)'
    }
}
function goToNextSlide() {
    currentIndex = (currentIndex +1) % slides.length;
    showSlide(currentIndex)
}
function goToPrevSlide() {
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex)
}
prevButton.addEventListener('click', goToPrevSlide)
nextButton.addEventListener('click', goToNextSlide)
gotoBtn.addEventListener('click', () => {
    let gotoInpt = document.getElementById('input')
    let gotoInput = parseFloat(gotoInpt.value)
    currentIndex = gotoInput - 1
    console.log(gotoInput);
    if (slides.length < gotoInput) return alert('This is too big!')
    if (isNaN(gotoInput)) return alert('I need a number!')
    showSlide(currentIndex)
})
window1.addEventListener('click', () => {
    darkThing.style.background = 'rgba(0, 0, 0, 0.5)'
    topLayer1.style.opacity = '1'
    topLayer1.style.display = 'flex'
    topLayer1.style.transform = 'translateX(0px)'
    topLayer1.style.transition = 'all 0.3s ease-in-out;'
    for (let i=0; i < button.length; i++) {
        button[i].setAttribute("disabled", "");
    }
})
window2.addEventListener('click', () => {
    darkThing.style.background = 'rgba(0, 0, 0, 0.5)'
    topLayer2.style.opacity = '1'
    topLayer2.style.display = 'flex'
    topLayer2.style.transform = 'translateX(0px)'
    topLayer2.style.transition = 'all 0.3s ease-in-out;'
    for (let i=0; i < button.length; i++) {
        button[i].setAttribute("disabled", "");
    }
})
window3.addEventListener('click', () => {
    darkThing.style.background = 'rgba(0, 0, 0, 0.5)'
    topLayer3.style.opacity = '1'
    topLayer3.style.display = 'flex'
    topLayer3.style.transform = 'translateX(0px)'
    topLayer3.style.transition = 'all 0.3s ease-in-out;'
    for (let i=0; i < button.length; i++) {
        button[i].setAttribute("disabled", "");
    }
})
window4.addEventListener('click', () => {
    darkThing.style.background = 'rgba(0, 0, 0, 0.5)'
    topLayer4.style.opacity = '1'
    topLayer4.style.display = 'flex'
    topLayer4.style.transform = 'translateX(0px)'
    topLayer4.style.transition = 'all 0.3s ease-in-out;'
    for (let i=0; i < button.length; i++) {
        button[i].setAttribute("disabled", "");
    }
})
for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener("click", function() {
        darkThing.style.background = 'transparent'
        topLayer1.style.opacity = '0'
        topLayer1.style.display = 'none'
        topLayer1.style.transform = 'translateX(100px)'
        topLayer1.style.transition = 'all 0.3s ease-in-out;'
        topLayer2.style.opacity = '0'
        topLayer2.style.display = 'none'
        topLayer2.style.transform = 'translateX(100px)'
        topLayer2.style.transition = 'all 0.3s ease-in-out;'
        topLayer3.style.opacity = '0'
        topLayer3.style.display = 'none'
        topLayer3.style.transform = 'translateX(100px)'
        topLayer3.style.transition = 'all 0.3s ease-in-out;'
        topLayer4.style.opacity = '0'
        topLayer4.style.display = 'none'
        topLayer4.style.transform = 'translateX(100px)'
        topLayer4.style.transition = 'all 0.3s ease-in-out;'
        for (let i=0; i < button.length; i++) {
            button[i].removeAttribute("disabled", "");
    }
    });
}
showSlide(currentIndex)