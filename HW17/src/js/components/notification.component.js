export class Notification {
  constructor(selector) {
    this.container = document.querySelector(selector)
  }

  setNotification(message) {
    this.container.innerHTML = Notification.getTemplate(message)
  }

  removeNotification() {
    this.container.innerHTML = ''
  }

  static getTemplate(message) {
    return `
          <div class="card text-white bg-primary col-6 mb-3">
            <div class="card-header">Внимание</div>
              <div class="card-body">
                <p class="card-text">${message}</p>
             </div>
           </div>
            `
  }
}