function mostrar()
{
//creo la variable mes
var mes; 

// al valor q seleccionen con el ID"mes" lo guardo en el var mes 
mes = document.getElementById("mes").value;


// no cerrar el switch con ";"" y no olvidar las llaves "{}"
switch (mes)

    {
        case "Febrero":
            {
            alert("Este mes no tiene más de 29 días.");
            break;
            }
        // va a dar el mismo resultado para todo lo q no es febrero
        // solo utilizar cuando hay una caja de texto ya q si la info nos la da el usuario
        // nos va a tirar el mismo cartel no importa q escriba el usuario
         default:
           {
            alert("Este mes tiene 30 días o mas.");
            break;
           }
        

       
        


    }
	


}//FIN DE LA FUNCIÓN