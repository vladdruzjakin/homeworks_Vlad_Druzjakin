import {
    Http
} from '../core/http.service';
import {
    ENV
} from '../config/env';

export class AuthService {
    get token() {
        return localStorage.getItem('sn_user_token');
    }
    get userId() {
        return localStorage.getItem('sn_user_id');
    }

    login(email, password) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/login`, {
                    email,
                    password
                })
                .then((response) => {
                    if (!response.auth) return reject(response);
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }

    signup(data) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, data)
                .then((response) => {
                    if (response.error) return reject(response);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }

    logout() {
        localStorage.removeItem('sn_user_id');
        localStorage.removeItem('sn_user_token');

    }
}