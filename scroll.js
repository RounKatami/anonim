const navbar = document.querySelector('.navbar');
const material = document.querySelector('.first');
const navbarHeight = navbar.offsetHeight;
const materialHeight = material.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    //Фиксирует меню сверху при прокрутке страницы вниз.
    if (scrollDistance >= materialHeight + navbarHeight){
        navbar.classList.add('navbar--fixed');
        material.style.marginTop = `${navbarHeight}px`;
    } else {
        navbar.classList.remove('navbar--fixed');
        material.style.marginTop = null;
    }

//Строки которые фиксируют меню когда верхняяя часть будет недотягивать до самого верхва 3 пикселя.
    if (scrollDistance === 3){
        navbar.classList.add('navbar--fixed');
        material.style.marginTop = `${navbarHeight}px`;
    }

    //if()

    //lastScrollTop = scrollDistance;
});