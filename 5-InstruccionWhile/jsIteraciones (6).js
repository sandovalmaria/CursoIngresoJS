function mostrar()
{
	//la variable numero la creo para guardar los 5 numeros q ungrese el usuario
	var numero;

	// variable suma para guardar los resultados (le soy valor 0 para q tenga algo contra lo q sumar)
	var suma = 0;

	//para sacar el promedio divido x 5
	var promedio;

	// en contador guardo el numero de veces q se ejecuta el while
	var contador = 0
	
	
	// con contador menor a 0 entra en el bucle y al ser contador ++ se va a sumar una sola 
	// vez con cada iteracion
	while (contador<5)
	
	{

	// pido los 5 numeros enteros
	numero = parseInt(prompt("ingrese un numero: "));
	
	// la primera vez va a ser 0+el numero ingresado... 
	//la sig iteracion va a ser el resultado mas el segundo numero etc.

	suma = suma + numero;

	// para q haga 5 iteraciones
	contador ++;


	// me divide x5 cada resultado
	promedio = suma/5;
	}
	
	
	// me muestra el ultimo resultado x ID
	document.getElementById("suma").value = suma;
	
	document.getElementById("promedio").value =  promedio;
	
	

}//FIN DE LA FUNCIÓN