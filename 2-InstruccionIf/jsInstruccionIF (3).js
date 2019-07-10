function mostrar()
{
//tomo la edad  

    var edad;

    edad = parseInt(document.getElementById("edad").value);
    
    // no cerrar con ";" el if sino no se ejecuta
        if (edad>=18)
    
             {
        
                alert("esta persona es mayor de edad");
             }
    

    // "else" no lleva condicion ya q si el if es falso se ejecuta el else
        else
    
            {
            
                 alert("Esta persona es menor de edad");

            }

}//FIN DE LA FUNCIÓN