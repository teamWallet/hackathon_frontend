import { post } from '../utils/post'

export function publishPost_POST (params) {
  return post('/post/publish', JSON.stringify(params))
}

export function listPost_POST (params) {
  return post('/post/list', JSON.stringify(params))
}

export function commentPost_POST (params) {
  return post('/post/comment', JSON.stringify(params))
}

export function listPostComment_POST (params) {
  return post('/post/comment/list', JSON.stringify(params))
}

export function likePost_POST (params) {
  return post('/post/active', JSON.stringify(params))
}

export function listFollowers_POST (params) {
  return post('/account/attention/list', JSON.stringify(params))
}

export function taskPublish_POST (params) {
  return post('/task/publish', JSON.stringify(params))
}
