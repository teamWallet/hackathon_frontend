import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import PageHeader from '../../components/page_header'
import PostElement from '../../components/post_element'
import ActionButton from 'react-native-action-button'

import { useNavigation, useIsFocused } from '@react-navigation/native'
import NewCommentDlg from '../publish/new_comment_dlg'
import { clearCommentStatusPost, commentPost, listPost, likePost, listFollowers } from '../../models/actions/publish'
import { Tabs } from '@ant-design/react-native'
import Menu from './menu'
import { showProfile, showWallet } from '../../models/actions/login'

function Index (props) {
  const navigation = useNavigation()
  const [showCommentDlg, setShowCommentDlg] = useState(false)
  const [commentPostId, setCommentPostId] = useState('')
  const listPostData = useMemo(() => props?.listPostData, [props?.listPostData])
  const [showMenu, setShowMenu] = useState(false)
  const isFocused = useIsFocused()
  useEffect(() => {
    if (isFocused) {
      props.onListPosts({
      })
      props.onListFollowers({
        name: props.name,
        role: 'followers'
      })
      props.onShowProfile({
        name: props.name
      })
      props.onShowWallet({
        name: props.name
      })
    }
  }, [props?.likePostStatus, isFocused])

  console.log('111======>', props?.wallet)
  useEffect(() => {
    if (props.commentPostStatus === 1) {
      Alert.alert('留言成功!')
      props.onListPosts({
        // current: 1,
        // name: props.name,
        // pageSize: 50
      })
    } else if (props.commentPostStatus === -1) {
      Alert.alert('留言失败, 请稍后重试!')
    } else if (props.commentPostStatus === -2) {
      Alert.alert('留言异常, 请稍后重试!')
    }
    props.onClearCommentPostStatus()
  }, [props.commentPostStatus])

  const TABS = [
    { title: '全部', id: 1 },
    { title: '关注', id: 2 },
    { title: '社群', id: 3 }
  ]

  const _onPressLike = useCallback(async (item) => {
    await props.onPostLike({
      name: item?.name,
      upID: item?.postId,
      likeFlag: true,
      type: 'posts'
    })
    props.onListPosts({
    })
  }, [])

  const renderAll = useCallback(() => (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: '#e6e6e6'
          }}>
          {
            listPostData && listPostData.map((item, index) => {
              return (
                <PostElement
                  userIcon={item?.avatar}
                  username={item.name}
                  timestamp={item.updatedAt}
                  readTime={'3 min'}
                  coverImage={item.images}
                  coverTitle={item.title}
                  coverText={item.content}
                  commentCount={item.comments}
                  likeCount={item.likes}
                  onPressAvatar={() => { navigation.navigate('profile', { name: item?.name }) }}
                  onPressBody={() => {
                    navigation.navigate('post_detail', { postData: item })
                  }}
                  onPressComment={() => {
                    setCommentPostId(item.postId)
                    setShowCommentDlg(true)
                  }}
                  onPressLike={() => { _onPressLike(item) }}
                  key={index}
                />
              )
            })
          }
        </View>
      </ScrollView>
      <ActionButton
          buttonColor="rgba(231,76,60,1)"
          position={'right'}
          active={true}
          size={55}
          style={{
            marginBottom: 20
          }}
          degrees={0}
          onPress={() => {
            navigation.navigate('new_publish', {})
          }}
      />
    </View>
  ), [listPostData])

  const renderFollowers = useCallback(() => (
          <View>
            {
              props.listFollowers && props.listFollowers.map((item, index) => {
                return (
                    <View
                        key={index}
                        style={{
                          paddingVertical: 10,
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          paddingHorizontal: 19
                        }}>
                      <Image style={{ width: 60, height: 60, borderRadius: 30 }}
                             source={{ uri: item.avatar }}>
                      </Image>
                      <View style={{ marginLeft: 30 }}>
                        <View>
                          {item?.nickName && (<Text style={{ fontSize: 24, fontWeight: 'bold' }}> {item.nickName} </Text>)}
                        </View>
                        <View>
                          {item?.name && (<Text style={{ fontSize: 17, fontWeight: '300', marginTop: 5 }}> {item.name} </Text>)}
                        </View>
                      </View>
                    </View>)
              })
            }
          </View>)
  , [props?.listFollowers])

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column'
      }}
    >
      <PageHeader
        left={
          <TouchableOpacity
            style={{
              flex: 1
            }}
            onPress={() => {
              setShowMenu(true)
            }}
          >
            <Image
              style={{
                width: 45,
                height: 45,
                borderRadius: 45
              }}
              source={{ uri: props?.profile?.name?.avatar }}
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
              {props?.wallet?.name?.amount}
          </Text>
        }
      />

      <Tabs
        tabs={TABS}
        tabBarUnderlineStyle={{ borderColor: '#2185d0', borderBottomWidth: 4 }}
      >
        <View>{renderAll()}</View>
        <View>{renderFollowers()}</View>
        <View></View>
      </Tabs>

      <NewCommentDlg
        visible={showCommentDlg}
        onPressOK={(comment) => {
          if (comment !== '') {
            props.onCommentPost({
              name: props.name,
              upID: commentPostId,
              content: comment,
              type: '',
              images: ''
            })
          }
          setShowCommentDlg(false)
        }}
        onPressCancel={() => {
          setShowCommentDlg(false)
        }}
      />
      <Menu
        isVisible={showMenu}
        onPressClose={() => setShowMenu(false)}
      />
    </View>
  )
}

const mapStateProps = (state) => {
  console.log('<<<<MAIN>>>>')
  console.log(state)
  return {
    name: state.login?.name,
    listPostStatus: state.publish?.listPostStatus,
    listPostData: state.publish?.listPostData,
    listFollowers: state.publish?.listFollowers,
    commentPostStatus: state.publish?.commentPostStatus,
    likePostStatus: state.publish?.likePostStatus,
    profile: state.login?.profile,
    wallet: state.login?.wallet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onListPosts: (payload) => {
      dispatch(listPost(payload))
    },

    onPostLike: async (payload) => {
      dispatch(likePost(payload))
    },

    onCommentPost: (payload) => {
      dispatch(commentPost(payload))
    },
    onClearCommentPostStatus: () => {
      dispatch(clearCommentStatusPost())
    },
    onListFollowers: (payload) => {
      dispatch(listFollowers(payload))
    },
    onShowProfile: (payload) => {
      dispatch(showProfile(payload))
    },
    onShowWallet: (payload) => {
      dispatch(showWallet(payload))
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Index)
