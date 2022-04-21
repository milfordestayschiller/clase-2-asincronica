function genero() {
   var genero = prompt("Hola estimado, ingrese su sexo, debe ser hombre o mujer");
    if((genero == null) || (genero == "") )  {
        alert("Debe ingresar un valor");
    }  
    else if ((genero == "hombre" || genero == "mujer")) {
        alert("Has ingresado tu genero " +genero+ " ,continua con tu proceso de jubilacion")
    }
    var edad = prompt("Ingresa tu edad")
  if((edad >= 65 && genero == "hombre") || ((edad >=60 && genero == "mujer")) ) {
      alert("La edad ingresada es compatible para la jubilacion para tu genero seleccionado :" +genero)
  }
  if((edad <= 65 && genero == "hombre") || ((edad <=60 && genero == "mujer")) ) {
    alert("La edad ingresada no es compatible para la jubilacion , para tu genero seleccionado :"+genero)
}

}
