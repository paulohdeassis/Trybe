const {books} = require('./books.js')

function formatedBookNames() {
    // escreva seu código aqui
    const returnFormatedBook = books.map((book)=>`${book.name} - ${book.genre} - ${book.author.name} ` )

    return returnFormatedBook
}

console.log(formatedBookNames());