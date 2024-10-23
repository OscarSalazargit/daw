const resultado = document.getElementById("result");
let nombre;
let fecha;

function leeTexto() {
  //Obtener los valores de los campos
  let nombre = document.getElementById("nombre").value;
  let fecha = document.getElementById("fnacimiento").value;
  let anio = fecha.substring(0,4);
  let mes = fecha.substring(5, 7) - 1;
  let dia = fecha.substring(8);
  let fechaNacimiento = new Date(anio,mes,dia);

  //Mostrar por consola los valores
  console.log(nombre);
  console.log(fecha);
  return `<h3>Datos recogidos en JS:</h3>
    <p>Nombre: ${nombre}</p>
    <p>Fecha de nacimiento: ${fecha}</p>`;
    

      let hoy = new Date();
      let diferencia = hoy-anio;
      edad.innerText = diferencia;
    

}




