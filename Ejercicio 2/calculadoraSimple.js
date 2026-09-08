import rl from "readline-sync"

let op=1;
do{
const  num1=rl.questionInt("Ingresa el primer numero: ");
const  operando=rl.question("Ingresa el operando: ");
const  num2=rl.questionInt("Ingresa el segundo numero: ");
let resultado=0;

/*console.log("Ingrese un numero");
console.log("Ingrese otro numero");
console.log("1 = +, 2 = -, 3 = x, 4 = /");*/

switch(operando){
case "+":{
    resultado=num1+num2;
    break;
}
    case "-":{
        resultado=num1-num2;
         break;
    }
        case "*":{
            resultado=num1*num2;
             break;
        }
            case "/":{
                if(num2!=0){
                resultado=num1/ num2;
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
console.log("Ingrese 1 si desea hacer otra operacion");
console.log("Ingrese 0 si desea  salir");
op=rl.questionInt("1 o 0: ");
}while(op==1);