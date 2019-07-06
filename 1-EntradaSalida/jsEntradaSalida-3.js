/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //cree la casilla
    var nombre;


        //busca lo que escribieron en el ID y lo guarda en "var nombre"
        nombre = document.getElementById("elNombre").value;

        
        //sale una alerta con la leyenda entre comillas + lo escribieron en "var"
        alert("Tu nombre es: " + nombre);


	
}


