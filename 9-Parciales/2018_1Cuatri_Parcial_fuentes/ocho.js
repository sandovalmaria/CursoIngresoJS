function mostrar()
{
    var seguir;
    var letra;
    var seguir;
    var contadoPares =0;
    var contadorImprares= 0;
    var contadorCeros = 0;
    var contadorPos= 0;
    var acumPos = 0;
    var acumNeg = 0;
    var maximo;
    var letraMax;
    var letraMin;
    var Flag = 0;



    letra =(prompt("ingrese un numero"));

    numero = parseInt(prompt("ingrese un numero"));

    while(numero<-100 || numero > 100 || isNaN(numero))
    {
       
       while(numero!=0)
       {
            numero = numero / 2
           
           if(numero%0)
            {
               contadoPares++;
            }
            else
            {
                contadorImprares++;
            }
        }
        
        if (numero>0)
        {
            acumPos = numero/5;
        }
        else if(numero<0)
        {
            acumNeg = acumNeg + numero;
            
        }
        else{
            
            contadorCeros = contadorCeros++
        }
        while()
    }
    



}
