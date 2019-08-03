/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto = 20; 
var contadorIntentos = 0;
var numero;
var seguir = "s"

function comenzar()
{
  //Genero el número RANDOM entre 1 y 100
  numero = Math.floor(Math.random()*10 + 1);
  
  while(numeroSecreto == 20)
    {

      if( numero <=20)
      {
        
        numero = numeroSecreto - numero;

        alert("Falta " + numero + " para llegar al numero secreto ¿intentar nuevamente?");

        seguir = "s"

        numero = parseInt(document.getElementById("numero").value);


      }
      else
      {

        numero = numerosecreto + numero;

        alert("Te pasaste por "+ numero + "¿intentar nuevamente?" );

        seguir = "s"
        numero = parseInt(document.getElementById("numero").value);

      }

      contadorIntentos++;

      
    }

    alert("Felicidades lo lograste y solo tomo " + contador);





		//alert(numeroSecreto );
	

}

function verificar()
{
	
	
}