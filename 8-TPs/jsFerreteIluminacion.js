/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamp;
    var arg;
    var felipe;
    var descuento;
    var iibb;

    lamp = parseInt(document.getElementById("Cantidad").value);

    
    if(lamp > 5)
    { 
        
        descuento = lamp / 2;

        parseInt(document.getElementById("precioDescuento").value) = descuento;

    }

     while (lamp == 5)  
    {
        if(lamp == arg)
        {
            descuento = lamp / 0,40;

            parseInt(document.getElementById("precioDescuento").value) = descuento;

        }

        else
        {
            descuento = lamp / 0,30;

            parseInt(document.getElementById("precioDescuento").value) = descuento;

        }
    }

    while (lamp == 4)
    {
        if(lamp == arg || lamp == felipe )
        {

            descuento = lamp / 0,25;

            parseInt(document.getElementById("precioDescuento").value) = descuento;

        }

        else
        {
            descuento = lamp / 0,20;

            parseInt(document.getElementById("precioDescuento").value) = descuento;

        }
    }

    while(lamp == 3)
    {
        if(lamp == arg)
        {

            descuento = lamp / 0,15;

            parseInt(document.getElementById("precioDescuento").value) = descuento;
        
        }
        else if(lamp == felipe)
        {
            descuento = lamp / 0,10;

            parseInt(document.getElementById("precioDescuento").value) = descuento;

        }
        else
        {

            descuento = lamp / 0,05;

            parseInt(document.getElementById("precioDescuento").value) = descuento;
        }
    }
    

 	
}
