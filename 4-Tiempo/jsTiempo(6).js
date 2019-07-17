var numero;
var suma = 0;
var promedio;
var contador = 0


while (contador<5)

{
numero = parseInt(prompt("ingrese un numero: "));

suma = suma + numero;
contador ++;

}

promedio = suma/5

document.getElementById("suma").value = suma;

document.getElementById("suma").value =  promedio;


}//FIN DE LA FUNCIÓN fin