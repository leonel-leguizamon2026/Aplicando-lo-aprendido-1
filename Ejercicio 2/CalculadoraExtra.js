import rl from "readline-sync";

//const  opcion = rl.question("holaaaa")
//const id = rl.quetionInt("ingres")
let operando
let  resultado=rl.questionInt("Ingresa el primer numero: ");
do{
 operando=rl.question("Ingresa el operando: ");
if(operando==""){
    break;
}
const  num2=rl.questionInt("Ingresa el segundo numero: ");


/*console.log("Ingrese un numero");
console.log("Ingrese otro numero");
console.log("1 = +, 2 = -, 3 = x, 4 = /");*/

switch(operando){
case "+":{
    resultado=resultado+num2;
    break;
}
    case "-":{
        resultado=resultado-num2;
         break;
    }
        case "*":{
            resultado=resultado*num2;
             break;
        }
            case "/":{
                if(num2!=0){
                resultado=resultado/ num2;
                 }
                 else{
                    console.log("Indefinido ");
                 }break;
            }
  default:{
    console.log("valor invalido");
  }
}
console.log("resultado:",resultado);

}while(operando!="");