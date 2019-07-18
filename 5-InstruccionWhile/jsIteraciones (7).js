function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var seguir='s';

	// pido un numero y si no es = a "s" entra
	while (seguir =='s'){

		// transfomo la variable en numero
		numero = parseInt(prompt("Ingrese un numero, al terminar ingrese s: "));

		while(isNaN(numero)){ // si no se ingresa un numero inicia este bucle dentro del bucle

				alert("Eso no es un numero");

				numero = parseInt(prompt("Ingrese un numero, al terminar ingrese s: "));

				}

		// acumulador inicia en 0 y suma el numero dado
		acumulador = acumulador + numero;
		
		//contador++ es para q vuelva a iniciar el bucle
		contador++;
		

		// pregunta si desea iniciar otro numero para dar la opcion de poner "s"
		seguir = prompt("desea ingresar otro numero?");

	}



// muestra x ID
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN