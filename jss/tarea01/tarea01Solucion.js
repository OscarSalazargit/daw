const canva = document.getElementById('canvas') ;
const barco = document.getElementById('barco');
const camion = document.getElementById('camion');
const nave = document.getElementById('nave');
canva.innerHTML="<i class='fa-brands fa-space-awesome js01__logo-i'>";

barco.addEventListener("click", e =>{
  canva.innerHTML = "<i class='fa-solid fa-ship js01__logo-i'></i>";
})
camion.addEventListener("click", e =>{
  canva.innerHTML = '<i class="fa-solid fa-truck js01__logo-i"></i>';
})
