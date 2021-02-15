import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image, ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import PageHeader from '../../components/page_header'
import { Tabs } from '@ant-design/react-native'
import { listPost } from '../../models/actions/publish'
import { showProfile, showWallet } from '../../models/actions/login'
import PostElement from '../../components/post_element'
import ActionButton from 'react-native-action-button'

function Profile (props) {
  const navigation = useNavigation()
  const propsName = useMemo(() => { return props?.route?.params?.name || props?.name }, [props])
  const TABS = [
    { title: '贴文', id: 1 },
    { title: '点赞', id: 2 },
    { title: '社群', id: 3 }
  ]
  useEffect(() => {
    props.onListPosts({
      name: propsName
    })
    props.onShowProfile({
      name: propsName
    })
    props.onShowWallet({
      name: propsName
    })
  }, [propsName])

  const renderAavater = useCallback(() => (
    <View style={styles.avaterContainer}>
      <TouchableOpacity onPress={() => {}} style={styles.second}>
        <Image style={styles.avater} source={{ uri: props?.profile?.name?.avatar }} />
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
          {props?.profile?.name?.nickName}
        </Text>
        <Text style={{ fontSize: 13, color: '#909090', marginTop: 10 }}>
          @ {props?.profile?.name?.name}
        </Text>
      </View>
    </View>
  ), [props?.profile])

  const renderButtons = useCallback(() => (
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.buttonFirst}
      >
        <Text
          style={styles.buttonText}
        >
          关注
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecond}
        onPress={() => {
          navigation.navigate('hiring_info', { nameToHire: props?.profile?.name?.name })
        }}
      >
        <Text
          style={styles.buttonText}
        >
          招贤
        </Text>
      </TouchableOpacity>
    </View>
  ), [props?.profile])

  const renderMenu = useCallback(() => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 19 }}>
      <View style={styles.menuItem}>
        <View><Text style={styles.menuTitle}>125</Text></View>
        <View><Text style={styles.menuText}>关注</Text></View>
      </View>
      <View style={styles.menuItem}>
        <View><Text style={styles.menuTitle}>725</Text></View>
        <View><Text style={styles.menuText}>粉丝</Text></View>
      </View>
      <View style={styles.menuItem}>
        <View><Text style={styles.menuTitle}>{props?.wallet?.name?.amount}</Text></View>
        <View><Text style={styles.menuText}>YM</Text></View>
      </View>
      <View style={styles.menuItem}>
        <View><Text style={styles.menuTitle}>Lv 1</Text></View>
        <View><Text style={styles.menuText}>等级</Text></View>
      </View>
    </View>
  ), [props?.wallet])

  const renderMyPosts = useCallback(() => (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: '#e6e6e6'
          }}>
          {
            props?.listPostData && props?.listPostData.map((item, index) => {
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
                  onPressAvatar={() => {}}
                  onPressBody={() => {
                    navigation.navigate('post_detail', { postData: item })
                  }}
                  onPressComment={() => {
                  }}
                  onPressLike={() => {}}
                  key={index}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  ), [props?.listPostData])

  return (
    <View style={styles.container}>
      <PageHeader
        left={
          <TouchableOpacity
            style={{
              flex: 1
            }}
            onPress={() => { navigation.goBack(null) }}
          >
            <Image
              style={{
                width: 30,
                height: 30
              }}
              source={require('../../assets/back_arrow_icon.jpeg')}
            />
          </TouchableOpacity>
        }
        />

      {renderAavater()}

      {renderMenu()}

      {propsName !== props?.name && renderButtons()}

      <Tabs
        tabs={TABS}
        tabBarUnderlineStyle={{ borderColor: '#2185d0', borderBottomWidth: 4 }}
        tabBarTextStyle={{ fontSize: 13, letterSpacing: -0.21 }}
      >
        <View>{renderMyPosts()}</View>
        <View></View>
        <View></View>
      </Tabs>

    </View>
  )
}

const mapStateProps = (state) => {
  return {
    listPostData: state.publish?.listPostData,
    profile: state.login?.profile,
    name: state.login?.name,
    wallet: state.login?.wallet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onListPosts: (payload) => {
      dispatch(listPost(payload))
    },
    onShowProfile: (payload) => {
      dispatch(showProfile(payload))
    },
    onShowWallet: (payload) => {
      dispatch(showWallet(payload))
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Profile)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: 22,
    height: 22
  },
  header: {
    height: 50,
    justifyContent: 'center'
  },
  avater: {
    width: 138,
    height: 138,
    borderRadius: 70
  },
  avaterContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  second: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 27
  },
  menuTitle: {
    fontSize: 22,
    lineHeight: 30
  },
  menuText: {
    fontSize: 12,
    color: '#6e8ca0'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 13,
    marginHorizontal: 19
  },
  buttonFirst: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginRight: 15
  },
  buttonSecond: {
    width: 73,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2
  },
  buttonText: {
    fontSize: 16
  }
})
