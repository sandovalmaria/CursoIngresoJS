/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
    var importe;

    var descuento;

    var resultado;

        //busco el importe q ungreso el usuario a traves de ID u lo guardo en "importe"
        importe = parseInt(document.getElementById("importe").value);


        //para obtener el porcentaje multiplico x el 0.x
        descuento = importe * 0.25;

        //en la carpeta resultado (si quiero agregar %x de aumento sumo y descontar %x resto)
        resultado = importe - descuento;


        //lo que esta en "resultado" lo proyecta al ID con "document.getElemenById"
        document.getElementById("resultado").value = resultado;




}
