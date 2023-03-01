// ScrollReveal().reveal('.headline');



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

const flagElement = document.getElementById("flags")
const direccion = document.getElementById("direccion")
const enlace = document.getElementById("direccion");
const textsToChange = document.querySelectorAll("[data-section]");
const idioma = document.getElementById("idiomas")

idioma.addEventListener('change', ()=>{

    const lan = idioma.value
    changeLanguage(lan)
})



const changeLanguage = async (languague)=>{
   
    const requestJson = await fetch(`./ languages/${languague}.json`);
    const texts = await requestJson.json();
   
    if(languague =="es"){
        enlace.href = "/static/cv.pdf";
    }else if(languague=="en"){
        
        enlace.href = "/static/resume.pdf";
    }

    
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
   
}
// flagElement.addEventListener("click", (e) =>{
//     changeLanguage(e.target.parentElement.dataset.languague)
// });

