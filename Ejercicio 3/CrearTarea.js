export function CrearTarea(tarea,rl){

   let nombre, descripcion, estado, dificultad;
    let vencimiento;


   //INGRESA TITULO Y CONTROLA
    do{
 nombre = rl.question("Ingrese el nombre de la tarea: ");
 if(nombre==""){
    console.log("El titulo es obligatorio");
 }else if(nombre.length>100){
    console.log("El titulo no puede superar los 100 caracteres");
 }
    }while(nombre==""||nombre.length>100);

//INGRESA LA DESCRIPCION Y CONTROLA
do{
  descripcion = rl.question("Ingrese la descripcion de la tarea: ");
  if(descripcion.length>500){
    console.log("La descripcion no puede superar los 500 caracteres");
  }
}while(descripcion.length>500);

//INGRESA EL ESTADO DE LA TAREA
do{
 console.log("Estado de la terea");
  estado = rl.questionInt("1=Pendiente, 2=En curso, 3=Terminada, 4=Cancelada:  ");
  if(estado==null){
estado=1;
  }else if(estado != 1 && estado != 2 && estado != 3 && estado != 4){
    console.log("Valor invalido, ingrese de nuevo");
  }
}while(estado != 1 && estado != 2 && estado != 3 && estado != 4);
if (estado == 1){
     estado = "Pendiente";
}else if (estado == 2){
    estado = "En curso";
}else if (estado == 3){
    estado = "Terminada";
}else if (estado == 4){
    estado = "Cancelada";
}

//INGRESA LA DIFICULTAD
do{
 console.log("Dificultad")
 dificultad = rl.questionInt("1=Facil, 2=Medio, 3=Dificil:  ")
 if(dificultad==null){
dificultad=1;
  }else if(dificultad != 1 && dificultad != 2 && dificultad != 3){
    console.log("Valor invalido, ingrese de nuevo");
  }
}while(dificultad != 1 && dificultad != 2 && dificultad != 3);

if(dificultad == 1){
    dificultad = "Facil *";
}else if (dificultad == 2){
    dificultad = "Medio **";
}else if (dificultad == 3){
    dificultad = "Dificil ***";
}

//INGRESA CREACION Y ULTIMA MODIFICACION
   let creacion = new Date();
   let ultimaModificacion = creacion;

// VENCIMIENTO
do{
    vencimiento = rl.question("Ingrese la fecha de vencimiento (DD/MM/AAAA) o presione Enter para dejarla vacia: ");
   if(vencimiento != ""){
    if(vencimiento.length != 10){
        console.log("Formato invalido. Use DD/MM/AAAA");
        }else if(vencimiento[2] != "/" || vencimiento[5] != "/"){
        console.log("Formato invalido. Use DD/MM/AAAA");
        }
    }

}while(vencimiento != "" && 
       (vencimiento.length != 10 || vencimiento[2] != "/" || vencimiento[5] != "/"));
       console.log("       ");
//INSERTA
 tarea.push({
nombre: nombre,
descripcion: descripcion,
estado: estado,
dificultad: dificultad,
creacion: creacion,
ultimaModificacion: ultimaModificacion,
vencimiento: vencimiento
})
console.log("TAREA CREADA");
};
   