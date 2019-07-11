function mostrar()
{
//creo la variable edad y estado civil

var edad;

var estado;

//la transformo a numero (parseInt); le indico q la busque en ID "edad" y la guarde en var edad
edad = parseInt(document.getElementById("edad").value);


// busco en el ID "estadoCivil" y q lo q se selecciona se guarde en estado
estado = document.getElementById("estadoCivil").value;

// si es menor de 18 Y (&&) su estado civil es diferente a soltero tira el alerta
if (edad < 18 &&  estado != "Soltero")

{

alert("Es muy chico para NO ser soltero");

}

}//FIN DE LA FUNCIÓN