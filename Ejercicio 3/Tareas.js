import rl from "readline-sync";
import { BuscarTarea, MostrarDetalles, Indice, EditarTarea, MostrarTarea, MTEstado } from "./FuncionesTareas.js";
import { CrearTarea } from "./CrearTarea.js";

const tarea=[];
let op1=0,op2=0


console.log("Por defecto el orden en el que se muestran");
console.log("las tareas es por fecha de creacion");
do{
    //MENU PRINCIPAL
    console.log("              ");
console.log("Hola Leo");
console.log("¿Que desea hacer?");
console.log("[1] ver mis tareas");
console.log("[2] Buscar una tarea");
console.log("[3] Agregar una tarea");
console.log("[4] configuracion");
console.log("[0] salir");
op1=rl.questionInt("Ingrese una opcion:  ");
switch(op1){
 
    //MENU VER MIS TAREAS
 case 1:{ do{
console.log("              ");
console.log("¿Que tareas desea ver?");
console.log("[1] Ver TODAS las tareas");
console.log("[2] Ver las tareas PENDIENTES");
console.log("[3] Ver tareas en CURSO");
console.log("[4]Ver tareas TERMINADAS");
console.log("[5]Ver tareas CANCELADAS");
console.log("[0] Volver");
op2=rl.questionInt("Ingrese una opcion:  ");
 
//Submenu 
switch(op2){
case 1:{
    console.log("              ");
    console.log("Estas son todas las tareas: ");

      MostrarTarea(tarea,rl);


    break};
case 2:{
    console.log("              ");
 console.log("Estas son todas las tareas PENDIENTES: ");

  
    MTEstado("Pendiente",tarea,rl);



    break};
case 3:{
    console.log("              ");
  console.log("Estas son todas las tareas EN CURSO: ");

   MTEstado("En curso",tarea,rl);


    break};
case 4:{
    console.log("              ");
 console.log("Estas son todas las tareas TERMINADAS: ");

   MTEstado("Terminada",tarea,rl);


    break};
    case 5:{
         console.log("              ");
 console.log("Estas son todas las tareas CANCELADAS: ");

  MTEstado("Cancelada",tarea,rl);


        break};
case 0 :{
  
    break};
    default:{
        console.log("              ");
console.log("Valor invalido");
console.log("ingrese una de las opciones en pantalla");
    break};
} }while(op2!=0)
    break};


//BUSCAR TAREA
case 2:{
  BuscarTarea(tarea,rl);
break};



//CREAR TAREA
case 3:{
    CrearTarea(tarea,rl);
break};
//CONFIGURACION



//SALIR
 case 0:{
console.log("Selecciono Salir");
break};

 default:{
console.log("Valor invalido");
console.log("ingrese una de las opciones en pantalla");
 }
};


}while(op1!=0);
console.log("Saliendo");