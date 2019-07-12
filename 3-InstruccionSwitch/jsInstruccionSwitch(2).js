function mostrar()
{
//creo la var mes 
var mes;

// al valor q seleccionen con el ID"mes" lo guardo en el var mes 
mes = document.getElementById("mes").value;


// no cerrar el switch con ";"" y no olvidar las llaves "{}"
switch (mes)
{
    case "Enero":

    case "Febrero":

    case "Marzo":

    case "Abril":

    case "Mayo":

    case "Junio":

        alert("Falta para el invierno");
        break;
    // se va a repetir el mensaje hasta q se ejecute un break asiq el mismo mensaje 
    // sirve para todos


    //aca comienza un nuevo case q va a ejecutar el mismo alerta para todos y 
    //se va a detener recien cuando cierre con break;

    case "Julio":

    case "Agosto":

        alert("Abrigate que hace frio");
        break;


    //aca comienza un nuevo case
    case "Septiembre":

    case "Octubre":

    case "Noviembre":

    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;


}


}//FIN DE LA FUNCIÓN