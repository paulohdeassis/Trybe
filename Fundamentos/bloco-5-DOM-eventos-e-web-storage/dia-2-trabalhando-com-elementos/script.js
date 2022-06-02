

/*Os exercícios são resolvidos através de funções que serão chamadas no final desse código*/


/* ============================= Exercícios 1 ,4 e 9 =========================*/
function newStringElement(element, string, parent){

        let newElement = document.createElement(element)
        
        let elementParent = document.querySelector(parent)

        newElement.innerText = string 

        elementParent.appendChild(newElement)
        
        
}

    
/* ============================= Exercícios 2, 3, 5 e 6 =====================*/
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
 
/*============================== Exercício 9 e 10 =========================*/

function addClassToAllOfType(element, clas){

var tag = document.querySelectorAll(element)
for (let index = 0; index < tag.length; index +=1){


 tag[index].classList.add(clas)

}

}

/*============================== Exercício 11 =============================*/
function removeElement (parent, child){
  let parentElement = document.querySelector(parent)
  let removedElement = document.querySelector(child)

  parentElement.removeChild(removedElement)

}

/*============================== Exercício 12 =============================*/
function centralizeElement(element){
        let centeredElement = document.querySelector(element)

        centeredElement.style.marginRight = 'auto'
}

/*============================== Exercício 13 =============================*/

function changeParentBackGround(element, color){

 let elementParent = document.querySelector(element).parentElement

 elementParent.style.backgroundColor = color
}


/*============================== Exercício 14 =============================*/

function removeFromList(parent, index1, index2){
 let elementParent = document.querySelector(parent)

 let children = elementParent.childNodes;
elementParent.removeChild(children[index1])
elementParent.removeChild(children[index2])
}





newStringElement('h1', ' Exercício 5.2 - JavaScript DOM','body')

createGenericElement('main', 'main-content','body')

createGenericElement('section', 'center-content','.main-content')

newStringElement('p','texto de teste, uhuulll','.center-content')

createGenericElement('section', 'right-content','.main-content')
    
createGenericElement('section', 'left-content','.main-content')

createImageElement( 'https://picsum.photos/200','.left-content', 'small-image')

newStringElement('h3','Heading de teste','.main-content')
newStringElement('h3','Heading de teste','.main-content')
newStringElement('h3','Heading de teste','.main-content')
createOrdedList(['Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez'],'.right-content','trybeList')

addClassToAllOfType('h1', 'title')
addClassToAllOfType('h3', 'description')
removeElement('.main-content', '.left-content')
centralizeElement('.right-content')
changeParentBackGround('.center-content','#059862')
removeFromList('.trybeList', 9, 8)
