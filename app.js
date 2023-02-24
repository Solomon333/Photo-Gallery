const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const changeImg = document.querySelectorAll(".img");
let selectedImg = 0;


prevBtn.addEventListener('click', ()=> {
    changeImg[selectedImg].classList.remove("active");
    selectedImg--;

    changeImg[selectedImg].classList.add("active");
    nextBtn.disabled = false;

    if(selectedImg === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', ()=> {
    changeImg[selectedImg].classList.remove("active");
    selectedImg++;

    changeImg[selectedImg].classList.add("active");
    prevBtn.disabled = false;

    if(changeImg.length -1 === selectedImg) {
        nextBtn.disabled = true;
    }
})