import {
    AuthService
} from './../services/auth.service';
import {
    NewsService
} from './../services/news.service';
export class NewsComponent { 
    constructor(){
        this._authService = new AuthService();
        this._newsService = new NewsService();

        this.beforeRender = this.beforeRender.bind(this)
        this.render = this.render.bind(this)

        this._authUserToken = this._authService.token
        this._userImg = {}
    }

    async beforeRender(){
        this._userImg = await this._newsService.getNews(this._authUserToken)
    }
    render(){
        let template ='';

        this._userImg.news.forEach(element => {
            template += `
                <div class="card mx-auto mt-3 mb-3" style="width: 30rem;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="${element.owner.avatar}" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.owner.full_name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>


                <div class="card mx-auto" style="width: 50rem;">
                    <img src="${element.pictures[0].url}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>   
            `
        });
        return `${template}`





        // let template ='';
        // console.log(this._userImg)
        // this._userImg.news.forEach(element => {
        //     template += `<img src="${element.pictures[0].url}">`
        // });
        // return `${template}`
    }

}