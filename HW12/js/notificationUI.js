// класс для реализации функционала по добавланию нотификаций на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашей нотификашки
// имея примеры LoaderUI и NewsUI
// нужно реализовать set.... и remove.... для управления этим эл-том
class NotificationUI {
    constructor(selector) {
        this.container = document.querySelector(selector)
    }

    setNotificationUI() {
        this.container.innerHTML = NotificationUI.getTemplate()
    }

    removeNotificationUI() {
        this.container.innerHTML = ''
    }


    static getTemplate() {
        return `
        <div class="row">
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">По запросу ничего не найдено. Введите по другому!!!
            </span>
          </div>
        </div>
      </div>
        `
    }
}