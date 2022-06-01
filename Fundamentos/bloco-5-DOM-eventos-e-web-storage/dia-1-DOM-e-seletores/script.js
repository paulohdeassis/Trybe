/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
    (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


 let paragraph = document.getElementsByTagName('p')
 let container = document.querySelector('.main-content')
 let centerContainer = document.querySelector('.center-content')
 let title = document.getElementsByTagName('h1')

 insertDescription(paragraph, 1, 'Um programador e designer atuante no mercado')

 insertDescription(title, 0, 'Teste da função')

 changeBackground (container, 'rgb(76,164,109)')

 changeBackground (centerContainer, 'white')

 logElement(paragraph)

makeLowerCase(paragraph)

//Recebe um elemento, o index e substitui o innertext pela string que for passada como parâmetro
 function insertDescription (element,index,text){
   
    element[index].innerText = text


 }


//Recebe um elemento e substitui a cor de fundo dele pela cor passada como parâmetro
 function changeBackground (element, color){
   
 element.style.backgroundColor = color

 }

 
/*recebe um elemento e percorre todos os indexes desse elementos, 
usando o método toLowerCase pra tornar as strings dentro deles em minúsculas*/
 function makeLowerCase (element){

  for ( let index = 0; index < element.length; index+=1){    
  
   element[index].innerText= element[index].innerText.toLowerCase()
   }

}

//recebe um elemento, percorre todos os idexes dele e retorna os valores do innerText de cada um deles
function logElement(element){

   for (let index = 0; index < element.length; index+=1){
      console.log(element[index].innerText)
   }
 
}

