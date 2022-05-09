let windowComplain = document.getElementById("complaint");

fetch("https://626afa0a6a86cd64adb6189e.mockapi.io/api/foto/foto")  
.then((response) => {
    return response.json();
})
.then((data) => {
    const picturesData = data.map(item => {
const foto = document.createElement("img");
foto.src = item.foto;
foto.classList.add("pin");
const name = document.createElement("span");
name.classList.add("name");
name.textContent = item.name;

const container = document.createElement("div");

container.appendChild(foto);
container.appendChild(name);
return container;

}); 

const containers = [...document.getElementsByClassName("relative")];
containers.forEach((item, i) => {
    const spanDescr = document.createElement("span");
    spanDescr.classList.add("descr");
    item.appendChild(spanDescr);
    const buttonSave = document.createElement("button");
    buttonSave.classList.add("button-save");
    buttonSave.innerHTML = "Сохранить";
    spanDescr.appendChild(buttonSave);
    const buttonComplaint = document.createElement("button");
    buttonComplaint.classList.add("button-save");
    buttonComplaint.classList.add("button-complain");
    buttonComplaint.innerHTML = "Пожаловаться";
    buttonComplaint.addEventListener("click", () => {
        windowComplain.classList.add("display-block");
    });
    spanDescr.appendChild(buttonComplaint);
    item.appendChild(picturesData[i]);
})
})


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

function openAnimals(){
    pinAnimals.classList.remove("display-none");
    pinNature.classList.add("display-none");
    pinArt.classList.add("display-none");
    tabBoard.classList.remove("tab-board-active");
}

function openNature(){
    pinNature.classList.remove("display-none");
    pinAnimals.classList.add("display-none");
    pinArt.classList.add("display-none");
    tabBoard.classList.remove("tab-board-active");
}

function openArt(){
    pinArt.classList.remove("display-none");
    pinNature.classList.add("display-none");
    pinAnimals.classList.add("display-none");
    tabBoard.classList.remove("tab-board-active");
}

//Открывает доску Животные
buttonAnimals.addEventListener("click", () => {
    openAnimals();
    localStorage.board = 1;
})

//Открывает доску Природа
buttonNature.addEventListener("click", () => {
    openNature();
    localStorage.board = 2;
})

//Открывает доску Искусство
buttonArt.addEventListener("click", () => {
    openArt();
    localStorage.board = 3;
})

//Кнопки выключения окна Жалобы
let buttonBack = document.getElementById("back");
let buttonNext = document.getElementById("next");

buttonNext.addEventListener("click", () => {
    windowComplain.classList.remove("display-block");
})

buttonBack.addEventListener("click", () => {
    windowComplain.classList.remove("display-block");
})

//Проверяем ключ в localStorage, чтобы при обновлении нужная доска оставалась открытой
if (localStorage.board == "2") {
openNature();
} else if (localStorage.board == "3"){
openArt();
} else {
openAnimals();
}

//Поиск картинок
window.onload = () => {
    let input = document.getElementById("search");
    input.oninput = function() {
        let value = this.value.trim();
        let list = document.querySelectorAll(".relative");
        if(value != ""){
            list.forEach(elem => {
                if(elem.innerHTML.search(value) == -1) {
                    elem.classList.add("display-none");
                }
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove("display-none");
            } )
        }
    };
};