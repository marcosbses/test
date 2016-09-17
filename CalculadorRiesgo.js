

function funcion(){
$("#resultado").text(parseInt(calcularRiesgo())+"");

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
return riesgoBase*multip;
}

function crearDialogo(){
$("#dialogo").dialog({title:'Titulo'});
}

