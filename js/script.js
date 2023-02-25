// ScrollReveal().reveal('.headline');



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

const flagElement = document.getElementById("flags")

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (languague)=>{
   
    const requestJson = await fetch(`./ languages/${languague}.json`);
    const texts = await requestJson.json();

    
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
   
}
flagElement.addEventListener("click", (e) =>{
    changeLanguage(e.target.parentElement.dataset.languague)
});