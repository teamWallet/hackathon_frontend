import { call, fork, put, takeLatest } from 'redux-saga/effects'
import {
  login, loginSucceed, loginFailed, loginError,
  logout, logoutSucceed,
  showProfileSucceed, showProfile,
  showWallet, showWalletSucceed
} from '../actions/login'

import { login_POST, showProfile_POST, showWallet_POST } from '../../services/login'

export default function * () {
  yield fork(watchLogin)
  yield fork(watchLogout)
  yield fork(watchShowProfile)
  yield fork(watchShowWallet)
}

function * watchLogin () {
  yield takeLatest(login, performLogin)
}

function * watchLogout () {
  yield takeLatest(logout, performLogout)
}

function * watchShowProfile () {
  yield takeLatest(showProfile, performShowProfile)
}

function * watchShowWallet () {
  yield takeLatest(showWallet, performShowWallet)
}

function * performLogin (action) {
  try {
    const res = yield call(login_POST, action.payload)

    if (res?.code === 200) {
      yield put(loginSucceed({ name: res?.data?.name }))
    } else {
      yield put(loginFailed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(loginError({}))
  }
}

function * performLogout (action) {
  yield put(logoutSucceed({}))
}

function * performShowProfile (action) {
  try {
    const res = yield call(showProfile_POST, action.payload)
    if (res?.code === 200) {
      yield put(showProfileSucceed({ name: res?.data }))
    }
  } catch (e) {
    console.log(e)
  }
}

function * performShowWallet (action) {
  try {
    console.log('action11====>', action.payload)
    const res = yield call(showWallet_POST, action.payload)
    console.log('res11====>', res?.data)
    if (res?.code === 200) {
      yield put(showWalletSucceed({ name: res?.data }))
    }
  } catch (e) {
    console.log(e)
  }
}
