function mostrar()
{
//creo la variable edad
var edad;


// la transformo a numero (parseInt); le indico q la busque en ID "edad" y la guarde en var edad
edad = parseInt(document.getElementById("edad").value);


// si el numero ingresado es menor a 13 sale este alert
if (edad < 13)
{
    alert("esta persona es un niño");
}

//se descarto todas las edades menores a 13 en el if anterior 
// ahora solo mide de 13 al infinito... si 18 es mayor a la edad tira este alerta
else if (edad < 18)

{
    alert("esta persona es un adolescente");

}

// en el else if anterior se descartaron todos los numeros menores a 18
// de 18 al infinito va a tirar lo q alla en else
else
{
    alert("Esta persona es un adulto");

}



}//FIN DE LA FUNCIÓN