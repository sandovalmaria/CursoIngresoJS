function mostrar()
{
//tomo la edad  

	
var edad;

var estado;

edad = parseInt(document.getElementById("edad").value);

estado = document.getElementById("estadoCivil").value;

// es mayor de 18 y "diferente" de soltero
if (edad >18 && estado!="Soltero")

{
    alert("Es mayor y no es soltero");

}

}//FIN DE LA FUNCIÓN