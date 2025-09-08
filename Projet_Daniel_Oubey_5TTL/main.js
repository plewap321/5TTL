let cookie = 1  
let lvl = 1
const btns = document.querySelectorAll(".btn")
const text = document.querySelector(".affichage")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        text.innerHTML = cookie
        cookie +=  lvl
    })
})
