/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	// primero cree la variable "nombre"
	var nombre;

	
		// prompt genera el cartel para q yo escriba el nombre (lo guarda en var nombre)
		nombre = prompt("elNombre");


		//colocando primero document.getElementById("elNombre").value y luego el nombre
		//le indique q lo q quiero es q me muestre "var nombre" dentro de la casilla ID
		document.getElementById("elNombre").value = nombre;

}

