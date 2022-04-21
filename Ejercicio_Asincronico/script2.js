
var ingresaSexo = prompt("Hola porfavor indica tu sexo, ejemplo: si eres hombre escribe hombre, si eres mujer escribe mujer")
var ingresaEdad = prompt("Ingrese su edad")
if((ingresaSexo == "mujer" && ingresaEdad >= 60) || (ingresaSexo == "hombre" && ingresaEdad >= 65)){ 
alert("Felicidades puedes jubilarte")

} else  {
    alert("No puedes jubilarte")
} 


