document.addEventListener("DOMContentLoaded", () => {
    const ulParent = document.querySelector(".ul-parent")

    ulParent.addEventListener("click", (evento) => {
        if(evento.target.tagName == "LI"){
            evento.target.classList.toggle("ul-parent")
            evento.target.style = "color: red"
        }
    })
})


function pressButon(){
    const title = document.querySelector(".title");
    const container = document.querySelector(".container")
    console.log(title)
    console.log(title.textContent)

    //title.textContent = "outro valor de titulo"
    //adicionar elementos
    //title.innerHTML = "<h1>teste  show</h1>"
    
    title.classList.toggle("dark-mode")
    title.parentElement.classList.toggle("dark-mode")

   // const pharaghaph = document.createElement("p")
    //pharaghaph.textContent = "apenas um show"

   // container.appendChild(pharaghaph)

    // pegar evento de click
    title.addEventListener("click", () => {
        title.textContent = "Cliquei no title"

        
        pharaghaph.style = "color: red"
         
    })
}

