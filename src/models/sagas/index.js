import { all } from 'redux-saga/effects'
import login from './login'
import publish from './publish'

export default function * rootSaga () {
  yield all([
    login(),
    publish()
  ])
}
