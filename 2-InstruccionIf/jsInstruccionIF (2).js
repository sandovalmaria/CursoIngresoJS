function mostrar()
{
//creo variable edad
var edad;

// la transformo a numero (parseInt); le indico q la busque en ID "edad" y la guarde en var edad
edad = parseInt(document.getElementById("edad").value);

// si edad es mayor ">" de 18 aparece la alerta
if (edad > 18)

{
    alert("Es mayor de edad");

}




}//FIN DE LA FUNCIÓN