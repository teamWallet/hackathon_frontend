import React from 'react'
import {
  View
} from 'react-native'

export default function PageHeader (props) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: '#e6e6e6'
      }}
    >
      {props.left}
      {/* <View style={{flex: 1,}}/> */}
      {props.mid}
      {/* <View style={{flex: 1,}}/> */}
      {props.right}
    </View>
  )
}
