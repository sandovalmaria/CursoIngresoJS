function mostrar()
{
//creo la variable edad 
var edad;

// la transformo a numero (parseInt); le indico q la busque en ID "edad" y la guarde en var edad
edad = parseInt(document.getElementById("edad").value);


// si edad es menor a 13 O mayor a 18 tira el alerta
if (edad < 13 || edad >= 18)

{
    alert("Esta persona no es adolescente");

}


}//FIN DE LA FUNCIÓN