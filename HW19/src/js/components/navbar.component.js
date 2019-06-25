import {
  AuthService
} from './../services'
import {
  Routing
} from './../core'

export class NavbarComponent {
  constructor() {
    this._authService = new AuthService()
    this._routing = new Routing()

    this.render = this.render.bind(this)
    this.afterRender = this.afterRender.bind(this)
  }

  render() {
    const {
      userId,
      token
    } = this._authService
    return token ? `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">App</a>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/news">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/users/${userId}">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/winners">Winners</a>
            </li>

            <button class="btn btn-primary logout-btn">Logout</button>
          </ul>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    ` : ''
  }

  afterRender() {
    const {
      token
    } = this._authService

    if (!token) return;
    document.querySelector('.logout-btn').addEventListener('click', () => {
      console.log(1)
      this._authService.logout()
      this._routing.navigate('/login')
    })
  }
}