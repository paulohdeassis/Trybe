


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


/*function findRepeatNumber(numbers) {
   let repeatNumber = 0;
   let countNumber = 0;
   let repeatNumberIndex = 0;

   for (let i = 0; i < numbers.length; i += 1) {
       for (let index = 0; index < numbers.length; index += 1){
           if (numbers[i] === numbers[index]) {
               repeatNumber += 1; 
           }
       }
       if (repeatNumber > countNumber) {
           countNumber = repeatNumber;
           repeatNumberIndex = i;
       }
       repeatNumber = 0;
   }
   return numbers[repeatNumberIndex];
}
   

console.log(findRepeatNumber([2, 3, 2, 5, 8, 2, 3]));*/

/*================================ Sexto Exercício ==================================*/

/*function getNumberSum(number){
   let result = 0
   for ( let counter = 0;  counter <= number; counter += 1){

   result += counter 
   }

   console.log(result)
}



getNumberSum(5)*/

/*================================ Sétimo Exercício ==================================*/

/*function findWordEnd(word, end){
   if(word[word.length-2] === end[end.length-2] && word[word.length-1] === end[end.length-1]){
      return true
   }

   else{
      return false
   }
}

console.log(findWordEnd('frango', 'go'))*/