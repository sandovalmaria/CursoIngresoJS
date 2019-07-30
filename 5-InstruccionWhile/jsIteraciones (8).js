function mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var flag =0; // si la declaro 0 cuando a entre al bucle negativo va a cambiar a 1 y se queda con 
				 // ese valor por lo tanto si no entro quedo en 0 y abajo lo transformo con 
				 //  el "si el if de flag == 0; entonces negativo es igual a flag
	var numero;
	var seguir='s';
	
	do{ // necesito q entre x lo menos una vez asiq inicio con DO-WHILE

		// pido numero
		numero = parseInt(prompt("Ingrese un numero, al terminar ingrese s: "));

		while(isNaN(numero)){ // si no es un numero inicio este bucle

				alert("Eso no es un numero");

				numero = parseInt(prompt("Ingrese un numero, al terminar ingrese s: "));

				}

				// si numero es menor a 0 son negativos x lo tanto lo multiplico
				if(numero<0){
				
				//negativo * el numero ingresado
				negativo =  numero * negativo;
				
				// flag es bandera (sirve para saber si pase x aca x lo menos una vez)
				flag = 1;
				
				seguir = prompt("desea ingresar otro numero?");

				}

				else{ // si los numeros son positivos caigo aca

					positivo = numero + positivo;

					seguir = prompt("desea ingresar otro numero?");

				}


	} while (seguir =='s')
	


document.getElementById('suma').value=positivo;

	if(flag==0)
	{
		negativo = 0;
	}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN