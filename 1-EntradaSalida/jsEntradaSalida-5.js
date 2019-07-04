/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

    var nombre;

    nombre = prompt ("Escribir Nombre:");

    document.getElementById("elNombre").value = nombre;

    var edad;

    edad = prompt ("Escribir edad");

    document.getElementById("laEdad").value =edad;

    
}

