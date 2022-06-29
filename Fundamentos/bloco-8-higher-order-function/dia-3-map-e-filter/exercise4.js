const {books} = require('./books.js')

function oldBooksOrdered() {
    // escreva seu código aqui

    const currentYear = 2022

    const getOlderBooks = books.filter((book) => ( currentYear - book.releaseYear ) > 60)

    const filterByOldest = getOlderBooks.sort((a,b) => a.releaseYear - b.releaseYear)

    return filterByOldest;

     
  }

  console.log(oldBooksOrdered())