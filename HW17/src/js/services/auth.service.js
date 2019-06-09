import {
    Http
} from './../core/http.service'
import {
    ENV
} from './../config/env'

export class AuthService {
    login(email, password) {
        const http = new Http()

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/login`, {
                email,
                password
            }).then((res) => {
                // Если нет авторизации - рареджектим промис, чтобы отстрелил catch
                // либо сразу дернем reject(es.message) и catch нам не нужен
                if (!res.auth) return Promise.reject(res.message)

                localStorage.setItem('sn_user_id', res.id)
                localStorage.setItem('sn_user_token', res.token)
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    }

    //public/auth/signup
    signup(object) {
        const http = new Http()

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, object).then((res) => {
                // Если нет авторизации - рареджектим промис, чтобы отстрелил catch
                // либо сразу дернем reject(es.message) и catch нам не нужен
                if (res.error) return Promise.reject(res.message)

                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })

    }
}