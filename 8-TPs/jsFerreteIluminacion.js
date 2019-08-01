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
    var precio = 35;
    var marca;
    var descuento = 0;
    var precioFinal;
    var iibb;

    lamp = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;
    descuento = parseInt;
    
    
    switch(lamp){

        case(1):
        {
            if(lamp==1){
            
            lamp = precio;

            document.getElementById("precioDescuento").value = lamp;

            }
            break;
        }
        
        case(2):
        {
            if (lamp==2){

            descuento = precio *  lamp;

            document.getElementById("precioDescuento").value = descuento;
            
            }

            break;
        }

        case(3):
        {
            if(lamp == 3 && marca == "ArgentinaLuz"){

                descuento = precio * 0.15;

                precioFinal = (precio - descuento)*lamp;
                document.getElementById("precioDescuento").value = precioFinal;
            
            }
            else if(lamp == 3 && marca == "FelipeLamparas"){

                descuento = precio * 0.10;

                precioFinal = (precio - descuento)*lamp;
                document.getElementById("precioDescuento").value = precioFinal; 
            }

            else{

                descuento = precio * 0.05;

                precioFinal = (precio - descuento)*lamp;
                document.getElementById("precioDescuento").value = precioFinal;
               
            }

            break;
        }
           
        
        case(4):
        {
            if (lamp == 4 && marca == "FelipeLamparas" || marca == "ArgentinaLuz"){

                descuento = precio * 0.25;

                precioFinal = (precio - descuento)*lamp;

                document.getElementById("precioDescuento"). value = precioFinal;
            
                }
            else{

                descuento = precio * 0.20;

                precioFinal = (precio - descuento)*lamp;

                document.getElementById("precioDescuento").value = precioFinal;
                
            }
            break;
        }
        
        case(5):
        {
            if(lamp == 5 && marca == "ArgentinaLuz"){

                descuento = precio * 0.40;

                precioFinal = (precio - descuento)*lamp;

                document.getElementById("precioDescuento").value = precioFinal;
            

                }
            else{

                descuento = precio * 0.30;

                precioFinal = (precio - descuento)*lamp;

                document.getElementById("precioDescuento").value = precioFinal;
            }
            break;
        }

        default:
        {
            if(lamp >=6){

            descuento = precio * 0.50;

            precioFinal = (precio - descuento)*lamp;

            document.getElementById("precioDescuento").value = precioFinal;
            
            }
            break;

        }
    }


    if(precioFinal>=120){

        descuento = precio * 0.10;

        iibb = (precio + descuento)*lamp;

        document.getElementById("precioDescuento").value = iibb;

    alert("IIBB Usted pago " + iibb + " siendo " + descuento + " el impuesto que se pagó");
    }




 
}