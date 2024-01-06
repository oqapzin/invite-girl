function acceptDate() {
    var primaryDiv = document.getElementById("primary_container");
    var secondaryDiv = document.getElementById("secondary_container");
    var image = document.getElementById("bear_bouquet");
    primaryDiv.style.display = "none"
    secondaryDiv.style.display = "flex"
    secondaryDiv.style.animation = "animatetop 0.8s"

    setTimeout(() => {
        image.style.opacity = 0;
        setTimeout(() => {
            image.style.opacity = 1
            image.src = "./assets/images/giphy.gif"
        }, 500)
    }, 3000)

}

function rejectDate() {
    var botao = document.getElementById("reject");

    let x = ((Math.random() * (window.innerWidth - 1) + 1) / window.innerWidth) * 100
    let y = ((Math.random() * (window.innerHeight - 1) + 1) / window.innerHeight) * 100

    botao.style.left = x + '%';
    botao.style.top = y + '%';
}