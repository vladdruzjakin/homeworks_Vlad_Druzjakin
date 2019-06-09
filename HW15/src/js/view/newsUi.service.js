import {
    newsContainer
} from './uiElements.config';

export class NewsUI {
    constructor() {
        this.container = newsContainer;
    }

    addNewsToView(list) {
        const template = list.reduce(
            (init, item) => (init += NewsUI.getTemplate(item)),
            ""
        );
        this.container.insertAdjacentHTML("afterbegin", template);
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
        `;
    }
}