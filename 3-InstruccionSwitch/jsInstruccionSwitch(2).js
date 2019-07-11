function mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;
// no cerrar con ";""
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
    case "Julio":

    case "Agosto":

        alert("Abrigate que hace frio");
        break;

    case "Septiembre":

    case "Octubre":

    case "Noviembre":

    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;


}


}//FIN DE LA FUNCIÓN