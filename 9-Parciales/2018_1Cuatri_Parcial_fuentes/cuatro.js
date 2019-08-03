function mostrar()
{
    var num1;
    var num2;
    var resultado;


    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese un numero"));

    if(num1>num2)
    {
        resultado = num1 - num2;
        alert(resultado);
    }
    else if(num1<num2)
    {
        resultado = num1 + num2;
        alert(resultado);
    }
    
    else
    {
        alert(num1 +""+ num2);
    }

    if(resultado>10)
    {
        alert("la suma es " + resultado + " y supero el 10");
    }
    
}
