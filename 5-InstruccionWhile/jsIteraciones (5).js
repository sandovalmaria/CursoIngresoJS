function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while( sexo!="m" && sexo != "f" && sexo !="M" && sexo!="F")
{
    alert("Sexo incorrecto");
    sexo = prompt("Reingrese sexo f o m");

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN