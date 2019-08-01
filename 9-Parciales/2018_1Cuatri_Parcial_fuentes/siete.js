function mostrar()
{
  var sexo;
  var nota;
  var acumMas = 0
  var notabaja = 0;
  var sexobajo = 0;
  var flag = 0;


  nota = parseInt(prompt("ingrese nota"));
  sexo = prompt("ingrese sexo: ");
  
  
  for( var i = 0 ; i <=5 ; i++ ){  

   while(nota>0 && nota<=10 && isNaN(nota)){
    
    nota = parseInt(prompt("nota"));
     
      while (sexo == "F" || sexo =="M" || sexo =="m" ||  sexo == "f"){
      
      sexo = prompt("ingrese sexo: ");
    
    }break;


  }
}

    if(nota<notabaja || flag==0){

      notabaja = nota;
      sexobajo = sexo;
      flag = 1;
    }

    if(sexo="M"&& nota>6){
      
      acumMas = nota + acumMas;
    }
    nota = nota / 5;
  
  alert("nota mas baja "+ notabaja +" promedio total: " + nota + "varones mayor a " + acumMas);
}
