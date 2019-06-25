import {
  LoginComponent,
  SignupComponent,
  HomeComponent,
  NotFoundComponent,
  UserComponent,
  NewsComponent,
  NavbarComponent,
  WinnersComponent
} from "./components";

import { ActiveRoute } from "./core/active.route.service";

import { AuthGuard, PaymentGuard } from "./guard";

const activeRoute = new ActiveRoute();
const authGuard = new AuthGuard();
const paymentGuard = new PaymentGuard();

const routes = {
  "/": {
    component: new HomeComponent(),
    guard: [authGuard]
  },
  "/login": {
    component: new LoginComponent()
  },
  "/signup": {
    component: new SignupComponent()
  },
  "/news": {
    component: new NewsComponent(),
    guard: [authGuard, paymentGuard]
  },
  "/winners": {
    component: new WinnersComponent(),
    guard: [authGuard]
  },
  "/users/:id": {
    component: new UserComponent(),
    guard: [authGuard]
  },
  "**": {
    component: new NotFoundComponent()
  }
};

const router = async () => {
  const header = document.querySelector("app-header");
  const container = document.querySelector("app-container");

  const request = activeRoute.parseRequestUrl();
  const url = `${request.resource ? "/" + request.resource : "/"}${
    request.id ? "/:id" : ""
  }`;

  const route = routes[url] || routes["**"];

  const { component, guard } = route;

  if (guard && guard.some(item => !item.canActivate())) {
    return;
  }

  if (header) {
    const { render, afterRender } = new NavbarComponent();
    header.innerHTML = render();
    afterRender();
  }

  const { beforeRender, render, afterRender } = component;

  beforeRender && (await beforeRender());
  container.innerHTML = render();
  afterRender && (await afterRender());
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
