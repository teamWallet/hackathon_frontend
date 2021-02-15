import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Image, TouchableOpacity, Platform
} from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker'
import { checkPermission } from '../../utils/camera'

function HiringWriting (props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const pickPhotosOrVideo = useCallback(async () => {
    const res = await checkPermission('photo')
    if (res) {
      ImagePicker.openPicker({
        mediaType: 'photo',
        cropperCircleOverlay: true,
        includeBase64: true,
        compressImageMaxHeight: 500,
        compressImageMaxWidth: 500
      })
        .then((_medias) => {
          setImage(_medias)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [])
  return (
      <View>
          <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 19,
                marginTop: 20,
                alignItems: 'center'
              }}>
              <Image style={{ width: 24, height: 24 }} source={require('./../../assets/x_icon.jpeg')}/>
              <View>
                  <Text style={{ fontSize: 17, color: '#007aff', fontWeight: 'bold' }}>提交</Text>
              </View>
          </View>
          <View style={{
            flexDirection: 'row',
            paddingHorizontal: 19,
            marginTop: 20,
            paddingBottom: 10,
            borderBottomWidth: 0.5,
            borderColor: '#d0cdcd'
          }}>
             <Text style={{ fontSize: 22, letterSpacing: 0.35, fontWeight: 'bold' }}>标题</Text>
              <TextInput
                  value={title}
                  onChangeText={(value) => {
                    setTitle(value)
                  }}
                  autoFocus
                  style={{ flex: 1, marginLeft: 10 }}
              />
          </View>
          <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? 'padding' : ''} enabled >
              <View style={{
                paddingHorizontal: 26,
                height: '80%',
                paddingTop: 10,
                backgroundColor: '#fff'

              }}>
                  <TextInput
                      onChangeText={value => setContent(value)}
                      returnKeyType="done"
                      value={content}
                      placeholder="正文"
                      placeholderTextColor="#000000"
                      style={{
                        textAlignVertical: 'top',
                        fontSize: 19,
                        letterSpacing: -0.48,
                        fontWeight: '300'
                      }}
                      numberOfLines={50}
                      onSubmitEditing={Keyboard.dismiss}
                      autoFocus
                      multiline
                  />
              </View>
              <View>
                  <Image source={{ uri: image?.path }}/>
              </View>
              <View style={{ height: 40, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                      onPress={() => pickPhotosOrVideo() }
                  >
                  <Image style={{ width: 34, height: 26.5 }} source={require('../../assets/album_gray.png')} />
                  </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>

      </View>

  )
}

const mapStateProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateProps, mapDispatchToProps)(HiringWriting)
