
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
fadeResultado(calculo,"#007B19","muy bajo");
return;
}
if(calculo<4){
fadeResultado(calculo,"#D2CF09","bajo");
return;
}
if(calculo<11){
fadeResultado(calculo,"#D68312","medio");
return;
}
if(calculo<138){
fadeResultado(calculo,"#D61212","alto");
return;
}
$(".resultado").fadeOut(function funcion(){$("#resultadoNumero").text("  "+calculo);$("#resultadoTexto").text(" transmisiones cada 10 mil exposiciones (Riesgo extremo)");$(this).css("color","#B912D6");//violeta
}).fadeIn();

}

function fadeResultado(calculo,color,riesgo){
$(".resultado").fadeOut(function funcion(){$("#resultadoNumero").text("  "+calculo);$("#resultadoTexto").text(" transmisiones cada 10 mil exposiciones (Riesgo "+riesgo+")");$(this).css("color",color);
}).fadeIn();
}
