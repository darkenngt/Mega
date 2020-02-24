var pantalla;
var porCodName=$('#CodigoA').val();
var porTagName=$('#NomA').val();
$(document).ready(function(){
   $("#uno").focus("click",function(){
     $("#resultado").append("1");
  });
  $("#dos").on("click",function(){
    $("#resultado").append("2");
  });
  $("#tres").on("click",function(){
    $("#resultado").append("3");
  });
  $("#cuatro").on("click",function(){
    $("#resultado").append("4");
  });
  $("#cinco").on("click",function(){
    $("#resultado").append("5");
  });
  $("#seis").on("click",function(){
    $("#resultado").append("6");
  });
  $("#siete").on("click",function(){
    $("#resultado").append("7");
  });
  $("#ocho").on("click",function(){
    $("#resultado").append("8");
  });
  $("#nueve").on("click",function(){
    $("#resultado").append("9");
  });
  $("#cero").on("click",function(){
    $("#resultado").append("0");
  });
  $("#punto").on("click",function(){
    $("#resultado").append(".");
  });

  $("#reset").on("click",function(){
    resetear();
  });

  $("#igual").on("click",function(){

       pantalla = $("#resultado").html();
       this.porCodName=$('#CodigoA').val();
       this.porTagName=$('#NomA').val();
       EnviarDatos();
  });
});

//Operaciones
function limpiar(){
 $("#resultado").html("");
}

function resetear(){
 $("#resultado").html("");
 pantalla = 0;
 operacion = "";
}

function EviarDatos(){
  if(pantalla== "")
    {
     alert("Debe Ingresar cantidad");
     //Location.reload();
   }else
  console.log(porCodName, porTagName, pantalla);

};
 resetear();
 //Location.reload();
 //$("#resultado").html(porCodName, porTagName, pantalla);
