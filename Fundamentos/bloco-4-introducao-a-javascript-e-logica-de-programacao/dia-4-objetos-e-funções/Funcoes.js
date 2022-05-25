


/*================================ Primeiro Exercício ==================================*/

/*function checkPalpalindrome (string){

   splitString = string.split("")
   reverseString = splitString.reverse()
   resultString = reverseString.join("")



    if ( string == resultString){
       return true
    }

    else {
       return false
    }

        




}

checkPalpalindrome('carta');*/


/*================================ Segundo Exercício ==================================*/


/*function largestIndex (array) {

    let resultIndex = 0
    for (let index in array){

       

       if ( array[index] > resultIndex) {

       resultIndex = array[index]

       }
      

    }

  

  console.log(array.indexOf(resultIndex))
}

largestIndex ([2, 3, 6, 7, 10, 1])*/


/*================================ Terceiro Exercício ==================================*/

/*function smallestIndex (array) {

    let resultIndex = array[0]
    for (let index in array){

       

       if ( array[index] < resultIndex) {

       resultIndex = array[index]

       }
      

    }

  

  console.log(array.indexOf(resultIndex))
}

smallestIndex ([2, 4, 6, 7, 10, 0, -3])*/

/*================================ Quarto Exercício ==================================*/

/*function getLargestName (names){
    
    largestname = ''

    for( let name in names){

        if(largestname.length < names[name].length){
                largestname = names[name]
        }
    }
    
    console.log(largestname)
}

getLargestName (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])*/

/*================================ Quinto Exercício ==================================*/

function findRepeatNumber (numbers){
   
   let repeatNumber = 0
   for( let number in numbers){
      
      for( let index = 0; index > numbers.length; index +=1){

         if ( numbers[number] ==  numbers[index]){

            
             repeatNumber = numbers[number]
         }

      }


   }

   console.log(repeatNumber)
}

findRepeatNumber([2, 3, 2, 5, 8, 2, 3])