import React, { useCallback, useEffect } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native'
import PageHeader from '../../components/page_header'
import { useNavigation } from '@react-navigation/native'
import { Tabs } from '@ant-design/react-native'
import RequiringElement from '../../components/requiring_element'

export default function RequiringList (props) {
  const navigation = useNavigation()

  const TABS = [
    { title: '贴文', id: 1 },
    { title: '点赞', id: 2 }
  ]

  const renderPost = useCallback(() => {
    return (
      <ScrollView
        style={{
          height: '100%',
          flexDirection: 'column',
          padding: 20
        }}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            const data = {
              avatar: 'https://img.icons8.com/bubbles/2x/user-male.png',
              title: 'Company Name',
              time: '9:40',
              text: 'brief text brief text brief text brief text brief text brief text brief text brief text brief text',
              reward: 1500,
              likeNumber: '10K',
              submitTime: '2020-12-12 18:40'
            }
            return (
              <RequiringElement
                key={index}
                status={1} // 0: new / 1: read / 2: accepted
                avatar={'https://img.icons8.com/bubbles/2x/user-male.png'}
                title={'Company Name'}
                time={'9:40'}
                text={'brief text brief text brief text brief text brief text brief text brief text brief text brief text '}
                onPress={() => { navigation.navigate('requiring_detail', { data }) }}
              />
            )
          })
        }

      </ScrollView>
    )
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF'
      }}
    >
      <PageHeader
        left={
          <TouchableOpacity
            style={{
              flex: 1
            }}
            onPress={() => {
              navigation.navigate('main', {})
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
              谁在约我
            </Text>
          </View>
        }
      />
      <Tabs
        tabs={TABS}
        tabBarUnderlineStyle={{ borderColor: '#2185d0', borderBottomWidth: 4 }}
      >
        <View>{renderPost()}</View>
        <View></View>
      </Tabs>
    </View>
  )
}
