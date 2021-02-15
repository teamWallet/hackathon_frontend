import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Dialog from 'react-native-popup-dialog'

export default function NewCommentDlg (props) {
  const device_width = Dimensions.get('window').width
  const [text, setText] = useState('')
  return (
    <Dialog
      visible={props.visible}
      style={{
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          width: device_width * 0.6,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#000000'
          }}
        >请输入评论内容</Text>
        <TextInput
          style={{
            marginTop: 10,
            width: '100%',
            padding: 5,
            fontSize: 18,
            backgroundColor: '#e6e6e6',
            borderRadius: 5
          }}
          multiline={true}
          onChangeText={setText}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: '#2185d0'
            }}
            onPress={() => props.onPressOK(text)}
          >
            <Text
              style={{
                color: '#FFFFFF',
                paddingHorizontal: 15,
                paddingVertical: 5,
                fontSize: 16
              }}
            >确定</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginLeft: 10,
              borderRadius: 5,
              backgroundColor: '#FF0000'
            }}
            onPress={props.onPressCancel}
          >
            <Text
              style={{
                color: '#FFFFFF',
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 5,
                fontSize: 16
              }}
            >取消</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  )
}
