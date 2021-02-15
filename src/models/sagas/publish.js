import { call, fork, put, takeLatest, select } from 'redux-saga/effects'
import {
  publishPost, publishPostSucceed, publishPostFailed, publishPostError,
  listPost, listPostSucceed, listPostFailed, listPostError,
  likePost, likePostError,
  listFollowers, listFollowersError, listFollowersFailed, listFollowersSucceed,
  commentPost, commentPostSucceed, commentPostFailed, commentPostError,
  clearCommentStatusPost, clearCommentStatusPostSucceed,
  listPostComment, listPostCommentSucceed, listPostCommentFailed, listPostCommentError,
  likePostSucceed,
  taskPublish, taskPublishSucceed, taskPublishFailed, taskPublishError,
  clearTaskPublishStatus, clearTaskPublishStatusSucceed
} from '../actions/publish'
import {
  publishPost_POST,
  listPost_POST,
  commentPost_POST,
  listPostComment_POST,
  likePost_POST,
  listFollowers_POST,
  taskPublish_POST
} from '../../services/publish'

export default function * () {
  yield fork(watchPublishPost)
  yield fork(watchListPost)
  yield fork(watchCommentPost)
  yield fork(watchClearCommentPostStatus)
  yield fork(watchListPostComment)
  yield fork(watchLikePost)
  yield fork(watchLikeFollowers)
  yield fork(watchTaskPublish)
  yield fork(watchClearTaskPublishStatus)
}

function * watchPublishPost () {
  yield takeLatest(publishPost, performPublishPost)
}

function * watchListPost () {
  yield takeLatest(listPost, performListPost)
}

function * watchCommentPost () {
  yield takeLatest(commentPost, performCommentPost)
}

function * watchClearCommentPostStatus () {
  yield takeLatest(clearCommentStatusPost, performClearCommentPostStatus)
}

function * watchListPostComment () {
  yield takeLatest(listPostComment, performListPostComment)
}

function * watchLikePost () {
  yield takeLatest(likePost, performLikePost)
}

function * watchLikeFollowers () {
  yield takeLatest(listFollowers, performListFollowers)
}

function * watchTaskPublish () {
  yield takeLatest(taskPublish, performTaskPublish)
}

function * watchClearTaskPublishStatus () {
  yield takeLatest(clearTaskPublishStatus, performClearTaskPublishStatus)
}

function * performPublishPost (action) {
  try {
    const res = yield call(publishPost_POST, action.payload)
    if (res?.code === 200) {
      yield put(publishPostSucceed({}))
    } else {
      yield put(publishPostFailed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(publishPostError({}))
  }
}

function * performListPost (action) {
  try {
    const res = yield call(listPost_POST, action.payload)
    if (res?.code === 200) {
      yield put(listPostSucceed({ data: res?.data?.data }))
    } else {
      yield put(listPostFailed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(listPostError({}))
  }
}

function * performCommentPost (action) {
  try {
    const res = yield call(commentPost_POST, action.payload)
    if (res?.code === 200) {
      yield put(commentPostSucceed({}))
    } else {
      yield put(commentPostFailed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(commentPostError({}))
  }
}

function * performClearCommentPostStatus (action) {
  yield put(clearCommentStatusPostSucceed({}))
}

function * performListPostComment (action) {
  try {
    const res = yield call(listPostComment_POST, action.payload)
    if (res?.code === 200) {
      yield put(listPostCommentSucceed({ data: res.data?.data }))
    } else {
      yield put(listPostCommentFailed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(listPostCommentError({}))
  }
}

function * performLikePost (action) {
  try {
    console.log('action22===>', action)
    const res = yield call(likePost_POST, action.payload)
    console.log('res11===>', res?.data)
    if (res?.code === 200) {
      yield put(likePostSucceed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(likePostError({}))
  }
}

function * performListFollowers (action) {
  try {
    const res = yield call(listFollowers_POST, action.payload)
    if (res?.code === 200) {
      yield put(listFollowersSucceed({ data: res?.data?.data }))
    } else {
      yield put(listFollowersFailed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(listFollowersError({}))
  }
}

function * performTaskPublish (action) {
  try {
    const res = yield call(taskPublish_POST, action.payload)
    if (res?.code === 200) {
      yield put(taskPublishSucceed({}))
    } else {
      yield put(taskPublishFailed({}))
    }
  } catch (e) {
    console.log(e)
    yield put(taskPublishError({}))
  }
}

function * performClearTaskPublishStatus (action) {
  yield put(clearTaskPublishStatusSucceed({}))
}
