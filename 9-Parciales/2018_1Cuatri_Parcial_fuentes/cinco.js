function mostrar()
{

    var mercurio;
    var venus;

    var tierra;

    var marte;
    var jumpiter;
    var saturno;
    var urano;
    var neptuno;
    var pluton;
    var planetas;

    planetas = prompt("Ingrese un planeta");


 switch(planetas)
    {
        case("mercurio"):
        case("venus"):
        {
            alert("Acá hace más calor q la tierra");
            break;
        }
        case("tierra"):
        {
            alert("Aca vivimos");
            break;
        }
        case("marte"):
        case("jupiter"):
        case("saturno"):
        case("urano"):
        case("neptuno"):
        case("pluton"):
        {
            alert("Acá hace más frio q la tierra");
            break;
        }
        default:
        {
            alert("eso no es un pleneta");
            break;
        }

    }


}
