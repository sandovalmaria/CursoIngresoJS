function mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;

switch (mes)

    {
        case "Febrero":
            alert("Este mes no tiene más de 29 días.");
            break;
        
        // va a dar el mismo resultado para todo lo q no es febrero
        // solo utilizar cuando hay una caja de texto ya q si la info nos la da el usuario
        // nos va a tirar el mismo cartel no importa q escriba el usuario
         default:
           alert("Este mes tiene más de 30 días.");
           break;
        

       
        


    }
	


}//FIN DE LA FUNCIÓN