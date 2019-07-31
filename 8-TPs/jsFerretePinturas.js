/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //formula de fahrenheit a centigrados (f"X"-32) 5/9 = "X"c
    
    var far;
    var cent;
    

    far = parseFloat(document.getElementById("Temperatura").value);

    cent = [(far-32) *5] /9;

    alert(far +" grados Fahrenheit son " + cent + " Centigrados");


}

function CentigradosFahrenheit () 
{
    //formula de centigrados a fahrenheit (c"X" × 9/5) + 32 = "X"f

    var far;
    var cent;
    

    cent = parseFloat(document.getElementById("Temperatura").value);

    far = (cent * 9/5) +32;

    alert(cent + " grados Centigrados son " + far + " Fahrenheit");

    
}
