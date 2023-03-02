import { Store } from './store'

export interface User {
  uuid: string,
  email: string,
  stores: Array<Store>,
  username: string,
}
