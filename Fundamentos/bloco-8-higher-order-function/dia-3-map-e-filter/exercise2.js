const {books} = require('./books.js')

function nameAndAge() {
    // escreva seu código aqui
    const authorsObj = books.map((book) => {
       const resultObj = {}
       resultObj.age = book.releaseYear - book.author.birthYear;
       resultObj.name = book.author.name
       return resultObj;
    });

  return  authorsObj.sort((a,b) => a.age - b.age);


}

console.log(nameAndAge())