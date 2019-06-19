import {
    AuthService
} from '../services/auth.service';
import {
    Routing
} from '../core/routing.service';

export class LoginComponent {
    constructor() {
        this._authService = new AuthService();
        this._routing = new Routing();

        this.beforeRender = this.beforeRender.bind(this)
        this.afterRender = this.afterRender.bind(this)
    }

    beforeRender() {
        if (this._authService.token) {
            this._routing.navigate(`/users/${this._authService.userId}`)
        }
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
        document.forms['loginForm'].addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = e.target.elements['email'].value;
            const password = e.target.elements['password'].value;

            if (!email || !password) return;

            try {
                const response = await this._authService.login(email, password)
                this._routing.navigate(`/users/${response.id}`)
            } catch (err) {
                console.log(err);
            }
            //this._authService.login(email, password)
            // .then((response) => {
            //     this._routing.navigate(`/users/${response.id}`)
            // })
            // .catch((err) => {
            //     console.log(err);
            // });
        });
    }
}