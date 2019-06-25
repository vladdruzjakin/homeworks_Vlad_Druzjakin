import {
    WinnersService,
    AuthService
} from './../services'

export class WinnersComponent {
    constructor() {
        this._winnersService = new WinnersService()
        this._authService = new AuthService()
        this.afterRender = this.afterRender.bind(this)
        this.beforeRender = this.beforeRender.bind(this)
        this.render = this.render.bind(this)
        this.arrayUsers = []
        this.part = 1

    }
    async beforeRender() {
        const {
            winners
        } = await this._winnersService.getWinners(15, this.part)
        this.arrayUsers = winners.concat(this.arrayUsers)
        console.log(this.arrayUsers)
    }

    render() {
        let template = '';

        this.arrayUsers.forEach(element => {
            if (element.member_id.images[0]) {
                template += `
                    <div class="col-md-3" style="width: 18rem; margin: 10px 10px 10px 10px">
                        <img src=${element.member_id.images[0].image_basic.url} class="card-img-top" alt="...">

                    </div>   
                `
            }
        })
        return `
        <div class="container">
            <div class="row justify-content-md-center">
            ${template}
            </div>
        </div>
        `
    }

    afterRender() {
        window.addEventListener('scroll', () => {
            if (this.part <= 5) {
                this.part += 1
                this.beforeRender()
                const container = document.querySelector('app-container');
                container.innerHTML = this.render()
            } else {

            }

        })
    }
}