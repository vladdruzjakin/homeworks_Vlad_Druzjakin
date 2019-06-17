import {
  Http
} from './../core/http.service'
import {
  ENV
} from './../config/env'

export class WinnersService {
  getWinners(limit, part) {
    const http = new Http()

    return new Promise(async (resolve, reject) => {
      try {
        const result = await http.get(`${ENV.apiUrl}/public/winners?part=${part}&limit=${limit}`, {})
        resolve(result)
      } catch (e) {
        reject(e)
      }
    })
  }
}