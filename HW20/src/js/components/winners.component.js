import {
  WinnersService
} from "../services";

export class WinnersComponent {
  constructor() {
    this._winners = new WinnersService()
    this.winnersLine = ""
    this.winnersList = []
    this.isLoading = false

    this._params = {
      part: 1,
      limit: 15
    }

    this.beforeRender = this.beforeRender.bind(this)
    this.render = this.render.bind(this)
    this.afterRender = this.afterRender.bind(this)
    this.style = this.style.bind(this)
    this.checkInfiniteLoading = this.checkInfiniteLoading.bind(this)
  }

  async getWinners(additionalParams) {
    this.isLoading = true
    const {
      winners
    } = await this._winners.winners({
      ...this._params,
      ...additionalParams
    })
    this.winnersList = [...this.winnersList, ...winners]
    this.createWinnersList()

    this.isLoading = false
  }

  createWinnersList() {
    this.winnersLine = this.winnersList.reduce((init, item) => {
      const image = item.member_id.images[0];
      const imageUrl = image ?
        image.image_basic.url :
        "http://www.nccaom.org/wp-content/uploads/2016/07/default-placeholder-image.jpg";

      return (init += `
          <div class="h300"><img src="${imageUrl}"></div>
          `);
    }, "");
  }

  async beforeRender() {
    await this.getWinners({
      limit: 50
    })
  }

  render() {
    return `
       <div class="container">

        <!-- Component styles -->
        <style>
          ${this.style()}
        </style>

        <!-- Component html -->
        <div class="winners">
          ${this.winnersLine}
        </div>

        <!-- <button class="btn btn-primary load-more-btn">Load More</button>  -->
      </div>
    `
  }


  style() {
    return `
        .container {
            max-width: 1200px;
            padding-left: 15px;
            padding-right: 15px;
            margin: 0 auto;
        }
        .winners {
            display: flex;
            flex-wrap: wrap
        }
        .h300 {
            height: 300px;
            padding: 1px;
            width: 20%
        }
        .h300 img {
            height: auto;
            width: 100%
        }
    `;
  }

  async checkInfiniteLoading() {
    const container = document.querySelector('.container')
    const shouldLoad = window.pageYOffset >= container.clientHeight / 2

    if (!this.isLoading && shouldLoad) {
      this._params.part = this._params.part + 1;
      await this.getWinners()
      container.outerHTML = this.render()
    }
  }

  afterRender() {
    // const loadMoreBtn = document.querySelector('.load-more-btn')
    // const container = document.querySelector('.container')

    // loadMoreBtn.addEventListener('click', async () => {
    //   this._params.part = this._params.part + 1;
    //   await this.getWinners()

    //   container.outerHTML = this.render()
    //   this.afterRender()
    // })

    window.addEventListener('scroll', this.checkInfiniteLoading)
  }
}