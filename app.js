let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')

}
 // remove toggle icon and navbar when click navbar links (scroll)
 menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');