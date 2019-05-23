// класс для реализации функционала по добавланию новостей на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашего списка новостей
// класс сейчас заточен на работу в '.news-wrap .row' елементе
// но можно реализовать как в ./loaderUI.js 
class NewsUI {
    constructor() {
        this.container = document.querySelector('.news-wrap .row')
    }

    addNewsToView(list) {
        const template = list.reduce((init, item) => init += NewsUI.getTemplate(item), '')

        this.container.insertAdjacentHTML('afterbegin', template)
    }

    static getTemplate(article) {
        return `
        <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="${article.urlToImage}">
              <span class="card-title">${article.title}</span>
            </div>
            <div class="card-content">
              <p>${article.description}</p>
            </div>
          </div>
        </div>
      </div>
        `
    }
}