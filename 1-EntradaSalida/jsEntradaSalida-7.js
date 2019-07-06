/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;

    var num2;

    var resultado;

         num1 = parseInt(document.getElementById("numeroUno").value);

         num2 = parseInt(document.getElementById("numeroDos").value);


         // una vez q establesco las variables, la ruta de ID, y la transformo en numero
         // solo tengo q poner var1 (signo q deseo) var2
         resultado = num1 + num2;

        
        alert("el resultado es: " + resultado);


}

function restar()
{
	
    var num1;

    var num2;

    var resultado;

         num1 = parseInt(document.getElementById("numeroUno").value);

         num2 = parseInt(document.getElementById("numeroDos").value);

       
         resultado = num1 - num2;

        alert("el resultado es: " + resultado);
}

function multiplicar()
{ 
	
    var num1;

    var num2;

    var resultado;

         num1 = parseInt(document.getElementById("numeroUno").value);

         num2 = parseInt(document.getElementById("numeroDos").value);

        
         resultado = num1 * num2;

        alert("el resultado es: " + resultado);
}

function dividir()
{
	
    var num1;

    var num2;

    var resultado;

         num1 = parseInt(document.getElementById("numeroUno").value);

         num2 = parseInt(document.getElementById("numeroDos").value);

        
         resultado = num1 / num2;

        alert("el resultado es: " + resultado);

}

