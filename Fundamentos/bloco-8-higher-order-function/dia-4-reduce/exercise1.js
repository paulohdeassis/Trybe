


const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
 function flatten() {
    
    // escreva seu código aqui
  const reducedArray = arrays.reduce((acc, number) => acc.concat(number));

  return reducedArray
  }
  console.log(flatten())