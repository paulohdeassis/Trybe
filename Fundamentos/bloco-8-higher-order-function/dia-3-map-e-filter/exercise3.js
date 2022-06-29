const {books} = require('./books.js')

function fantasyOrScienceFiction() {
    // escreva seu código aqui
    const filteredBooks = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica' );

    return filteredBooks
  }

  console.log(fantasyOrScienceFiction());