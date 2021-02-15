import React from 'react'
import {
  View,
  Image,
  Text
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Initial (props) {
  const navigation = useNavigation()

  setTimeout(() => {
    navigation.replace('login', {})
  }, 2000)
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      }}
    >
      <View style={{ flex: 1 }}/>
      <Image
        style={{
          width: 100,
          height: 100
        }}
        source={require('../../assets/ym_icon_large.jpeg')}
      />
      <Text
        style={{
          fontSize: 20,
          marginTop: 20
        }}
      >发现你的不同凡响</Text>
      <View style={{ flex: 2 }}/>
    </View>
  )
}
