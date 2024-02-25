window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 450);
});

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/*MODAL DELIVERY*/

const button = document.querySelector(".btn-abrirModal")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector(".btn-cancelar")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}