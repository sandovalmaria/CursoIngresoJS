function mostrar()
{
    var marca;
    var marcaMax;
    var marcaMin;
    var peso;
    var temperatura;
    var temperaturaPares = 0;
    var pesoMax = 0;
    var pesoMin = 0;
    var menosCeros = 0;
    var promedio = 0;
    var seguir = "s";
    var flag = 0;

    
    while(seguir=="s"){
        marca = prompt("ingrese Marca");
        temperatura = parseInt(prompt("Ingrese temperatura: "));
        peso = parseInt(prompt("Ingrese un peso: "));

        if(temperatura >=-30 && temperatura<=30 )
        {

            if(temperatura % 2 == 0)
            {
                temperaturaPares++;
            }

            if(temperatura<0)
            {
                menosCeros++;
            }

        }
        if(peso>=1 && peso<=100)
        {
            if(peso>pesoMax || flag==0)
            {
                pesoMax = peso;
                marcaMax = marca;
    
            }   
            if(peso<pesoMin || flag ==0)
            {
                pesoMin = peso;
                marcaMin = marca;
            }

            flag = 1;
        
        }
    
    
        seguir =prompt("desea seguir?");
    }

    promedio = (pesoMax + pesoMin) /5;


    document.write("La cantidad de temperaturas pares es " + temperaturaPares + "<br>");
    document.write("La marca del producto más pesado es " + marcaMax + "<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados son " + menosCeros + "<br>");
    document.write("El promedio del peso de todos los productos es de "+ promedio + "<br>");
    document.write("El peso máximo es " + pesoMax + " y el mínimo es "+ pesoMin + "<br>" )
 
 
}
