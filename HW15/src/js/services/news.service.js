import {
    Http
} from './http.service';
import {
    config
} from './../config/config';

const http = new Http();

export class NewsService {
    constructor() {
        this.apiUrl = config.apiUrl;
        this.apiKey = config.apiKey;
        this.country = 'ua';
        this.category = 'technology';
    }

    // Get all news
    getNewsByCountryAndCatigory(callback, country = this.country, category = this.category) {
        const url = `${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`
        http.get(url, callback)
    }

    // Get news by search /everything
    getNewsBySearchQuery(callback, string) {
        const url = `${this.apiUrl}/everything?q=${string}&apiKey=${this.apiKey}`
        http.get(url, callback)
    }
}