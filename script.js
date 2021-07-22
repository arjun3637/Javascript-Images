const nextBtn = document.querySelector('.nextBtn');
const backBtn = document.querySelector('.backBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
backBtn.addEventListener('click',backSlide);

function nextSlide(){
    container.animate([{opacity: 0.2},{opacity: 1}], {duration : 1000, fill:'forwards'})
    if(counter === 4){
        counter = -1; 
    }

    counter++;
    container.style.backgroundImage = `url(img-${counter}.jpg)`
}

function backSlide(){
    container.animate([{opacity: 0.2},{opacity: 1}], {duration : 1000, fill:'forwards'})
    if(counter === 0){
        counter = 5; 
    }

    counter--;
    container.style.backgroundImage = `url(img-${counter}.jpg)`
}