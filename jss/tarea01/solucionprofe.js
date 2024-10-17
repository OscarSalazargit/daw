//añadimos el click listener a todos los iconos
let sourceImages = document.querySelectorAll(".js01__logo-i");
let canva = document.querySelector("#canvas div");
let zoomUp = document.getElementById("zoom__up");
let zoomDown = document.getElementById("zoom__down");
// console.log(sourceImages);
sourceImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    canva.setAttribute("class", event.target.getAttribute("class"));
    // console.log(canva);
  });
});

let colorBlock = document.querySelectorAll(".js01__colors li");
// console.log(colorBlock);

colorBlock.forEach((block) => {
  block.addEventListener("click", (event) => {
    let color = window.getComputedStyle(event.target).backgroundColor;
    canva.style.color = color;
  });
});

zoomDown.addEventListener("click", (event) => {
  let dim = canva.offsetWidth;
  canva.style.fontSize = dim - 20 + "px";
  canva.style.fontSize = dim - 20 + "px";
});
zoomUp.addEventListener("click", (event) => {
  let dim = canva.offsetWidth;
  canva.style.fontSize = dim + 20 + "px";
  canva.style.fontSize = dim + 20 + "px";
});
