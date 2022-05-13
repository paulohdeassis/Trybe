

/*=========================== Primeiro exercício=============================*/

/*const myName = 'Paulo '
 
const birthCity = 'Resplendor'

let birthYear = 1998

birthYear = 2030
 
console.log(birthYear)*/



/*=========================== Segundo exercício=============================*/

/*
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';


console.log( typeof patientId   )*/


/*=========================== Terceiro exercício=============================*/
/*
const base = 5 
let height = 8

const area = base * height

console.log(area)

const perimeter = base + base + height + height

console.log(perimeter)*/


/*=========================== Quarto exercício=============================*/

/*const notaCandidato = 64

if (notaCandidato >= 80){
  console.log('Parabéns, você foi aprovado')
}

else if (notaCandidato <80 && notaCandidato >=60 ){
  console.log('Você está na lista de espera')

}


else if (notaCandidato <=60 ){
  console.log('você foi reprovado')

}*/



/*=========================== Quinto exercício=============================*/

/* const currentHour = 15;

let message = '';

if ( currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir"
}

else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D"
}

else if (currentHour >= 14 && currentHour < 18){
 message = " Vamos fazer um bolo pro café da tarde?"

}

else if (currentHour >=11 && currentHour < 4){
  message = "Hora do almoço!!!"
}

else if (currentHour >=4 && currentHour < 11){
  message = "Hmmm, cheiro de café recém passado"
}
console.log(message) */


/*=========================== Sexto exercício=============================*/
/*
let weekDay = "quarta-feira"

if ( weekDay == 'segunda-feira' ||'terça-feira' || "quarta-feira" || "quinta-feira" || "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}

else{
  console.log('FINALMENTE, descanso merecido UwU')
}
*/


/*=========================== Sétimo exercício =============================*/


let statusCandidato = 'Lista'

 switch (statusCandidato){

    
    case'Aprovado':
      console.log('Aprovado');
     break;

    case'Lista':
      console.log('Lista');
      break;

    case'Reprovado':
      console.log('Reprovado');

    
    default:
      console.log('Não se aplica');
      break;  

 }