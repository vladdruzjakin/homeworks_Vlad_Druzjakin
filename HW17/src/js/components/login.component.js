import {
    AuthService
} from './../services/auth.service'
import {
    Notification
} from './notification.component'
const notification = new Notification('section')

export class LoginComponent {
    constructor() {
        this._authService = new AuthService()
    }
    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Login to Social.</h3>
                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>
                <form name="loginForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Login</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="auth-bg col col-6"></div>
        </div>
        `;
    }

    afterRender() {
        document.forms['loginForm'].addEventListener('submit', (e) => {
            e.preventDefault()

            const email = e.target.elements['email'].value
            const password = e.target.elements['password'].value

            if (!email || !password) return;

            this._authService.login(email, password).then((res) => {
                console.log('Login ok -> ', res)
                notification.setNotification(res.message)
                setTimeout(() => {
                    notification.removeNotification()
                }, 5000)
            }).catch((err) => {
                notification.setNotification(err)
                setTimeout(() => {
                    notification.removeNotification()
                }, 5000)
            })
        })
    }
}