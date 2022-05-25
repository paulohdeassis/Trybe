/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let patinhas = {
    //
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente:'sim',
  };*/


  /*============================= Primeiro Exercício ================================*/
  /*console.log(`Boas vindas, ${info.personagem}`)*/

  /*============================= Segundo Exercício ================================*/

    /*info.recorrente = 'sim'*/
 
  /*============================= terceiro Exercício ================================*/

  /* for ( let  inf in info){
     console.log(inf)
   }*/


  /*console.log(info.recorrente)*/

  /*============================= Quarto  Exercício ================================*/

  /*for ( let inf in info){
      console.log(info[inf])
  }*/ 

  /*============================= Quinto  Exercício ================================*/

/*for ( let inf in info){
  console.log( info[inf] + " e " + patinhas[inf]) 
}*/

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


/*============================= Sexto  Exercício ================================*/

/*console.log(' O livro preferido de' + ' ' + leitor.nome + ' ' + leitor.sobrenome + ' ' +'se chama' + " '" +leitor.livrosFavoritos[0].titulo + "' .") */

/*============================= Sétimo  Exercício ================================*/

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

/*console.log(leitor.livrosFavoritos[1])*/

/*============================= Oitavo  Exercício ================================*/

/*console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')*/