import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

export default function PostElement (props) {
  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={props.onPressAvatar}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 60
            }}
            source={{ uri: props.userIcon }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: 10
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingBottom: 5
            }}
          >{props.username}</Text>
          <Text
            style={{
              fontSize: 15,
              color: '#00000080'
            }}
          >{props.timestamp}  ~  {props.readTime} read</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '100%'
        }}
        onPress={props.onPressBody}
      >
        {
          props.coverImage && <Image
            style={{
              width: '100%',
              height: 200,
              borderRadius: 10,
              marginTop: 10
            }}
            source={{ uri: props.coverImage }}
          />
        }
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#000000',
            width: '100%',
            marginTop: 15
          }}
        >{props.coverTitle}</Text>

        <Text
          style={{
            fontSize: 15,
            color: '#000000',
            width: '100%',
            marginTop: 15
          }}
        >{props.coverText}</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          width: '100%'
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={props.onPressComment}
        >
          <Image
            style={{
              width: 30,
              height: 30
            }}
            source={require('../../assets/message_icon.jpeg')}
          />
          <Text
            style={{
              fontSize: 17,
              color: '#00000080',
              paddingLeft: 5,
              paddingRight: 10
            }}
          >{props.commentCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={props.onPressLike}
        >
          <Image
            style={{
              width: 30,
              height: 30
            }}
            source={require('../../assets/like_icon.jpeg')}
          />
          <Text
            style={{
              fontSize: 17,
              color: '#00000080',
              paddingLeft: 5,
              paddingRight: 10
            }}
          >{props?.likeCount}</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}/>

      </View>
    </View>
  )
}
