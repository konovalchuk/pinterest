let buttonBoard = document.getElementById("board");
let tabBoard = document.getElementById("tabBoard");

let buttonComplain = document.getElementsByClassName("button-complain");
let windowComplain = document.getElementById("complaint");

//Кнопки окна Жалоба
let buttonBack = document.getElementById("back");
let buttonNext = document.getElementById("next");


//Кнопки для переключения досок
let buttonMountains = document.getElementById("mountains");
let buttonAnimals = document.getElementById("animals");
let buttonCity = document.getElementById("city");

//Доски
let pinMountains = document.getElementById("pin-mountains");
let pinAnimals = document.getElementById("pin-animals");
let pinCity = document.getElementById("pin-city");

//Открывает доску Горы
buttonMountains.addEventListener("click", () => {
    pinMountains.classList.remove("display-none");
    pinAnimals.classList.add("display-none");
    pinCity.classList.add("display-none");
})

//Открывает доску Животные
buttonAnimals.addEventListener("click", () => {
    pinAnimals.classList.remove("display-none");
    pinMountains.classList.add("display-none");
    pinCity.classList.add("display-none");
})

//Открывает доску Город
buttonCity.addEventListener("click", () => {
    pinCity.classList.remove("display-none");
    pinAnimals.classList.add("display-none");
    pinMountains.classList.add("display-none");
})


//Открывает и закрывает окно с досками
buttonBoard.addEventListener("click", () => {
    tabBoard.classList.toggle("tab-board-active");
})

const buttonComplainArray = [...buttonComplain];

buttonComplainArray.forEach(element => {
    element.addEventListener("click", () => {
        windowComplain.classList.add("tab-complaint-display-block");
    })
});

/*
const buttonNextArray = [...buttonNext];
const buttonBackArray = [...buttonBack];

buttonNextArray.forEach(element => {
    element.addEventListener("click", () => {
        windowComplain.classList.revove("tab-complaint-display-block");
    })
});

buttonBackArray.forEach(element => {
    element.addEventListener("click", () => {
        windowComplain.classList.revove("tab-complaint-display-block");
    })
});

buttonNext.addEventListener("click", () => {
    windowComplain.classList.remove("tab-complaint-display-block");
})

buttonBack.addEventListener("click", () => {
    windowComplain.classList.remove("tab-complaint-display-block");
})
*/

fetch("https://625f0f2d873d6798e2b2501b.mockapi.io/pinterest/")   
.then(response => {
    return response.json();
})
.then(data => {
data.forEach(item => {
const foto = document.createElement("img");
img.src = item.foto;

const name = document.createElement("span");
name.textContent = item.name;

const container = document.createElement("div");

container.appendChild(foto);
container.appendChild(name);

document.body.appendChild(container);
}); 
})