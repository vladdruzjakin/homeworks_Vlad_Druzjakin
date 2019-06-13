import {
    LoginComponent
} from './components/login.component';
import {
    SingupComponent
} from './components/singup.component';
import {
    HomeComponent
} from './components/home.component';
import {
    NotFoundComponent
} from './components/notfound.component';
import {
    UserComponent
} from './components/user.component';
import {
    ActiveRoute
} from './core/active.route.service';
import {
    NewsComponent
} from './components/news.component'
const routes = {
    '/': new HomeComponent(),
    '/login': new LoginComponent(),
    '/singup': new SingupComponent(),
    '/users/:id': new UserComponent(),
    '/news': new NewsComponent(),
    '**': new NotFoundComponent()
};

const activeRoute = new ActiveRoute();

const router = async () => {
    const container = document.querySelector('app-container');
    const request = activeRoute.parseRequestUrl()
    const url = `${request.resource ? '/' + request.resource : '/'}${request.id ? '/:id' : ''}`

    const component = routes[url] || routes['**'];

    const {
        beforeRender,
        render,
        afterRender
    } = component;

    beforeRender && await beforeRender();
    container.innerHTML = render();
    afterRender && await afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);