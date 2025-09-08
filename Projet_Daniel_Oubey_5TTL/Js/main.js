let cookie = 1  
let lvl = 1
const btns = document.querySelectorAll(".btn")
const textCookie = document.querySelector(".affichage")
const felicitationJS = document.querySelector(".felicitation")
const q1In = document.querySelector(".InputQ1")
let reponse = 0

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(cookie)
        felicitationJS.innerHTML = ''

        if (reponse >= 1){
            textCookie.innerHTML = cookie
        }

        // Q1
        if (cookie == 10){
            let Q1 = prompt("combien de fois as tu clicker ? ")
            if (Q1 != 10){
                cookie = 0
                felicitationJS.innerHTML = "Dommage ce n'est pas la bonne réponse !"
                felicitationJS.setAttribute("data-value", "1");
            }
            else if(Q1 == 10) {
                reponse +=1
                console.log("Reponse: " + reponse)
                felicitationJS.innerHTML = "Félicitation Pour avoir trouvé la bonne réponse !"
            }
        }
        cookie +=  lvl
    })
})
