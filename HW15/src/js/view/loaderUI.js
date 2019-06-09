// класс для реализации функционала по добавланию лоадера на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашего лоадера
// динамики добавляет и то, что при инициализации этого класса
// const loaderUI = new LoaderUI('.news-wrap .row') 
// мы пробрасываем селектор того контейнега, где хотим, чтобы крутился лоадер 
import {
    newsContainer
} from './uiElements.config';


export class LoaderUI {
    constructor() {
        this.container = newsContainer
    }

    setLoader() {
        this.container.innerHTML = LoaderUI.getTemplate()
    }

    removeLoader() {
        this.container.innerHTML = ''
    }


    static getTemplate() {
        return `
        <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-red-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        `
    }
}