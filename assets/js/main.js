let navElements = document.querySelectorAll(".nav-el");
let basketContainer = document.querySelector(".basketContainer");
let basket = document.querySelector(".basket");
let totalPriceDiv = document.querySelector(".totalPrice");
let basketFruit = document.querySelector(".basketFruit");

navElements.forEach(x => {
    x.addEventListener("click", function() {
        if (x.getAttribute("data-target") == "Səbət") {
            basketContainer.classList.remove("hide");
        } else if (x.getAttribute("data-target") == "Hesabla") {
            totalPriceDiv.classList.remove("hide");
        }
    })
})

let fruitType = null;
let totalPrice = 0.00;

let Grape1 = document.querySelector(".Grape1");
let Grape2 = document.querySelector(".Grape2");
let Grape3 = document.querySelector(".Grape3");
let dragItem;
Grape1.ondragstart = function() {
    dragItem = this;
}
Grape2.ondragstart = function() {
    dragItem = this;
}
Grape3.ondragstart = function() {
    dragItem = this;
}


let Tomato1 = document.querySelector(".Tomato1");
let Tomato2 = document.querySelector(".Tomato2");
let Tomato3 = document.querySelector(".Tomato3");


Tomato1.ondragstart = function() {
    dragItem = this;
}
Tomato2.ondragstart = function() {
    dragItem = this;
}
Tomato3.ondragstart = function() {
    dragItem = this;
}

let Pomegranate1 = document.querySelector(".Pomegranate1");
let Pomegranate2 = document.querySelector(".Pomegranate2");
let Pomegranate3 = document.querySelector(".Pomegranate3");


Pomegranate1.ondragstart = function() {
    dragItem = this;
}
Pomegranate2.ondragstart = function() {
    dragItem = this;
}
Pomegranate3.ondragstart = function() {
    dragItem = this;
}


basket.ondragover = function(e) {
    e.preventDefault();
}

basket.ondrop = function() {
    if (fruitType == dragItem.getAttribute("data-id") || !fruitType) {
        totalPriceDiv.classList.add("hide")
        basket.appendChild(dragItem);
        fruitType = dragItem.getAttribute("data-id"); 
        basketFruit.textContent = fruitType

    }
}