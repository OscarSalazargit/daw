// let losLis = document.getElementById("pez");
// losLis.style.color = "red";
// losLis.textContent = "Verde";
// console.log(losLis);

// let lista = document.querySelectorAll("li");
// console.log(lista);

// lista.forEach((element) => {
//   element.style.fontSize = "2rem";
// });

// const inner = document.getElementById("inner");
// inner.innerHTML = "Hola a <b>Todos!!</b>";
// inner.style.backgroundColor = "red";

// const outer = document.getElementById("outer");
// console.log(outer);
// outer.outerHTML = "<ul><li>A</li><li>B</li></ul>";

// const text = document.getElementById("text");
// text.innerText = "<b>Adios amigos!!</b>";
// text.title = "Esto es un titulo informativo!";
// inner.id = "loco";

// const loco = document.getElementById("loco");
// loco.textContent = "Telita";
// console.log(loco);
// loco.hidden = true;

const imgA = document.getElementsByClassName("a");
console.log(imgA);

for (im of imgA) {
  im.style.border = "5px solid blue";
}

let trans = Array.from(imgA);
console.log(trans);
trans.forEach((tr) => {
  tr.style.border = "9px solid pink";
});
