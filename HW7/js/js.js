const   /*1*/
        domPText = document.querySelector('p').textContent,
        /*2*/
        getTagInfo = (tag) =>{
            const nodeTypeInfo = tag.nodeType,
                  tagNameInfo = tag.tagName,
                  childrenLength = tag.children.length;
            return  {nodeTypeInfo, tagNameInfo, childrenLength};
        },
        /*3,7*/
        listOfLinks = document.querySelectorAll('li'),
        newListLi = [],
        /*4*/
        ElementP = document.querySelector('p');
        /*5,6*/
        ElementUl = document.querySelector('ul'),
        /*8*/
        ElementAllLinks = document.querySelectorAll('a');

/*3*/

// for (let index = 0; index < listOfLinks.length; index++) {
//     const element = listOfLinks[index].textContent;
//     newListLi.push(element)
// }

listOfLinks.forEach((item)=>{
    const element = item.textContent;
    newListLi.push(element)
})

/*4 */

//1 вариант
// ElementP.firstChild.data = '-text-';
// ElementP.firstChild.nextSibling.nextSibling.data = '-text-';
// ElementP.lastChild.data = '-text-';

//2 вариант
// const newChild = document.querySelector('p').childNodes
//     for (let i = 0; i < newChild.length; i++) {
//         if (newChild[i].nodeType === 3) {
//             newChild[i].textContent = '-text-';
//         }
// }

const newChild = document.querySelector('p').childNodes
newChild.forEach((item)=>{
    if (item.nodeType === 3) {
        item.textContent = '-text-';
    }
})

/*5*/

ElementUl.classList.add('list');

/*6 */

const nextElementUl = document.querySelector('ul~a');
      nextElementUl.id = 'link';

/*7*/

// for (let index = 0; index < listOfLinks.length; index++) {
//     if (index % 2 === 0 ){
//         listOfLinks[index].classList.add('item');
//     }
// }

listOfLinks.forEach((item, index)=>{
    if (index % 2 === 0 ){
        item.classList.add('item');
    }  
})

/*8*/

// for (let index = 0; index < ElementAllLinks.length; index++) {
//     ElementAllLinks[index].classList.add('custom-link');
// }
ElementAllLinks.forEach((item)=>{
    item.classList.add('custom-link');
})


/*9*/
//не переделывал на forEach. Потому что здесь я указал количество создаваемых линков 
const fragment = document.createDocumentFragment(),
      newsUl = document.querySelector('ul'),
      numbChildrenUl = newsul.children.length;

for (let index = 1; index <= 2; index++) {
    const newLi = document.createElement('li')
    newLi.classList.add('new-item')
    newLi.textContent =`link ${numbChildrenUl + index}`
    fragment.appendChild(newLi)
    
}

newsUl.appendChild(fragment)

/*10*/

const linksAll = document.links;
for (let link of linksAll) {
	if (link.parentNode.tagName === 'LI') {
        const textLi = link.textContent;
        link.innerHTML='';
        link.insertAdjacentHTML('afterbegin', `<strong>${textLi}</strong>`);
        
	}
}

/*11*/

const createImg = document.createElement('img');
      createImg.width = 300;
      createImg.src ='https://st3.depositphotos.com/4678277/18722/i/1600/depositphotos_187226096-stock-photo-hooray-i-did-it-excited.jpg'
      createImg.alt = 'Я сделал это дз'
      document.body.insertAdjacentElement('afterbegin', createImg);

/*12*/

const markEl = document.querySelector('mark');
      markEl.insertAdjacentHTML('beforeend', ' green')
      markEl.classList.add('green')

/*13*/

// let allLiArray = Array.from(document.querySelectorAll('li')),
//     reverseSortedLi = allLiArray.sort((prev, next) => -1),
//     fragmentReversLi = document.createDocumentFragment();


// for (let index = 0; index < reverseSortedLi.length; index++) {
//     fragmentReversLi.appendChild(reverseSortedLi[index])
// }

// newsul.appendChild(fragmentReversLi)

let allLiArray = Array.from(document.querySelectorAll('li')),
    reverseSortedLi = allLiArray.sort((prev, next) => -1),
    fragmentReversLi = document.createDocumentFragment();

    reverseSortedLi.forEach((element)=>{
        fragmentReversLi.appendChild(element)
    }) 

newsul.appendChild(fragmentReversLi)

