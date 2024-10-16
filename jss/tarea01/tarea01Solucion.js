const canva = document.getElementById("canvas");
const barco = document.getElementById("barco");
const camion = document.getElementById("camion");
const nave = document.getElementById("nave");
const zoomUp = document.getElementById("zoom__up");
const zoomDown  = document.getElementById("zoom__down");
const icon = document.getElementsByClassName("canva__icon");
const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const amarillo = document.getElementById("amarillo");
const negro = document.getElementById("negro");

canva.innerHTML = "<img src='../../assets/img/logoOscar.jpg' alt='Logo de Oscar Salazar' class='header__imagen canva__icon' />";

barco.addEventListener("click", (e) => {
  canva.innerHTML = "<i class='fa-solid fa-ship js01__logo-i canva__icon'></i>";
});
camion.addEventListener("click", (e) => {
  canva.innerHTML = '<i class="fa-solid fa-truck js01__logo-i canva__icon"></i>';
});
nave.addEventListener("click", (e) => {
  canva.innerHTML = '<i class="fa-brands fa-space-awesome js01__logo-i canva__icon"></i>';
});

function zoomInOut(){
  canva.classList.toggle("up");
}
zoomUp.addEventListener("click", () =>{
  zoomInOut();
});

verde.addEventListener("click", ()=>{
  canva.classList.toggle("verde");
})
rojo.addEventListener("click", ()=>{
  canva.classList.toggle("rojo");
})
azul.addEventListener("click", () =>{
  canva.classList.toggle("azul");
})
amarillo.addEventListener("click", ()=>{
  canva.classList.toggle("amarillo");
})
negro.addEventListener("negro", ()=>{
  canva.classList.toggle("negro");
})



