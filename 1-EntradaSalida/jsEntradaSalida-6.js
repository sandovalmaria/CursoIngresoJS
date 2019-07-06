/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    // cree 3 casillas 
    var num1;

    var num2;

    var resultado;

        // parseInt transforma lo q hay en la casilla en numero entero
        // encerrar (document.getElementById("numeroUno").value) entre parentesis para indicarle q lo 
        //q esta adentro es el numero 
         num1 = parseInt(document.getElementById("numeroUno").value);

         num2 = parseInt(document.getElementById("numeroDos").value);

         // solo suma  si previamente lo transformamos en numero
         // sino lo toma como scrint (numero + numero = numero)
        alert(num1 + num2);





}

