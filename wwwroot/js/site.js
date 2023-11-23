const hamMenu = document.querySelector('.ham-menu');
const navbartoggler = document.querySelector('navbar-toggler');
let isHamMenuClickable = true;

hamMenu.addEventListener('click', () => {
    if (!isHamMenuClickable) {
        return;
    }
    isHamMenuClickable = false;
    hamMenu.classList.toggle("active");
    setTimeout(() => {isHamMenuClickable = true;}, 350);
});
