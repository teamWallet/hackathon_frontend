import * as React from 'react'
export const navigationRef = React.createRef()

export const navigate = function (name, params) {
  if (navigationRef.current) {
    navigationRef.current.navigate({ name, key: name, params })
  }
}
export const navigateReplace = function (name, params) {
  if (navigationRef.current) {
    navigationRef.current.reset({
      index: 0,
      routes: [{ name, key: name, params }]
    })
  }
}

export const goBack = function () {
  console.log('====>', navigationRef.current)
  if (navigationRef.current) {
    return navigationRef.current.goBack()
  }
  return null
}
export const getCurrentRoute = function () {
  if (navigationRef.current) {
    return navigationRef.current.getCurrentRoute()
  }
  return null
}
