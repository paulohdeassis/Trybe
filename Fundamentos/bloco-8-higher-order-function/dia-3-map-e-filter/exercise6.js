const {books} = require('./books.js')

function oldBooks() {
    // escreva seu código aqui
    const olderBooks = []
    const booksOver60Years = books.map((book) => {
        if( book.releaseYear < 1962){
            olderBooks.push(book.name)
        }
    })

    return olderBooks;
  }

console.log(oldBooks())