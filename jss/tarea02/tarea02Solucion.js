const resultado = document.getElementById("result");
let nombre;
let fecha;

function leeTexto() {
  //Obtener los valores de los campos
  let nombre = document.getElementById("nombre").value;
  let fecha = document.getElementById("fnacimiento").value;

  //Mostrar por consola los valores
  console.log(nombre);
  console.log(fecha);
  return `<h3>Datos recogidos en JS:</h3>
    <p>Nombre: ${nombre}</p>
    <p>Fecha de nacimiento: ${fecha}</p>`;
}

resultado.innerHTML(leeTexto());
