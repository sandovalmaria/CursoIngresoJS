function mostrar()
{
//tomo la edad  

var edad;

// transformo la variable a numero
edad = parseInt(document.getElementById("edad").value);


// El "||" es para "O" (o es menor de 13 O es mayor de 17) no puede ser ambas verdad

    if (edad <13 || edad > 17)

        {

            alert("Esta persona no es un adolescente");
    
        }


// tambien se puede decir como: "  !(edad >= 13 &&  edad <= 17)  " q es la forma de negar
// lo q pusimos entre parentesis (" NO (es mayor q 13 y menor q 17) " entonces no seria adolescente)



}//FIN DE LA FUNCIÓN