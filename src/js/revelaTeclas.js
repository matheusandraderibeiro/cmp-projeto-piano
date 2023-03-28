const checkbox = document.querySelector (".controle__checkbox");
const swicther = document.querySelector (".swicther");
const legendaDasTeclas = document.querySelector (".teclas");

checkbox.addEventListener ("change",({target}) => {
    if (target.checked) {
        swicther.classList.add ("swicther--active");
        legendaDasTeclas.classList.remove ("desabled-keys");
    } else {
        swicther.classList.remove ("swicther--active");
        legendaDasTeclas.classList.add ("desabled-keys");
    }
});
