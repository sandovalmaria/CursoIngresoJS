function mostrar()
{
//creo la variable edad y estado civil
var edad;

var estado;


//la transformo a numero (parseInt); le indico q la busque en ID "edad" y la guarde en var edad
edad = parseInt(document.getElementById("edad").value);


// busco en el ID "estadoCivil" y q lo q se selecciona se guarde en estado
estado = document.getElementById("estadoCivil").value;

// es mayor de 18 y "diferente" de soltero tira el alert
if (edad >18 && estado!="Soltero")

{
    alert("Es mayor y no es soltero");

}

}//FIN DE LA FUNCIÓN