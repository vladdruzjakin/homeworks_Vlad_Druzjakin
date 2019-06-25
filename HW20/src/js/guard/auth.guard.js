import {
  AuthService
} from './../services'
import {
  Routing
} from './../core'

export class AuthGuard {
  constructor() {
    this._authService = new AuthService()
    this._routing = new Routing()
  }

  canActivate() {
    if (!this._authService.token) {
      this._routing.navigate('/login')
      return false
    }

    return true
  }
}