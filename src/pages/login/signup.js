import React from 'react'
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native'

export default function Signup (props) {
  const device_width = Dimensions.get('window').width
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#00000020'
      }}>
      <View style={{ flex: 1 }} />
      <Text
        style={{
          width: device_width * 0.8,
          textAlign: 'left',
          fontSize: 50,
          fontWeight: 'bold',
          paddingHorizontal: 15
        }}>
        SIGNUP
      </Text>
      <TextInput
        style={{
          width: device_width * 0.8,
          height: 50,
          backgroundColor: '#FFFFFF',
          marginTop: 80,
          borderRadius: 40,
          paddingHorizontal: 20
        }}
        placeholder={'username'}
      />

      <TextInput
        style={{
          width: device_width * 0.8,
          height: 50,
          backgroundColor: '#FFFFFF',
          marginTop: 10,
          borderRadius: 40,
          paddingHorizontal: 20
        }}
        placeholder={'password'}
      />

      <TouchableOpacity
        style={{
          marginTop: 20,
          height: 50,
          backgroundColor: '#2185d0',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 40
        }}>
        <Text
          style={{
            width: device_width * 0.8,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF'
          }}>
          Confirm
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 2 }} />
    </View>
  )
}
