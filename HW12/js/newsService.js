// класс NewsService это всего лишь прослойка между 
// обработчиком события в ./app.js и классом CustomHttp
// поскольку класс CustomHttp уже делает запросы на сервер и ловит ответы
// то NewsService как раз и нужен, чтобы правильно сформировать URL для CustomHttp
// в зависимости от того, в какую категорию я хочу пойти
// и для того чтобы "присоеденить" apiKey
// Если бы небыло этого класса нам нужно было бы apiKey и apiUrl 
// использовать как глобальные переменные в нашем ./app.js
// и в каждом обработчике событий формировать урлы и прочее
const http = new CustomHttp()

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.country = 'ua';
        this.category = 'sport';
        this.search = 'Apple';
    }

    // Get all news
    getNewsByCountryAndCatigory(callback, country = this.country, category = this.category) {
        const url = `${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`
        http.get(url, callback)
    }

    // Get news by search /everything
    getNewsBySearch(callback, q = this.search) {
        const url = `${this.apiUrl}/everything?q=${q}&apiKey=${this.apiKey}`
        http.get(url, callback)
    }
}