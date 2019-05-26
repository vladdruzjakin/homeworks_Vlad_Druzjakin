// это корневой файл, который просто управляет тем куда пойти и что сделать
// при срабатывании того или иного события

// NewsService, NewsUI, LoaderUI классы оьявлены глобально в файлай, которые подключены выше этого
// и они нам тут теперь доступны для того, что бы собственно "посылать" и "делать"

// инициализация всех необходимый конструкторов
const newsService = new NewsService();
const newsUI = new NewsUI();
const loaderUI = new LoaderUI('.news-wrap .row');
const notificationUI = new NotificationUI('.news-wrap .row');

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchInput = form['search'];

// Event listeners -- собираем все addEventListener в обну стопку, чтобы потом не искать их по коду
countrySelect.addEventListener('change', onSelectChange)
categorySelect.addEventListener('change', onSelectChange)
searchInput.addEventListener('keydown', onSearchInput)

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
        if(articles.length !== 0){
            notificationUI.removeNotificationUI()
            newsUI.addNewsToView(articles)
        }else{
            notificationUI.setNotificationUI()
        }  
    }, country, category)
}
function onSearchInput(){
    const search = searchInput.value,
          searchLength = search.length;
    if( searchLength >= 3){
        loaderUI.setLoader()
        newsService.getNewsBySearch(({
            articles
        }) => {
            loaderUI.removeLoader()
            if(articles.length !== 0){
                notificationUI.removeNotificationUI()
                newsUI.addNewsToView(articles)
            }else{
                notificationUI.setNotificationUI()
            }
        }, search)
    }else{
        newsUI.container.innerHTML = ''
        return console.log('Поиск пустой') 
    }
}