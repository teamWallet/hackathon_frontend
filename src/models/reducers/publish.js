import { handleActions } from 'redux-actions'

import {
  publishPostSucceed, publishPostFailed, publishPostError,
  listPostSucceed, listPostFailed, listPostError,
  likePostSucceed, likePostFailed, likePostError,
  listFollowersSucceed, listFollowersFailed, listFollowersError,
  commentPostSucceed, commentPostFailed, commentPostError,
  clearCommentStatusPostSucceed,
  listPostCommentSucceed, listPostCommentFailed, listPostCommentError,
  taskPublishSucceed, taskPublishFailed, taskPublishError,
  clearTaskPublishStatusSucceed
} from '../actions/publish'
const defaultState = {
  publishPostStatus: 0,
  listPostStatus: 0,
  listPostData: [],
  commentPostStatus: 0,
  listPostComments: [],
  likePostStatus: 0,
  listFollowers: [],
  taskPublishStatus: 0
}

const reducer = handleActions(
  {
    [publishPostSucceed] (state, { payload }) {
      return { ...state, publishPostStatus: 1 }
    },
    [publishPostFailed] (state, { payload }) {
      return { ...state, publishPostStatus: -1 }
    },
    [publishPostError] (state, { payload }) {
      return { ...state, publishPostStatus: -2 }
    },

    [listPostSucceed] (state, { payload }) {
      return { ...state, listPostStatus: 1, listPostData: payload?.data }
    },

    [listPostFailed] (state, { payload }) {
      return { ...state, listPostStatus: -1, listPostData: [] }
    },
    [listPostError] (state, { payload }) {
      return { ...state, listPostStatus: -2, listPostData: [] }
    },

    [commentPostSucceed] (state, { payload }) {
      return { ...state, commentPostStatus: 1 }
    },
    [commentPostFailed] (state, { payload }) {
      return { ...state, commentPostStatus: -1 }
    },
    [commentPostError] (state, { payload }) {
      return { ...state, commentPostStatus: -2 }
    },
    [clearCommentStatusPostSucceed] (state, { payload }) {
      return { ...state, commentPostStatus: 0 }
    },

    [listPostCommentSucceed] (state, { payload }) {
      return { ...state, listPostComments: payload.data }
    },
    [listPostCommentFailed] (state, { payload }) {
      return { ...state, listPostComments: [] }
    },
    [listPostCommentError] (state, { payload }) {
      return { ...state, listPostComments: [] }
    },

    [likePostSucceed] (state, { payload }) {
      return { ...state, likePostStatus: 1 }
    },
    [likePostFailed] (state, { payload }) {
      return { ...state, likePostStatus: -1 }
    },
    [likePostError] (state, { payload }) {
      return { ...state, likePostStatus: -2 }
    },

    [listFollowersSucceed] (state, { payload }) {
      return { ...state, likePostStatus: 1, listFollowers: payload?.data }
    },
    [listFollowersFailed] (state, { payload }) {
      return { ...state, likePostStatus: -1 }
    },
    [listFollowersError] (state, { payload }) {
      return { ...state, likePostStatus: -2 }
    },

    [taskPublishSucceed] (state, { payload }) {
      return { ...state, taskPublishStatus: 1 }
    },
    [taskPublishFailed] (state, { payload }) {
      return { ...state, taskPublishStatus: -1 }
    },
    [taskPublishError] (state, { payload }) {
      return { ...state, taskPublishStatus: -2 }
    },
    [clearTaskPublishStatusSucceed] (state, { payload }) {
      return { ...state, taskPublishStatus: 0 }
    }

  },
  defaultState
)

export default reducer
