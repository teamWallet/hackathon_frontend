import React from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'
import Modal from 'react-native-modal'
import { login, logout } from '../../models/actions/login'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

function Menu (props) {
  const device_width = Dimensions.get('window').width
  const device_height = Dimensions.get('window').height

  const navigation = useNavigation()

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      backdropColor={'#00000080'}
      style={{
        margin: 0,
        flexDirection: 'row'
      }}
    >
      <View
        style={{
          height: device_height,
          width: device_width * 0.8,
          backgroundColor: '#FFFFFF',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingHorizontal: 20,
          paddingTop: 50
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log('223423432')
              navigation.navigate('profile')
              props.onPressClose()
            }}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 40
              }}
              source={{ uri: props?.profile?.name?.avatar }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 10
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#000000',
                fontWeight: 'bold'
              }}
            >{props.name}</Text>
            <Text
              style={{
                fontSize: 16,
                color: '#00000080'
              }}
            >@{props.name}</Text>
          </View>
          <TouchableOpacity
            onPress={props.onPressClose}
          >
            <Image
              style={{
                width: 30,
                height: 30
              }}
              source={require('../../assets/x_icon.jpeg')}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 3 }}/>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={() => {}}
        >
          <Image
            style={{
              width: 35,
              height: 35
            }}
            source={require('../../assets/me_icon.jpeg')}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 30
            }}
          >我的主页</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20
          }}
          onPress={() => {
            props.onPressClose()
            navigation.navigate('requiring_list', {})
          }}
        >
          <Image
            style={{
              width: 35,
              height: 35
            }}
            source={require('../../assets/msg_icon.jpeg')}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 30
            }}
          >约稿</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20
          }}
          onPress={() => {
            props.onPressClose()
            navigation.navigate('hiring_info', {})
          }}
        >
          <Image
            style={{
              width: 35,
              height: 35
            }}
            source={require('../../assets/msg_icon.jpeg')}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 30
            }}
          >邀请</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20
          }}
          onPress={() => {
            props.onLogout()
            navigation.navigate('login', {})
            props.onPressClose()
          }}
        >
          <Image
            style={{
              width: 35,
              height: 35
            }}
            source={require('../../assets/logout_icon.jpeg')}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 30
            }}
          >退出</Text>
        </TouchableOpacity>

        <View style={{ flex: 5 }}/>

        <TouchableOpacity
          onPress={() => {}}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#00000080'
            }}
          >帮助</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
        >
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              color: '#00000080'
            }}
          >关于一鸣</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
        >
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              color: '#00000080'
            }}
          >使用条款</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
        >
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              color: '#00000080'
            }}
          >隐私保护</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
        >
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              color: '#00000080'
            }}
          >使用协议</Text>
        </TouchableOpacity>

        <View style={{ flex: 2 }}/>

      </View>
      <TouchableOpacity
        onPress={props.onPressClose}
        style={{
          height: device_height,
          width: device_width * 0.2
        }}
      >
      </TouchableOpacity>
    </Modal>
  )
}

const mapStateProps = (state) => {
  return {
    name: state.login?.name,
    profile: state.login?.profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Menu)
