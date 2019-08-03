function mostrar()
{
var precio;
var descuento;
var precioFinal;

    precio = parseInt(prompt("Ingrese el precio:"));
    descuento = parseInt(prompt("Ingrese el % de descuento: "));

    descuento = (descuento * precio)/100;

    precioFinal = precio - descuento;

    alert("El precio final es de $" + precioFinal .toFixed(2));
}
