function mostrar()
{

	var contador;
	var acumulador=0;
	var respuesta='si';
	

	do{

		
		if(contador !=respuesta){

		contador = parseInt(prompt("Ingrese los numeros a sumar, al terminar ingrese si: "));

		acumulado = contador + acumulado;
		

					}

		else{

		parseInt(document.getElementById("suma").value) = acumulado;
	
		}

	} while( contador==respuesta);



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN