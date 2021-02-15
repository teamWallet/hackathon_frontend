import { createAction } from 'redux-actions'
import { PUBLISH } from '../action_types'

export const publishPost = createAction(PUBLISH.PUBLISH_POST_ACTION_TYPE.ACTION)
export const publishPostSucceed = createAction(PUBLISH.PUBLISH_POST_ACTION_TYPE.SUCCEED)
export const publishPostFailed = createAction(PUBLISH.PUBLISH_POST_ACTION_TYPE.FAILED)
export const publishPostError = createAction(PUBLISH.PUBLISH_POST_ACTION_TYPE.ERROR)

export const listPost = createAction(PUBLISH.LIST_POST_ACTION_TYPE.ACTION)
export const listPostSucceed = createAction(PUBLISH.LIST_POST_ACTION_TYPE.SUCCEED)
export const listPostFailed = createAction(PUBLISH.LIST_POST_ACTION_TYPE.FAILED)
export const listPostError = createAction(PUBLISH.LIST_POST_ACTION_TYPE.ERROR)

export const likePost = createAction(PUBLISH.LIKE_POST_ACTION_TYPE.ACTION)
export const likePostSucceed = createAction(PUBLISH.LIKE_POST_ACTION_TYPE.SUCCEED)
export const likePostFailed = createAction(PUBLISH.LIKE_POST_ACTION_TYPE.FAILED)
export const likePostError = createAction(PUBLISH.LIKE_POST_ACTION_TYPE.ERROR)

export const commentPost = createAction(PUBLISH.COMMENT_POST_ACTION_TYPE.ACTION)
export const commentPostSucceed = createAction(PUBLISH.COMMENT_POST_ACTION_TYPE.SUCCEED)
export const commentPostFailed = createAction(PUBLISH.COMMENT_POST_ACTION_TYPE.FAILED)
export const commentPostError = createAction(PUBLISH.COMMENT_POST_ACTION_TYPE.ERROR)

export const clearCommentStatusPost = createAction(PUBLISH.CLEAR_COMMENT_POST_STATUS_ACTION_TYPE.ACTION)
export const clearCommentStatusPostSucceed = createAction(PUBLISH.CLEAR_COMMENT_POST_STATUS_ACTION_TYPE.SUCCEED)

export const listPostComment = createAction(PUBLISH.LIST_POST_COMMENT_ACTION_TYPE.ACTION)
export const listPostCommentSucceed = createAction(PUBLISH.LIST_POST_COMMENT_ACTION_TYPE.SUCCEED)
export const listPostCommentFailed = createAction(PUBLISH.LIST_POST_COMMENT_ACTION_TYPE.FAILED)
export const listPostCommentError = createAction(PUBLISH.LIST_POST_COMMENT_ACTION_TYPE.ERROR)

export const listFollowers = createAction(PUBLISH.LIST_FOLLOWERS_ACTION_TYPE.ACTION)
export const listFollowersSucceed = createAction(PUBLISH.LIST_FOLLOWERS_ACTION_TYPE.SUCCEED)
export const listFollowersFailed = createAction(PUBLISH.LIST_FOLLOWERS_ACTION_TYPE.FAILED)
export const listFollowersError = createAction(PUBLISH.LIST_FOLLOWERS_ACTION_TYPE.ERROR)

export const taskPublish = createAction(PUBLISH.TASK_PUBLISH_ACTION_TYPE.ACTION)
export const taskPublishSucceed = createAction(PUBLISH.TASK_PUBLISH_ACTION_TYPE.SUCCEED)
export const taskPublishFailed = createAction(PUBLISH.TASK_PUBLISH_ACTION_TYPE.FAILED)
export const taskPublishError = createAction(PUBLISH.TASK_PUBLISH_ACTION_TYPE.ERROR)

export const clearTaskPublishStatus = createAction(PUBLISH.CLEAR_TASK_PUBLISH_STATUS_ACTION_TYPE.ACTION)
export const clearTaskPublishStatusSucceed = createAction(PUBLISH.CLEAR_TASK_PUBLISH_STATUS_ACTION_TYPE.SUCCEED)
