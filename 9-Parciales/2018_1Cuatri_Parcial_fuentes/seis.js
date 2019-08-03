function mostrar()
{

    var hora;
    var m1= "es de noche";
    var m2 = " a dormir";

    hora = document.getElementById("laHora").value;
  
    switch(hora)
    {
          case("6"):
          case("7"):
          case("8"):
          case("9"):
          case("10"):
          case("11"):
          {
              alert("Es de mañana");
              break;
          }
  
          case("12"):
          case("13"):
          case("14"):
          case("15"):
          case("16"):
          case("17"):
          case("18"):
          case("19"):
          {
              alert("Es de tarde");
              break;
          }
          case("0"):
          case("1"):
          case("2"):
          case("3"):
          case("4"):
          case("5"):
          case("6"):
          case("20"):
          case("21"):
          case("22"):
          case("23"):
          case("24"):
          {
              if(hora<6 && hora>0)
              {
                alert(m1);
              }
              else
              {
                alert(m1 + m2);
              }
              break;
          }
          default:
            {
                alert("No es un horario valido");

            }

          
            
        }
        
        
        
        
          
  

}
