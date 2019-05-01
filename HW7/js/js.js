const   /*1*/
        domPtext = document.querySelector('p').textContent,
        /*2*/
        funcNodeTypetagNameChildrenLength = (knotHouse) =>{
            const nodeTypeInfo = knotHouse.nodeType,
                  tagNameInfo = knotHouse.tagName,
                  childrenLength = knotHouse.children.length;
            let objInfo ={nodeTypeInfo, tagNameInfo, childrenLength};
            return  objInfo;
        },
        /*3,7*/
        listOfLinks = document.querySelectorAll('li'),
        newListLi = [],
        /*4*/
        title = document.querySelector('p');
        /*5,6*/
        getElementUl = document.querySelector('ul'),
        /*8*/
        getElementAllLinks = document.querySelectorAll('a');

/*3*/

for (let index = 0; index < listOfLinks.length; index++) {
    const element = listOfLinks[index].textContent;
    newListLi.push(element)
}

/*4 */

//1 вариант
// title.firstChild.data = '-text-';
// title.firstChild.nextSibling.nextSibling.data = '-text-';
// title.lastChild.data = '-text-';

//2 вариант
const newChild = document.querySelector('p').childNodes
    for (let i = 0; i < newChild.length; i++) {
        if (newChild[i].nodeType === 3) {
            newChild[i].textContent = '-text-';
        }
}


/*5*/

getElementUl.classList.add('list');

/*6 костыли*/

getElementUl.nextElementSibling.nextElementSibling.id = 'link';

/*7*/

for (let index = 0; index < listOfLinks.length; index++) {
    if (index % 2 === 0 ){
        listOfLinks[index].classList.add('item');
    }
}
/*8*/

for (let index = 0; index < getElementAllLinks.length; index++) {
    getElementAllLinks[index].classList.add('custom-link');
}

/*9*/

const fragment = document.createDocumentFragment(),
      newsul = document.querySelector('ul'),
      numbChildrenUl = newsul.children.length;

for (let index = 1; index <= 2; index++) {
    const newLi = document.createElement('li')
    newLi.classList.add('new-item')
    fragment.appendChild(newLi)
    newLi.textContent =`link ${numbChildrenUl + index}`
}

newsul.appendChild(fragment)

/*10*/

const linksAll = document.links;
for (let link of linksAll) {
	if (link.parentNode.tagName === 'LI') {
        const strong = document.createElement('strong');
        link.insertAdjacentElement('afterbegin', strong);
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

let allLiArray = Array.from(document.querySelectorAll('li')),
    reverseSortedLi = allLiArray.sort((prev, next) => -1);


for (let index = 0; index < reverseSortedLi.length; index++) {
    newsul.appendChild(reverseSortedLi[index])
}

