let buttonBoard = document.getElementById("board");
let tabBoard = document.getElementById("tabBoard");

let buttonComplain = document.getElementsByClassName("button-complain");
let windowComplain = document.getElementById("complaint");

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
    pinMountains.classList.remove("mountains");
    pinAnimals.classList.add("animals");
    pinCity.classList.add("city");
})

//Открывает доску Животные
buttonAnimals.addEventListener("click", () => {
    pinAnimals.classList.remove("animals");
    pinMountains.classList.add("mountains");
    pinCity.classList.add("city");
})

//Открывает доску Город
buttonCity.addEventListener("click", () => {
    pinCity.classList.remove("city");
    pinAnimals.classList.add("animals");
    pinMountains.classList.add("mountains");
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

