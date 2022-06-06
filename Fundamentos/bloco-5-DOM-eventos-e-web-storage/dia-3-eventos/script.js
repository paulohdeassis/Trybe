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
 
let daysOfHolidays = ['24','25','31']
  
let fridayDates = ['4', '11', '18', '25']
  
  
createMonthDays(dezDaysList,'day','#days', daysOfHolidays, fridayDates)
createButtons('Feriados','btn-holiday', '.buttons-container')


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

function createButtons (text, id, parent){
  let elementParent = document.querySelector(parent)

  let newBtn = document.createElement('button')  

  newBtn.setAttribute('id',id); 

  elementParent.appendChild(newBtn) 

  createdBtn = document.querySelector('#'+id)

  createdBtn.innerText = text
  
  

}

function highlightHolidays( highlightedColor, button){

  document.querySelector(button).addEventListener('click', function(){

    let holidayElements = document.querySelectorAll('.holiday')

    for (let index = 0; index < holidayElements.length; index +=1){      

      holidayElements[index].style.backgroundColor = highlightedColor

    }

  })
}

highlightHolidays ("ccff00", '#btn-holiday')