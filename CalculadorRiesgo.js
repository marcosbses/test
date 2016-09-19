
function funcion(){
pintarResultado(parseInt(calcularRiesgo()));
$("#resultado").css("font-weight","bold");
}

function calcularRiesgo(){
var actividad=$("select").val();
var riesgoBase;
if(actividad=="analReceptivo"){
riesgoBase=138;
}
if(actividad=="analInsertivo"){
riesgoBase=11;
}
if(actividad=="vaginalReceptivo"){
riesgoBase=8;
}
if(actividad=="vaginalInsertivo"){
riesgoBase=4;
}
var multip=1;
if($("input#condon").prop("checked")){
multip=multip*0.28;
}
if($("input#prep").prop("checked")){
multip=multip*0.08;
}
if($("input#std").prop("checked")){
multip=multip*2.65;
}
if($("input#art").prop("checked")){
multip=multip*0.044;
}
return riesgoBase*multip;
}


function pintarResultado(calculo){
if(calculo<=1){
$("#resultado").fadeOut(function funcion(){$(this).text("  "+calculo+" transmisiones cada 10 mil exposiciones (Riesgo muy bajo)").css("color","#007B19");//verde
}).fadeIn();
return;
}
if(calculo<4){
$("#resultado").fadeOut(function funcion(){$(this).text("  "+calculo+" transmisiones cada 10 mil exposiciones (Riesgo bajo)").css("color","#D2CF09");//amarillo
}).fadeIn();
return;
}
if(calculo<11){
$("#resultado").fadeOut(function funcion(){$(this).text("  "+calculo+" transmisiones cada 10 mil exposiciones (Riesgo medio)").css("color","#D68312");//naranja
}).fadeIn();
return;
}
if(calculo<138){
$("#resultado").fadeOut(function funcion(){$(this).text("  "+calculo+" transmisiones cada 10 mil exposiciones (Riesgo alto)").css("color","#D61212");//rojo
}).fadeIn();
return;
}
$("#resultado").fadeOut(function funcion(){$(this).text("  "+calculo+" transmisiones cada 10 mil exposiciones (Riesgo extremo)").css("color","#B912D6");//violeta
}).fadeIn();

}

