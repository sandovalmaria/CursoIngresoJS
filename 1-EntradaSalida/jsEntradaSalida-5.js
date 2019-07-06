/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //genere 2 variables (nombre y edad)
    var nombre;

    var edad;


    //guarda en nombre lo q el usuario escribio en el ID (siempre se lee <== de izquierda a derecha)
    nombre = document.getElementById("elNombre").value;

    edad = document.getElementById("laEdad").value;
    
    //en la alerta sale lo q esta entre comillas + nombre + edad
    alert("Usted tiene " + nombre + " y tiene " + edad + " años");


}

