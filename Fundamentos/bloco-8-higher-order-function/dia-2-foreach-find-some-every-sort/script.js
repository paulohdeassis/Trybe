const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  //=========================================== PRIMEIRO EXERCÍCIO ============================================
  
  /*// Adicione o código do exercício aqui:

    function authorBornIn1947() {
    // escreva aqui o seu código
    const authorFrom1947 = books.find( (year) => year.author.birthYear === 1947)
    return authorFrom1947.author.name
    
  };


console.log(authorBornIn1947())*/

 //=========================================== SEGUNDO EXERCÍCIO ============================================

/* function smallerName() {
  let nameBook = books[0].name
  // escreva aqui o seu código
  books.forEach((book) => {
     if (book.name.length < nameBook.length){
      nameBook = book.name
     }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName())*/

//=========================================== TERCEIRO EXERCÍCIO ============================================

/*function getNamedBook() {
  // escreva seu código aqui
 const resutBook = books.find( (book) => book.name.length === 26)
 return resutBook

}

console.log(getNamedBook())*/

//=========================================== QUARTO EXERCÍCIO ============================================

/*function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código

   const orderedBooks = books.sort((a, b) => b.releaseYear - a.releaseYear)

   return orderedBooks
}

console.log(booksOrderedByReleaseYearDesc())*/


//=========================================== QUINTO EXERCÍCIO ============================================

/*function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  const secOfAuthors = books.every((book) =>  book.author.birthYear > 1900 && book.author.birthYear < 2000)

  return secOfAuthors
}

console.log(everyoneWasBornOnSecXX())*/

//=========================================== SEXTO EXERCÍCIO ============================================

/*function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
 const booksReleaseDecade =  books.some( (book) => book.releaseYear >= 1980 && book.releaseYear < 1990)

 return booksReleaseDecade
}

console.log(someBookWasReleaseOnThe80s())*/

//=========================================== SÉTIMO EXERCÍCIO ============================================
function authorUnique() {
  return books.every((book) => {
    return !books.some((secondbook) => {
      return (book.author.birthYear === secondbook.author.birthYear) && (book.author.name !== secondbook.author.name); 
    })
  })
}
console.log(authorUnique());