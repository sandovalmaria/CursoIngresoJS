function mostrar()
{

// creo la variable y prompt pido q ingrese f o m 
var sexo = prompt("ingrese f ó m .");


//al tomar f o m los toma en minusculas... asi las toma en mayosculas tambien
//mientras sexo sea diferente a alguna de las opciones... va a entrar al bucle
while( sexo!="m" && sexo != "f" && sexo !="M" && sexo!="F")
{
    // alerta 
    alert("Sexo incorrecto");

    //vorver a pedir x prompt  y volver a crear la variable SEXO para q se asigne el valor
    sexo = prompt("Reingrese sexo f o m");

}

// la variable I visualiso a traves de la casilla de ID
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN