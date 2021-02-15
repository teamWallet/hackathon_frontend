import { Platform, Alert } from 'react-native'
import { check, PERMISSIONS, RESULTS, openSettings, request } from 'react-native-permissions'

// Android permissions
const androidPermissions = {
  camera: PERMISSIONS.ANDROID.CAMERA,
  microphone: PERMISSIONS.ANDROID.RECORD_AUDIO,
  photo: PERMISSIONS.ANDROID.CAMERA
}

// iOS permissions
const iosPermissions = {
  camera: PERMISSIONS.IOS.CAMERA,
  microphone: PERMISSIONS.IOS.MICROPHONE,
  photo: PERMISSIONS.IOS.PHOTO_LIBRARY
}

export const PermissionTypes = 'photo' | 'camera' | 'microphone'

export const checkPermission = async (type, errorCallback) => {
  let permissionType
  if (Platform.OS === 'ios') {
    permissionType = iosPermissions[type]
  } else {
    permissionType = androidPermissions[type]
  }

  const _errorCallback = () => {
    if (errorCallback) {
      errorCallback()
      return
    }
    Alert.alert(
      'Cannot be done 😞',
            `If you would like to use this feature, you'll need to enable the ${type} permission in your phone settings.`,
            [
              {
                text: "Let's go!",
                onPress: () => openSettings()
              },
              { text: 'Nevermind', onPress: () => {}, style: 'cancel' }
            ],
            { cancelable: true }
    )
  }

  const requestPermission = (_type) => {
    return request(_type)
      .then(result => {
        if (result === RESULTS.GRANTED) {
          return true
        }
        return false
      })
      .catch(() => {
        return false
      })
  }

  return check(permissionType)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          return false
        case RESULTS.DENIED:
          return requestPermission(permissionType)
        case RESULTS.GRANTED:
          return true
        case RESULTS.BLOCKED:
          _errorCallback()
          return false
      }
    })
    .catch(() => {
      return false
    })
}
