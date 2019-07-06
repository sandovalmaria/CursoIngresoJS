/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;

    var aumento;

    var nuevoSueldo;


    sueldo = parseFloat(document.getElementById("sueldo").value);

    aumento = (sueldo * 10) / 100 + sueldo;

    nuevoSueldo = aumento;

    document.getElementById("resultado").value = nuevoSueldo;





    // toma el Nº escrito en la primer casilla
         //sueldo = parseFloat(document.getElementById("sueldo").value);

// 0.algo es la forma de calcular el % de un nº
         //aumento = sueldo * 0.1;


//calcula el sueldo mas el %x de aumento
        //nuevoSueldo = sueldo + aumento;

              
                
    // para q se guarde en la casilla de ID 
       //document.getElementById("resultado").value = nuevoSueldo;


}
