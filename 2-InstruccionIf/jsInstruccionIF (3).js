function mostrar()
{
//creo la variable edad  
var edad;


// la transformo a numero (parseInt); le indico q la busque en ID "edad" y la guarde en var edad
edad = parseInt(document.getElementById("edad").value);

// si el numero guardado en "edad" es mayor a 18 entonces tira este cartel
if (edad < 18)

{
    alert("esta persona es menor de edad");
}


// no se debe poner valor a else puesto q todo lo q no sea if es else
else
{
    alert("Esta persona es mayor de edad");
}

}//FIN DE LA FUNCIÓN