function mostrar()
{


// pide clave por prompt
var clave = prompt("Ingrese Clave");


// ENTRA EN EL BUCLE SIEMPRE Y CUANDO LA CLAVE INGRESADA SEA DIFERENTE A utn750
// tambien se puede usar "while( !(clave == "utn750")   )  " estaria dando una afirmacion y luego negandola
while(clave != "utn750"){

    // la alerta debe estar dentro del while
    alert("Clave incorrecta");

    // SE LE DEBE VOLVER ASIGNAR A CLAVE EL VALOR DE PROMPT PARA Q SE PISE
    // O SINO VA A TOMAR EL PRIMER VALOR Y ENTRA EN UN BUCLE INFINITO
    clave = prompt("Reingrese clave: ");


}

//Este aler debe estar fuera de while para q se ejecute cuando la clave sea correcta
alert("Clave correcta");

}//FIN DE LA FUNCIÓN
