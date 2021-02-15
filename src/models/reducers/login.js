import { handleActions } from 'redux-actions'

import {
  loginSucceed, loginFailed, loginError,
  logoutSucceed, showProfileSucceed,
  showWalletSucceed
} from '../actions/login'
const defaultState = {
  loginStatus: 0,
  name: '',
  showProfileStatus: 0,
  profile: {},
  showWalletStatus: 0,
  wallet: {}
}

const reducer = handleActions(
  {
    [loginSucceed] (state, { payload }) {
      return { ...state, loginStatus: 1, name: payload?.name }
    },
    [loginFailed] (state, { payload }) {
      return { ...state, loginStatus: -1 }
    },
    [loginError] (state, { payload }) {
      return { ...state, loginStatus: -2 }
    },

    [logoutSucceed] (state, { payload }) {
      return { ...state, loginStatus: 0, name: '' }
    },
    [showProfileSucceed] (state, { payload }) {
      return { ...state, showProfileStatus: 1, profile: payload }
    },

    [showWalletSucceed] (state, { payload }) {
      return { ...state, showWalletStatus: 1, wallet: payload }
    }
  },
  defaultState
)

export default reducer
