import {
    AuthService
} from './../services/auth.service';
import {
    Routing
} from './../core/routing.service';

export class SingupComponent {
    constructor() {
        this._authService = new AuthService();
        this._routing = new Routing();

        this.afterRender = this.afterRender.bind(this)
    }

    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Singup to Social.</h3>
                <p class="text-secondary">Enter your information, e-mail address & password to singup to Social wetwork.</p>
                <form name="singupForm" novalidate>
                    <div class="form-group">
                        <input type="nickname" class="form-control form-control-sm" id="nickname" placeholder="Your nickname" required >
                        <input type="first_name" class="form-control form-control-sm" id="first_name" placeholder="Your first name" required >
                        <input type="last_name" class="form-control form-control-sm" id="last_name" placeholder="Your last name" required >
                        <input type="phone" class="form-control form-control-sm" id="phone" placeholder="Your phone" required >
                        <input type="gender_orientation" class="form-control form-control-sm" id="gender_orientation" placeholder="Your gender orientation" required >
                        <input type="city" class="form-control form-control-sm" id="city" placeholder="Your city" required >
                        <input type="country" class="form-control form-control-sm" id="country" placeholder="Your country" required >
                        <input type="date_of_birth_day" class="form-control form-control-sm" id="date_of_birth_day" placeholder="Your date of birth day" required >
                        <input type="date_of_birth_month" class="form-control form-control-sm" id="date_of_birth_month" placeholder="Your date of birth month" required >
                        <input type="date_of_birth_year" class="form-control form-control-sm" id="date_of_birth_year" placeholder="Your date of birth year" required >
                        
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Singup</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="auth-bg col col-6"></div>
        </div>
        `;
    }

    afterRender() {
        document.forms['singupForm'].addEventListener('submit', (e) => {
            e.preventDefault();

            const values = Array.prototype.reduce.call(e.target.querySelectorAll('input'), (init, input) => ({
                ...init,
                [input.id]: input.value
            }), {})

            if (Object.keys(values).some(v => !values[v])) return;

            this._authService.singup({
                    ...values
                })
                .then(() => {
                    this._routing.navigate('/login')
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
}