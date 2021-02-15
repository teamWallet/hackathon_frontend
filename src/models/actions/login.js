import { createAction } from 'redux-actions'
import { LOGIN } from '../action_types'

export const login = createAction(LOGIN.LOGIN_ACTION_TYPE.ACTION)
export const loginSucceed = createAction(LOGIN.LOGIN_ACTION_TYPE.SUCCEED)
export const loginFailed = createAction(LOGIN.LOGIN_ACTION_TYPE.FAILED)
export const loginError = createAction(LOGIN.LOGIN_ACTION_TYPE.ERROR)

export const logout = createAction(LOGIN.LOGOUT_ACTION_TYPE.ACTION)
export const logoutSucceed = createAction(LOGIN.LOGOUT_ACTION_TYPE.SUCCEED)

export const showProfile = createAction(LOGIN.PROFILE_ACTION_TYPE.ACTION)
export const showProfileSucceed = createAction(LOGIN.PROFILE_ACTION_TYPE.SUCCEED)

export const showWallet = createAction(LOGIN.SHOW_WALLET_ACTION_TYPE.ACTION)
export const showWalletSucceed = createAction(LOGIN.SHOW_WALLET_ACTION_TYPE.SUCCEED)
