import React, { useCallback } from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native'

export default function RequiringElement(props) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#00000080',
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
      }}
      onPress={props.onPress}
    >
      {
        props.status === 0 &&
        <Image
          style={{
            width: 25,
            height: 25
          }}
          source={require('../../assets/red_dot.jpeg')}
        />
      }
      {
        props.status === 1 &&
        <Image
          style={{
            width: 25,
            height: 25
          }}
          source={require('../../assets/blue_dot.jpeg')}
        />
      }
      {
        props.status === 2 &&
        <Image
          style={{
            width: 25,
            height: 25
          }}
          source={require('../../assets/black_check.jpeg')}
        />
      }

      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: 70
        }}
        source={{ uri: props.avatar }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: 10
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >{props.title}</Text>
          <Text
            style={{
              flex: 1,
              textAlign: 'right',
              fontSize: 18,
              color: 'rgba(60, 60, 67, 0.6)'
            }}
          >{props.time} ></Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            color: 'rgba(60, 60, 67, 0.6)'
          }}
        >{props.text}</Text>

      </View>
    </TouchableOpacity>
  )
}
