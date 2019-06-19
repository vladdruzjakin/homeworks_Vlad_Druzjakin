import {
  AuthService
} from '../services/auth.service';
import {
  ActiveRoute
} from '../core/active.route.service';
import {
  UserService
} from '../services/user.service';

export class UserComponent {
  constructor() {
    this._activeRoute = new ActiveRoute();
    this._authService = new AuthService();
    this._userService = new UserService();

    this.beforeRender = this.beforeRender.bind(this)
    this.render = this.render.bind(this)
    this.style = this.style.bind(this)

    this._user = {}
  }

  async beforeRender() {
    const {
      userId
    } = this._authService
    this._user = await this._userService.getUser(userId)
    const {
      images
    } = await this._userService.getUserImages(userId)

    this._imagesTemplate = images.reduce((init, item) => init += this._singleImageTemplate(item), '')
  }

  render() {
    return `
        <!-- Component styles -->
        <style>
            ${this.style()}
        </style>
        <!-- Component html -->
        <div class="user-cover-container"
            style="background: url(${this._user.cover}) no-repeat center / cover;"
        >
        </div>
        <div class="user-avatar-container d-flex justify-content-center">
            <div class="user-avatar">
                <img src="${this._user.avatar}">
            </div>
        </div>
        <div class="images-container container">
          <div class="row">
              ${this._imagesTemplate}
          </div>
        </div>
    `;
  }

  _singleImageTemplate(image) {
    return `
      <div class="col col-4">
        <div class="img-item">
          <img src="${image.url}">
          <div class="img-item-hover">
            <span>
              <i class="fas fa-eye"></i>
              ${image.views.length}
            </span>
            <span>
              <i class="fas fa-thumbs-up"></i>
              ${image.likes.length}
            </span>
          </div>
        </div>
      </div>
    `;
  }


  style() {
    return `
      img {
          max-width: 100%;
          width: 100%;
      }
      .user-cover-container {
          height: 400px;
          width: 100%;
      }
      .user-avatar-container {
          transform: translateY(-50%);
      }
      .user-avatar {
          width: 138px;
          height: 138px;
          border-radius: 50%;
          overflow: hidden;
      }
    `;
  }
}