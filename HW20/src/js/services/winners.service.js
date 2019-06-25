import {
  Http
} from "./../core";
import {
  ENV
} from "./../config/env";

export class WinnersService {
  winners({
    part = 1,
    limit = 15
  }) {
    const http = new Http();

    return new Promise((resolve, reject) => {
      http
        .get(`${ENV.apiUrl}/public/winners?part=${part}&limit=${limit}`)
        .then(response => {
          if (!response) return reject(response);
          resolve(response);
        })
        .catch(err => reject(err));
    });
  }
}