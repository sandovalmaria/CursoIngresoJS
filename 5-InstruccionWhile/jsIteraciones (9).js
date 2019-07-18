function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var flag = 0;
	var respuesta='s';
	
	// no se la cantidad de iteraciones
	do
		{
		numero = parseInt(prompt("Ingrese un numero:"));
		// pido un numero

		while(isNaN(numero)){ // si ni es un numero inicio este bucle

			alert("Eso no es un numero");

			numero = parseInt(prompt("Ingrese un numero, al terminar ingrese s: "));

			}

			// si el numero ingresado es mayor al maximo entro aca
			// la primera vez numero es undefainer pero flag es verdadero; la primera vez entra 
			if( numero> maximo || flag ==0){ //x aca pero se pisa su valor x el otro if

				maximo = numero;
			}
			// tambien el flag nos hace entrar aca xq su condicion es V y recien aca
			if(numero< minimo || flag==0){ // maximo y minimo resiven un valor
				
				minimo = numero;

				flag = 1 // aca es donde se cambia el valor y no vuelve a entrar x aca
			}

		// pregunto recien aca si quiero ingresar otro numero (fuera de los ifs pero dentro del while)
		respuesta = prompt("quiere ingresar otro numero?");

	

	
	}while(respuesta=='s'); // si la respuesta es igual a S va a volver a entrar al bucle



	// muestro maximo y minimo x ID
	document.getElementById("maximo").value = maximo;

	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN