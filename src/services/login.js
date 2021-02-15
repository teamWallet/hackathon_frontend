import { post } from '../utils/post'

export function login_POST (params) {
  return post('/account/login', JSON.stringify(params))
}

export function showProfile_POST (params) {
  return post('/account/profile/show', JSON.stringify(params))
}

export function showWallet_POST (params) {
  return post('/account/assets/symbol', JSON.stringify(params))
}
