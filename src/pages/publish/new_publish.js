import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native'
import PageHeader from '../../components/page_header'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { publishPost } from '../../models/actions/publish'

function NewPublish (props) {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [showSpinner, setShowSpinner] = useState(false)

  const navigation = useNavigation()

  useEffect(() => {
    if (props.publishPostStatus === 1) {
      navigation.navigate('main', {})
      Alert.alert('发帖成功, 请刷新查看')
    } else if (props.publishPostStatus === -1) {
      Alert.alert('发帖失败, 请稍后重试')
    } else if (props.publishPostStatus === -2) {
      Alert.alert('发帖异常, 请稍后重试')
    }
    setShowSpinner(false)
  }, [props.publishPostStatus, navigation])

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
            onPress={() => navigation.navigate('main', {})}
          >
            <Image
              source={require('../../assets/x_icon.jpeg')}
              style={{
                height: 30,
                width: 30
              }}
            />
          </TouchableOpacity>
        }
        mid={<View style={{ flex: 1 }}/>}
        right={
          <TouchableOpacity
            onPress={() => {
              // post a new post
              setShowSpinner(true)
              props.onPublishPost({
                name: props.name,
                content: postBody,
                title: postTitle,
                images: 'https://velvetescape.com/wp-content/uploads/2011/11/IMG_2370-3-1280x920.jpg',
                tag: 'test',
                brief: 'test brief',
                addressInfo: 'test address',
                top: 1
              })
            }}
          >
            {showSpinner && <ActivityIndicator size="large" color={'rgba(231,76,60, 100)'}/> }
            {
              !showSpinner && <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'rgba(231,76,60, 100)'
                }}
              >
                发布
              </Text>
            }
          </TouchableOpacity>
        }
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            color: '#00000090'
          }}
        >
          帖子标题: {postTitle.length} / 20
        </Text>
        <TextInput
          style={{
            width: '100%',
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 1.5,
            fontSize: 18,
            marginTop: 20,
            paddingVertical: 5
          }}
          placeholder={'请输入帖子标题'}
          onChangeText={(text) => {
            if (text.length <= 20) { setPostTitle(text) }
          }}
          value={postTitle}
        />

        <Text
          style={{
            marginTop: 50,
            fontSize: 18,
            color: '#00000090'
          }}
        >
          帖子内容: {postBody.length} / 200
        </Text>
        <TextInput
          style={{
            width: '100%',
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 1.5,
            fontSize: 18,
            marginTop: 20,
            paddingVertical: 5
          }}
          placeholder={'请输入帖子内容'}
          multiline={true}
          onChangeText={(text) => {
            if (text.length <= 200) { setPostBody(text) }
          }}
          value={postBody}
        />
      </View>
    </View>
  )
}

const mapStateProps = (state) => {
  console.log('<<<<PUBLISH>>>>')
  console.log(state)
  return {
    name: state.login?.name,
    publishPostStatus: state.publish?.publishPostStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPublishPost: (payload) => {
      dispatch(publishPost(payload))
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(NewPublish)
