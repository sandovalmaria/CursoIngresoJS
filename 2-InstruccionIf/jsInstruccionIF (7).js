function mostrar()
{
//AVERIGUAR XQ NO SALE

var edad;

var estado;

edad = parseInt(document.getElementById("edad").value);

estado = document.getElementById("estadoCivil").value;

if (edad < 18 &&  estado != "Soltero")

{

alert("Es muy chico para NO ser soltero");

}

}//FIN DE LA FUNCIÓN