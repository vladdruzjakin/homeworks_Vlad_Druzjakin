import {
  NewsService,
  AuthService
} from './../services'

export class NewsComponent {
  constructor() {
    this._newsService = new NewsService()
    this._authService = new AuthService()

    this.beforeRender = this.beforeRender.bind(this)
    this.render = this.render.bind(this)
  }

  async beforeRender() {
    const {
      token
    } = this._authService
    const {
      news
    } = await this._newsService.getNews(token)
    console.log(news)
    this._newsList = news.map(this._newTemplate)
  }

  render() {
    return `
      <div>${this._newsList.join('')}</div>
    `
  }

  _newTemplate({
    pictures: [picture],
    owner: {
      full_name
    }
  }) {
    return `
    <div class="card" style="width: 18rem;">
      <img src="${picture.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${full_name}</p>
      </div>
    </div>
    `
  }
}