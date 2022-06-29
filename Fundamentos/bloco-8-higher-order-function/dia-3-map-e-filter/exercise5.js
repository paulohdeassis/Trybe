const {books} = require('./books.js')

function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
  const authorsNames = []
   books.forEach((book) => {
   if( book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
    authorsNames.push(book.author.name)
   }
    })
 

    const orderedAuthors = authorsNames.sort()

    return orderedAuthors
}

console.log(fantasyOrScienceFictionAuthors())