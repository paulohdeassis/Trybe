const {books} = require('./books.js')


function authorWith3DotsOnName() {
  // escreva seu código aqui
    return books.filter((book) => (
      book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.'
    ))[0].name
  
}

console.log(authorWith3DotsOnName());