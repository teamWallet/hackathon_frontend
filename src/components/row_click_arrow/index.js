import React, { useCallback } from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native'

export default function RowClickArrow (props) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#e6e6e6',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#000000'
        }}
      >{props.title}</Text>
      <Text
        style={{
          flex: 1,
          fontSize: 16,
          color: '#00000060',
          paddingHorizontal: 20,
        }}
      >
        {props.text}
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: '#00000060'
        }}
      >></Text>
    </TouchableOpacity>
  )
}
