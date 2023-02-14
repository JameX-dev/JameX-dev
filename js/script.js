// ScrollReveal().reveal('.headline');



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    console.log("clic")
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}