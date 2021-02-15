import React, { useCallback } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView, Dimensions
} from 'react-native'
import PageHeader from '../../components/page_header'
import { useNavigation } from '@react-navigation/native'

export default function RequiringDetail (props) {
  const navigation = useNavigation()
  const data = props.route.params.data
  const device_width = Dimensions.get('window').width

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <PageHeader
        left={
          <TouchableOpacity
            style={{
              flex: 1
            }}
            onPress={() => {
              navigation.navigate('requiring_list', {})
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 20
              }}
              source={require('../../assets/back_arrow_icon.jpeg')}
            />
          </TouchableOpacity>
        }
        mid={
          <View
            style={{
              flex: 4,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40
              }}
              source={require('../../assets/ym_icon.jpeg')}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 10
              }}
            >
              约稿详情
            </Text>
          </View>
        }
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          paddingHorizontal: 20
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
              width: 80,
              height: 80
            }}
            source={{ uri: data.avatar }}
          />
          <Text
            style={{
              flex: 1,
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 10
            }}
          >{data.title}</Text>
        </View>

        <Text
          style={{
            width: '100%',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 30
          }}
        >任务金额</Text>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30
            }}
            source={require('../../assets/ym_icon.jpeg')}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#00000080',
              marginLeft: 10
            }}
          >{data.reward} - 点赞数量 {data.likeNumber}</Text>
        </View>

        <Text
          style={{
            width: '100%',
            fontSize: 16,
            color: '#00000080',
            marginTop: 10
          }}
        >提交时间  {data.submitTime}</Text>

        <Text
          style={{
            width: '100%',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 30
          }}
        >任务详情</Text>

        <Text
          style={{
            width: '100%',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20
          }}
        >{data.title}</Text>

        <Text
          style={{
            width: '100%',
            fontSize: 16,
            marginTop: 15
          }}
        >{data.text}</Text>

        <View style={{ flex: 3 }}/>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: device_width * 0.8,
            padding: 15,
            backgroundColor: '#000000',
            borderRadius: 10
          }}
        >
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#FFFFFF'
            }}
          >接受</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: device_width * 0.8,
            padding: 15,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: 10,
            borderColor: '#00000080',
            borderWidth: 1
          }}
        >
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000000'
            }}
          >拒绝</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}/>

      </View>
    </View>
  )
}
