// Styles
import './../css/style.css';
// Libs
import 'jquery';
import {
    debounce
} from 'lodash'
import {
    NewsService
} from './services/news.service';
import {
    NewsUI
} from './view/newsUi.service';
import {
    countrySelect,
    categorySelect,
    searchInput
} from './view/uiElements.config';
import {
    LoaderUI
} from './view/loaderUI';
import {
    NotificationUI
} from './view/notificationUI';


const newsService = new NewsService();
const newsUI = new NewsUI();
const loaderUI = new LoaderUI();
const notificationUI = new NotificationUI();
const debounsMethod = _.debounce(onSearchInput, 500)


// Handlers for events -- пишем функции-обработчики, которые нужны для addEventListener
function onSelectChange() {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.log('Choose the category and country')

    loaderUI.setLoader()
    newsService.getNewsByCountryAndCatigory(({
        articles
    }) => {
        loaderUI.removeLoader()
        if (articles.length) {
            newsUI.addNewsToView(articles)
        } else {
            notificationUI.showNotification('Not results')
        }
    }, country, category)
}

function onSearchInput() {
    const search = searchInput.value,
        searchLength = search.length;
    if (searchLength >= 3) {
        loaderUI.setLoader()
        newsService.getNewsBySearchQuery(({
            articles
        }) => {
            loaderUI.removeLoader()
            if (articles.length !== 0) {
                notificationUI.removeNotificationUI()
                newsUI.addNewsToView(articles)
            } else {
                notificationUI.setNotificationUI()
            }
        }, search)
    } else {
        newsUI.container.innerHTML = ''
        return console.log('Поиск пустой')
    }
}
// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchInput.addEventListener('keydown', debounsMethod)