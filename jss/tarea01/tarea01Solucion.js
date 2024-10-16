const canva = document.getElementById("canvas");
const barco = document.getElementById("barco");
const camion = document.getElementById("camion");
const nave = document.getElementById("nave");
const up = document.getElementById("zoom__up");
const down  = document.getElementById("zoom__down");
const icon = document.getElementsByClassName("canva__icon");
const verde = document.getElementById("color__verde");
const rojo = document.getElementById("color__rojo");
const azul = document.getElementById("color__azul");
const amarillo = document.getElementById("color__amarillo");
const negro = document.getElementById("color__negro");

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
up.addEventListener("click", ()=>{
  console.log("Le dia  up");
  console.log(icon);
  zoomInOut();
});

verde.addEventListener("click", (e)=>{
  canva.classList.add("verde");
})



