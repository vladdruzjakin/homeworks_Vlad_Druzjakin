import {
  Routing
} from '../core'

export class PaymentGuard {
  constructor() {
    this._routing = new Routing()
  }

  canActivate() {
    if (this.isPaymentTrue()) {
      return true
    }

    this._routing.navigate('/')
    return false
  }

  isPaymentTrue() {
    return false
  }
}