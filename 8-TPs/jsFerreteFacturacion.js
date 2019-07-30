/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


// TENGO Q DECLARAR VARIABLES EN CADA FUNCION!!!
function Sumar () 
{
var num1;
var num2;
var num3;
var resultado;

//transformo a numero los numeros ingresados en los ID
num1 = parseInt(document.getElementById("PrecioUno").value);
num2 = parseInt(document.getElementById("PrecioDos").value);
num3 = parseInt(document.getElementById("PrecioTres").value);

    resultado = num1 + num2 + num3; //suma
                    
        alert("la suma es " + resultado); //muestra por alerta


}


//saco el promedio creando nuevas variables x mas q se usen los mismos numeros    
function Promedio () 
{
 
var num1;
var num2;
var num3;
var promedio; //cree una variable extra para esta funcion
var resultado;

num1 = parseInt(document.getElementById("PrecioUno").value);
num2 = parseInt(document.getElementById("PrecioDos").value);
num3 = parseInt(document.getElementById("PrecioTres").value);

    promedio = num1 + num2 + num3
    
    resultado = promedio / 2; //sumo y divido x 2


    alert("El promedio es " + resultado);

	
}
function PrecioFinal () // el iva es del 21% creo esa variable
{
var num1;
var num2;
var num3;
var resultado;
var iva = 0.21;

num1 = parseInt(document.getElementById("PrecioUno").value);
num2 = parseInt(document.getElementById("PrecioDos").value);
num3 = parseInt(document.getElementById("PrecioTres").value);



        resultado = num1 + num2 + num3;

        iva = resultado + iva;
   
        alert("El precio final es " + iva);
   
    }


   

	
