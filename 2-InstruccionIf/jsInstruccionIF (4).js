function mostrar()
{
//creo la variable  edad  
var edad;


// la transformo a numero (parseInt); le indico q la busque en ID "edad" y la guarde en var edad
edad = parseInt(document.getElementById("edad").value);

// si el numero ingresado es mayor a 13 pero menor a 18 tira el alerta sino no hace nada
if (edad >= 13 && edad < 18)

{

    alert("Esta persona es adolescente");

}


}//FIN DE LA FUNCIÓN