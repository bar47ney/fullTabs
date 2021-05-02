const clickInfo =  document.getElementsByClassName("clickInfo")
const info =  document.getElementsByClassName("info")
const isVisible = [0, 0, 0, 0, 0, 0]

clickInfo[0].addEventListener("click", () => {
    changeTab(0)
})

clickInfo[1].addEventListener("click", () => {
    changeTab(1)
})

clickInfo[2].addEventListener("click", () => {
    changeTab(2)
})

clickInfo[3].addEventListener("click", () => {
    changeTab(3)
})

clickInfo[4].addEventListener("click", () => {
    changeTab(4)
})

clickInfo[5].addEventListener("click", () => {
    changeTab(5)
})

window.addEventListener("resize", function() {
    if(window.matchMedia("(min-width: 1024px)").matches) {
        for (let i = 0; i < clickInfo.length; i++)
        {
            clickInfo[i].style.marginBottom = "15px"
        }
    } else if(window.matchMedia("(max-width: 1024px)").matches){
        for (let i = 0; i < isVisible.length; i++) {
            if(isVisible[i] === 1){
                clickInfo[i].style.marginBottom = "300px"
            }
        }
    }
})

function changeTab(index){
    if(isVisible[index] === 0){
        closeTabs()
        if(window.innerWidth <= 1024){
            clickInfo[index].style.marginBottom = "300px"
        }
        clickInfo[index].style.color = "limegreen"
        info[index].style.display = "block"
        isVisible[index] = 1
    } else if (isVisible[index] === 1){
        closeTabs()
    }
}

function closeTabs(){
    for (let i = 0; i < isVisible.length; i++) {
        if(isVisible[i] === 1){
            clickInfo[i].style.marginBottom = "15px"
            clickInfo[i].style.color = "black"
            info[i].style.display = "none"
            isVisible[i] = 0
        }
        else if(isVisible[i] === 0){
            continue
        }
    }
}
