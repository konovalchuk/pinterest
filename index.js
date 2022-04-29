//Окно с выбором доски
let buttonBoard = document.getElementById("board");
let tabBoard = document.getElementById("tabBoard");
//Кнопка включения и выключения окна
buttonBoard.addEventListener("click", () => {
    tabBoard.classList.toggle("tab-board-active");
})

//Доски и кнопки для переключения досок
let pinAnimals = document.getElementById("pin-animals");
let pinNature = document.getElementById("pin-nature");
let pinArt = document.getElementById("pin-art");

let buttonAnimals = document.getElementById("animals");
let buttonNature = document.getElementById("nature");
let buttonArt = document.getElementById("art");

//Открывает доску Животные
buttonAnimals.addEventListener("click", () => {
    pinAnimals.classList.remove("display-none");
    pinNature.classList.add("display-none");
    pinArt.classList.add("display-none");
})

//Открывает доску Природа
buttonNature.addEventListener("click", () => {
    pinNature.classList.remove("display-none");
    pinAnimals.classList.add("display-none");
    pinArt.classList.add("display-none");
})

//Открывает доску Искусство
buttonArt.addEventListener("click", () => {
    pinArt.classList.remove("display-none");
    pinNature.classList.add("display-none");
    pinAnimals.classList.add("display-none");
})


//Кнопка и окно Жалобы
let buttonComplain = document.getElementsByClassName("button-complain");
let windowComplain = document.getElementById("complaint");

const buttonComplainArray = [...buttonComplain];

buttonComplainArray.forEach(element => {
    element.addEventListener("click", () => {
        windowComplain.classList.add("tab-complaint-display-block");
    })
});

//Кнопки выключения окна Жалобы
let buttonBack = document.getElementById("back");
let buttonNext = document.getElementById("next");

buttonNext.addEventListener("click", () => {
    windowComplain.classList.add("display-none");
})

buttonBack.addEventListener("click", () => {
    windowComplain.classList.add("display-none");
})




//Запрос на сервер для получения фото
fetch("https://626afa0a6a86cd64adb6189e.mockapi.io/api/foto/foto")  
.then((response) => {
    return response.json();
})
.then((data) => {
    const picturesData = data.map(item => {
const foto = document.createElement("img");
foto.src = item.foto;

const name = document.createElement("span");
name.textContent = item.name;

const container = document.createElement("div");

container.appendChild(foto);
container.appendChild(name);
return container;

}); 

const containers = [...document.getElementsByClassName("relative")];
containers.forEach((item, i) => {

    item.appendChild(picturesData[i]);
})
})
