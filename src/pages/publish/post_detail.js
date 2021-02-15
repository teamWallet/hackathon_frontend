import React, { useCallback, useEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput, ActivityIndicator
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PageHeader from '../../components/page_header'
import CommentElement from '../../components/comment_element'
import { connect } from 'react-redux'
import { clearCommentStatusPost, commentPost, listPostComment } from '../../models/actions/publish'

function PostDetail (props) {
  const navigation = useNavigation()
  const postData = props.route.params.postData
  const [comment, setComment] = useState('')
  const [showSendSpinner, setShowSendSpinner] = useState(false)

  useEffect(() => {
    props.onListPostComment({
      name: props.name,
      upID: postData.postId,
      sortTypes: 'posts'
    })
  }, [])

  useEffect(() => {
    setShowSendSpinner(false)
    if (props.commentPostStatus === 1) {
      props.onListPostComment({
        name: props.name,
        upID: postData.postId,
        sortTypes: 'posts'
      })
    }
    props.onClearCommentPostStatus()
  }, [props.commentPostStatus])

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
              flex: 3,
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
              一鸣
            </Text>
          </View>
        }
        right={
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              color: '#00000080',
              textAlign: 'right'
            }}
          >
            4.9K
          </Text>
        }
      />
      <ScrollView
        style={{
          flex: 1,
          padding: 20
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 40
          }}
        >
          {postData.title}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
          >
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 60
              }}
              source={{ uri: 'https://img.icons8.com/bubbles/2x/user-male.png' }}
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
            >{postData.name}</Text>
            <Text
              style={{
                fontSize: 15,
                color: '#00000080'
              }}
            >{postData.updatedAt}  ~  {'3 min'} read</Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 16,
            marginTop: 40
          }}
        >
          {postData.content}
        </Text>

        <Image
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginTop: 10
          }}
          source={{ uri: postData.images }}
        />

        <Text
          style={{
            width: '100%',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20
          }}
        >
          说点什么:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              flex: 5,
              backgroundColor: '#e6e6e6',
              marginTop: 10,
              borderRadius: 5,
              padding: 5,
              marginRight: 10,
              fontSize: 17
            }}
            multiline={true}
            onChangeText={setComment}
            value={comment}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: showSendSpinner ? '#2185d050' : '#2185d0',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 3,
              marginTop: 8,
              flexDirection: 'column',
              alignItems: 'center'
            }}
            disable={showSendSpinner}
            onPress={() => {
              if (comment !== '') {
                setShowSendSpinner(true)
                props.onCommentPost({
                  name: props.name,
                  upID: postData.postId,
                  content: comment,
                  type: '',
                  images: ''
                })
                setComment('')
              }
            }}
          >
            {showSendSpinner && <ActivityIndicator size="small" color={'#FFFFFF'}/>}
            {!showSendSpinner &&
              <Text
                style={{
                  fontSize: 16,
                  color: '#FFFFFF'
                }}
              >发送</Text>
            }
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 2,
            paddingBottom: 10
          }}
        >
          <Text
            style={{
              width: '100%',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20
            }}
          >
            所有评论:
          </Text>
        </View>
        {
          props.listPostComments && props.listPostComments.map((item, index) => {
            console.log(item)
            return (
              <CommentElement
                key={index}
                commentorIcon={'https://img.icons8.com/bubbles/2x/user-male.png'}
                commentorName={item.name}
                commentTime={item.updatedAt.split(' ')[0]}
                commentContent={item.content}
              />
            )
          })
        }
        <View style={{ height: 150 }}/>
      </ScrollView>
    </View>
  )
}

const mapStateProps = (state) => {
  console.log('<<<<POST DETAIL>>>>')
  console.log(state)
  return {
    name: state.login?.name,
    listPostComments: state.publish?.listPostComments,
    commentPostStatus: state.publish?.commentPostStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onListPostComment: (payload) => {
      dispatch(listPostComment(payload))
    },
    onCommentPost: (payload) => {
      dispatch(commentPost(payload))
    },
    onClearCommentPostStatus: () => {
      dispatch(clearCommentStatusPost())
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(PostDetail)
