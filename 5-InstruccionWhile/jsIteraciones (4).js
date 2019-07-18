function mostrar()
{

	//creo una variable, pido un numero por prompt y le asigno valor numero (parseInt)

	var i = parseInt(prompt("ingrese un número entre 0 y 10."));


	// "siempre y cuando I sea menor o igual a 1 O I sea mayor o igual 10" entra
	// tambien se puede usar "while( !(i>=1 || i<=10) )  " estaria dando una afirmacion y luego negandola
	while(i<=1 || i>=10){

		// la alerta debe estar dentro del while
		alert("Ingrese un numero entre 0 y 10");


		// SE LE DEBE VOLVER ASIGNAR A CLAVE EL VALOR DE PROMPT PARA Q SE PISE
    	// O SINO VA A TOMAR EL PRIMER VALOR Y ENTRA EN UN BUCLE INFINITO
		i = parseInt(prompt("ingrese un número entre 0 y 10."))

	 	}

		 // la variable I visualiso a traves de la casilla de ID
	 document.getElementById("Numero").value = i;
	



}//FIN DE LA FUNCIÓN