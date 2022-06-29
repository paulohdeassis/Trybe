const {books} = require('./books.js')

function reduceNames() {
  // escreva seu código aqui
 
  const getAuthorsname = (acc, number) => acc += `, ${number.author.name}`;
  const authorsNames =  books.reduce(getAuthorsname)
   

  return authorsNames
}

console.log(reduceNames())