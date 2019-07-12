function mostrar()
{
//creo la variable mes  
var mes;

// al valor q seleccionen con el ID"mes" lo guardo en el var mes 
mes = document.getElementById("mes").value;


//(switch = cambiar) no se debe cerrar con";" y se enciera la var  entre parentesis(var)
switch (mes)

{
    //case (casilla) luego ID entre commillas (se cierra con break; luego del alert q tambien va con ";")
    case "Enero":
    {
        alert(" Que comiences bien el año");
        break;
    }
    case "Marzo":
    {
        alert("A clases!");
        break;
    }

    case "Julio":
    {
        alert("Comienzan las vacaciones");
        break;
    }

    case "Diciembre":
    {
        alert("Felices Fiestas");
        break;
    }
    // los meses q no tengan nada no hacen nada


}




}//FIN DE LA FUNCIÓN