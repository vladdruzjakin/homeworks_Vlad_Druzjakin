import {
    Http
} from '../core/http.service';
import {
    ENV
} from '../config/env';

export class UserService {
    getUser(id) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/users/get-info/${id}`)
                .then((response) => {
                    // console.log(response);
                    resolve(response);
                })
                .catch(reject);
        });
    }

    async getUserImages(id) {
        const http = new Http();

        return await http.get(`${ENV.apiUrl}/public/users/my-images/${id}`)
    }
}