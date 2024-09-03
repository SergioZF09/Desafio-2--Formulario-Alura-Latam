let nombre = document.querySelector("#nombre");
let edad = document.querySelector("#edad");
let lenguaje = document.querySelector("#lenguaje");

function mostrarInformacion() {
    
    let infoNombre = nombre.value;
    let infoEdad = parseInt(edad.value);
    let infoLenguaje = lenguaje.value;

    swal({
        title: "Enciesta exitoso!",
        text: `Hola ${infoNombre}, tienes ${infoEdad} años y ya estás aprendiendo ${infoLenguaje}!`,
        icon: "success",
      })
      .then((informacionEnviada) => {
        if (informacionEnviada) {
          swal({
            title: "Pregunta!",
            text: `¿Te gusta estudiar ${infoLenguaje}? Responde con el número 1 para SÍ o 2 para NO.`,
            icon: "info",
            buttons: ["2", "1"],
          })
          .then((respuesta) => {
            if (respuesta) {
              swal("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
            } else {
              swal("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
            }

            limpiarCampos();
          });
        }
      });
    
    return;

}

function limpiarCampos() {

  nombre.value = "";
  edad.value = "";
  lenguaje.value = "";

  return;
  
}