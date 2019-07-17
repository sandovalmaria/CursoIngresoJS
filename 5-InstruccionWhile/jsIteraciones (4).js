function mostrar()
{

	var i = parseInt(prompt("ingrese un número entre 0 y 10."));


	while(i<=1 || i>=10){

		alert("Ingrese un numero entre 0 y 10");
		i = parseInt(prompt("ingrese un número entre 0 y 10."))

	 	}

	 document.getElementById("Numero").value = i;
	



}//FIN DE LA FUNCIÓN