import {
    AuthService
} from '../services/auth.service'
import {
    Notification
} from './notification.component'
const notification = new Notification('section')

export class SignUpComponent {
    constructor() {
        this._authService = new AuthService()
    }
    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
        <div class="auth-form col col-6 mx-auto my-auto">
            <h3>SignUp</h3>
            <p class="text-secondary">Enter your data to register for the project.</p>
            <form name="signUpForm" novalidate>
                <div class="form-group">
                    <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                    <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                    <input class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname">
                    <input class="form-control form-control-sm mt-3" id="first_name" placeholder="First name">
                    <input class="form-control form-control-sm mt-3" id="last_name" placeholder="Last name">
                    <input class="form-control form-control-sm mt-3" id="phone" placeholder="Phone">
                    <select id="gender" class="form-control form-control-sm mt-3">
                        <option value="" disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input class="form-control form-control-sm mt-3" id="city" placeholder="City">
                    <input class="form-control form-control-sm mt-3" id="country" placeholder="country">
                    
                    <select id="date_of_birth_day" class="form-control form-control-sm col-3 mt-3">
                        <option value="" disabled selected>Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>

                    <select id="date_of_birth_month" class="form-control form-control-sm col-3 mt-3">
                        <option value="" disabled selected>Month</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>

                    <select id="date_of_birth_year" class="form-control form-control-sm col-3 mt-3">
                        <option value="" disabled selected>Year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                    </select>
                    <div class="d-flex mt-5">
                        <button type="submit" class="btn btn-primary btn-sm">SingUp</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="auth-bg col col-6"></div>
        </div>
        `
    }
    afterRender() {
        document.forms['signUpForm'].addEventListener('submit', (e) => {
            e.preventDefault()

            let regData = {
                email: e.target.elements['email'].value,
                password: e.target.elements['password'].value,
                nickname: e.target.elements['nickname'].value,
                first_name: e.target.elements['first_name'].value,
                last_name: e.target.elements['last_name'].value,
                phone: e.target.elements['phone'].value,
                gender_orientation: e.target.elements['gender'].value,
                city: e.target.elements['city'].value,
                country: e.target.elements['country'].value,
                date_of_birth_day: e.target.elements['date_of_birth_day'].value,
                date_of_birth_month: e.target.elements['date_of_birth_month'].value,
                date_of_birth_year: e.target.elements['date_of_birth_year'].value
            }

            this._authService.signup(regData).then((res) => {
                console.log('Login ok -> ', res.message)
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