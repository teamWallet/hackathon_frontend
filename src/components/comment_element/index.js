import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

export default function CommentElement (props) {
  return (
    <View
      style={{
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#e6e6e6'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Image
          style={{
            width: 45,
            height: 45,
            borderRadius: 30
          }}
          source={{ uri: props.commentorIcon }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10
          }}
        >{props.commentorName}</Text>
        <Text
          style={{
            flex: 1,
            fontSize: 15,
            color: '#00000080'
          }}
        >   @ {props.commentTime}</Text>
      </View>
      <Text
        style={{
          width: '100%',
          textAlign: 'left',
          fontSize: 16,
          marginLeft: 80,
          marginBottom: 10
        }}
      >{props.commentContent}</Text>
    </View>
  )
}
