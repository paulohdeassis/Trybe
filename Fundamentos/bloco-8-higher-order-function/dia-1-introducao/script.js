
//======================= PRIMEIRO EXERCÍCIO ============================

const returnEmployeeObj = (name) => {
  const fullName = name.toLowerCase();
  const splitedName = fullName.split(' ');
  const generateEmail = splitedName.join('-') + '@trybe.com';
  const employeeObj = { fullname: fullName, email: generateEmail};  

  return employeeObj;
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(returnEmployeeObj));

//======================= SEGUNDO EXERCÍCIO ============================

const generateBet = (betNumber, callback) => {
 const generatedBet = Math.round(Math.random() * (5 - 1)) + 1
 return callback(betNumber, generatedBet);
};

const checkBet = (betNumber, result) => {

  if(betNumber === result) {
    return'Parabéns você ganhou'
  }

  if (betNumber !== result) {
    return 'Tente novamente'
  }

};


console.log(generateBet(5,checkBet))

//======================= TERCEIRO EXERCÍCIO ============================
const RIGHT_ANSWERS =  ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const returnGrades = (correctAnswers, givenAnswers, callback) => {

  return callback(correctAnswers, givenAnswers)

};

const checkGrades = (correctAnswers, givenAnswers) => {
  let grade = 0
  for (let answer in givenAnswers) {    
      if (givenAnswers[answer] === correctAnswers[answer]){
        grade +=1
      } else if (givenAnswers[answer] !== correctAnswers[answer]) {
        grade -=0.5
      } else if (givenAnswers[answer] === 'N.A'){
        grade -=0
      }    
  }
return grade
};

console.log(returnGrades(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGrades))