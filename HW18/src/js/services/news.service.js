import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class NewsService {
    getNews(token) {
        const http = new Http();

        return new Promise(async (resolve, reject) => {
            try{
                const result = await  http.get(`${ENV.apiUrl}/public/news`,
                {
                    headers: { "x-access-token": token}
                });
                resolve(result);
            } catch(err) {
                reject(err)};
        });
    }
}