function mostrar()
{
	//creo la var nota
	var nota;
	
	// Genero el número RANDOM entre 1 y 10  obtengo numero aleatorio 
	nota = Math.floor(Math.random()* 10 + 1);

	//informa si la nota es 9 o mayor
	if (nota >= 9 )

	{
		alert("Nota: " + nota + " Excelente");

	}

	// se fija si la nota es superior a 4 (si entre aca es xq el 9 y 10 y a esta descartado)
	else if (nota >= 4 )

	{
		alert("Nota: " + nota +" APROBÓ");

	}

	// si entra aca es xq la nota es menor a 4
		else
		{
			alert("Nota: " + nota + " desaprobo");
		}


}//FIN DE LA FUNCIÓN