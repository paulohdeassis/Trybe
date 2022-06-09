function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  
  
// Escreva seu código abaixo.


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
 
const daysOfHolidays = ['24','25','31']
  
const fridayDates = ['4', '11', '18', '25'] 

createMonthDays(dezDaysList,'day','#days', daysOfHolidays, fridayDates)

createButtons('Feriados','btn-holiday', '.buttons-container') 

const holidayBtn = document.querySelector("#btn-holiday")

const holidayElements = document.querySelectorAll('.holiday') 

const fridays = document.querySelectorAll('.friday')      

createButtons('Sexta-feira','btn-friday','.buttons-container');

const fridayBtn = document.querySelector('#btn-friday');

holidayBtn.addEventListener('click', highlightHolidays);

fridayBtn.addEventListener('click', changeFridayText);

const days = document.querySelector('#days')

days.addEventListener('mouseover', highlightDays)

days.addEventListener('mouseout',removeHighLight)

AddTask('.my-tasks','Estudar para o projeto')

createLabel ('#ccff00', '.my-tasks', 'task')

// Cria os dias do mês baseado num  array com o número de dias
function createMonthDays(numberOfDays, clas, parent, holidays, fridays ){

  
  let elementParent = document.querySelector(parent)

  for (let index = 0; index < numberOfDays.length; index +=1){
    
    var newLi = document.createElement('li')
    newLi.classList.add(clas)
    newLi.innerText = numberOfDays[index]  
    elementParent.appendChild(newLi)


  }

   let listElement = document.querySelectorAll('.'+clas)

 
//Add class 'Holiday' to the days contained in the holidays parameter
  for (let index = 0; index < listElement.length; index +=1){

    for (let index2 = 0; index2 < holidays.length; index2 +=1){    
  
       if(listElement[index].innerText == holidays[index2]){
        listElement[index].classList.add('holiday')
  
        }

        
      }

  }

//Add the class friday to he days contained in the friday parameter
  for (let index = 0; index < listElement.length; index +=1){

    for (let index2 = 0; index2 < fridays.length; index2 +=1){

      if(listElement[index].innerText == fridayDates[index2]){
        listElement[index].classList.add('friday')
  
        }

    }
  }

      


}

//Cria um botão a partir do texto, id e o parent
function createButtons (text, id, parent){
  let elementParent = document.querySelector(parent)

  let newBtn = document.createElement('button')  

  newBtn.setAttribute('id',id); 

  elementParent.appendChild(newBtn) 

  createdBtn = document.querySelector('#'+id)

  createdBtn.innerText = text
  
  

};

// Muda a cor do fundo dos feriados
function highlightHolidays(){ 
    for (let holiday in holidayElements){
        if(holidayElements[holiday].style.backgroundColor === 'green'){
            holidayElements[holiday].style.backgroundColor = 'rgb(238,238,238)'; 
        } else {
            holidayElements[holiday].style.backgroundColor = 'green';
        };
    };
};

//Muda o texto das sextas-feiras ao cliclar no botão
function changeFridayText(){ 

  let fridayText = 'Sexta-feira'
  for (let friday in fridays){
      if(fridays[friday].innerText === fridayText){
          fridays[friday].innerHTML = fridayDates[friday]
      } else {
          fridays[friday].innerHTML =  fridayText;
      };
  };
};

function highlightDays(event) {

  event.target.style.fontSize = '28px';
  event.target.style.fontWeight = 'bold';
  
};

function removeHighLight (event){

  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '150';


}

function AddTask (parent, task){
  let newTask = document.createElement('span')
  newTask.innerText=task

  elementParent = document.querySelector(parent)

  elementParent.appendChild(newTask)
}

function createLabel (color, parent, clas){

  let newLabel = document.createElement('div')

  newLabel.classList.add(clas)

  newLabel.style.backgroundColor = color

  labelParent = document.querySelector(parent)

  labelParent.appendChild(newLabel)

}

let task = document.querySelector('.task');

let selectedTask = document.getElementsByClassName('task selected');

task.addEventListener('click', function(event){

    if(selectedTask.length === 0){
        event.target.className = 'task selected';

    } else {
        event.target.className = 'task';
    }
});

let taskColor = task.style.backgroundColor;

days.addEventListener('click', function(event){
    let eventColor = event.target.style.color;

    if(selectedTask.length > 0 && eventColor !== taskColor){

    let taskBackground = selectedTask[0].style.backgroundColor;

    event.target.style.color = taskBackground;
    
    } else if(eventColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
    };
});


let appointmentBtn = document.querySelector('#btn-add')

let appointmentInput = document.querySelector('#task-input')

let parent = document.querySelector('.input-container')


appointmentBtn.addEventListener('click',createAppointment)

appointmentInput.addEventListener('keyup', function(event){
  if(event.key === 'Enter' && appointmentInput.value.length > 0){

      let newAppointment = document.createElement('li');

      newAppointment.innerText = appointmentInput.value;

      parent.appendChild(newAppointment);

      appointmentInput.value = '';
  };
});

function createAppointment(){

  const nameOfAppointment = appointmentInput.value

  let appointment = document.createElement('li')

  appointment.innerText = nameOfAppointment

  parent.appendChild(appointment)

  appointmentInput.value = ''

}
