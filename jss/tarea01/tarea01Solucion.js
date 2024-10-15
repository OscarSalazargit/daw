const canva = document.getElementById("canvas");
const barco = document.getElementById("barco");
const camion = document.getElementById("camion");
const nave = document.getElementById("nave");
canva.innerHTML =
  "<img src='../../assets/img/logoOscar.jpg' alt='Logo de Oscar Salazar' class='header__imagen' />";

barco.addEventListener("click", (e) => {
  canva.innerHTML = "<i class='fa-solid fa-ship js01__logo-i'></i>";
});
camion.addEventListener("click", (e) => {
  canva.innerHTML = '<i class="fa-solid fa-truck js01__logo-i"></i>';
});
nave.addEventListener("click", (e) => {
  canva.innerHTML = '<i class="fa-brands fa-space-awesome js01__logo-i"></i>';
});
