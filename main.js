const content = document.querySelector(".content")
const grid = document.createElement("div")
const newButton = document.querySelector("#newgrid")
const size = 16


grid.classList.add("grid")
function buildGrid(size) {
    divside = 800 / size
    for (let index = 0; index < size; index++) {
        l = document.createElement("div")
        l.classList.add("row" + index)
        l.classList.add("row")
        l.setAttribute("style", "min-width: " + divside + "px; min-height: " + divside + "px;");
        for (let i = 0; i < size; i++) {
            aa = document.createElement("div")
            aa.classList.add("col" + i)
            aa.classList.add("col")
            aa.setAttribute("style", "min-width: " + divside + "px; min-height: " + divside + "px;");
            l.appendChild(aa)
            aa.addEventListener('mouseover', (e) => {
                e.target.classList.add("celon")
            })
        }
        grid.appendChild(l)
    }
    content.appendChild(grid)
}

buildGrid(size)

newButton.addEventListener('click', a)

function a() {
    let news = prompt("new Grid Size", "16")
    if (news > 100) {
        alert("Must be less that 100")
    } else {
        grid.innerHTML = ""
        buildGrid(news)
    }
}