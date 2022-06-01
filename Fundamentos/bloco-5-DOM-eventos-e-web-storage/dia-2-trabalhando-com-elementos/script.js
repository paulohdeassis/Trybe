

/*Cada um dos exercícios é resolvido através de uma função que será chamada no início desse código*/

newStringElement('h1', ' Exercício 5.2 - JavaScript DOM','body')

createGenericElement('section', 'main-content','body')

createGenericElement('section', 'center-content','.main-content')

newStringElement('p','texto de teste, uhuulll','.center-content')

createGenericElement('section', 'right-content','.main-content')
    
createGenericElement('section', 'left-content','.main-content')

createImageElement( 'https://picsum.photos/200','.left-content', 'small-image')

newStringElement('h3','Heading de teste','.main-content')
newStringElement('h3','Heading de teste','.main-content')
newStringElement('h3','Heading de teste','.main-content')
createOrdedList(['Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez'],'.right-content','trybeList')



   

/* ============================= Exercícios 1 ,4 e 9 ====================================*/
function newStringElement(element, string, parent){

        let newElement = document.createElement(element)
        
        let elementParent = document.querySelector(parent)

        newElement.innerText = string 

        elementParent.appendChild(newElement)
        
        
}

    
/* ============================= Exercícios 2, 3, 5 e 6 ====================================*/
function createGenericElement(tag, clas, parent){

        let elementType = document.createElement(tag)

        elementType.classList.add(clas)

        let elementParent = document.querySelector(parent)
       
        elementParent.appendChild(elementType)
}

/*============================== Exercício 7 ===============================*/
function createImageElement(src, parent, clas){
   let img = document.createElement('img')

    let documentParent = document.querySelector(parent)
    img.classList.add(clas)

    img.setAttribute('src',src)

    documentParent.appendChild(img)
}

/* ============================= Exercício 8 ===============================*/

function createOrdedList(values, parent, clas){
    let ordedList = document.createElement('ol')
    ordedList.classList.add(clas)

    let documentParent = document.querySelector(parent)
    documentParent.appendChild(ordedList)
    
    let ol = document.querySelector('.' + clas)
    
    console.log(ol)

   for (let index = 0; index < values.length; index +=1){
      let li = document.createElement('li')
      li.innerText = values[index]
      ol.appendChild(li)
   }
}
 

