import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { login } from '../../models/actions/login'
import { useNavigation } from '@react-navigation/native'

function Login (props) {
  const device_width = Dimensions.get('window').width
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    if (props.loginStatus === 1) {
      navigation.replace('main', {})
    } else if (props.loginStatus === -1) {
      Alert.alert('username or password invalid ..')
    } else if (props.loginStatus === -2) {
      Alert.alert('login error ..')
    }
    setShowSpinner(false)
  }, [navigation, props.loginStatus])

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#e6e6e6'
      }}>
      <View style={{ flex: 1 }} />
      <Text
        style={{
          width: device_width * 0.8,
          textAlign: 'left',
          fontSize: 50,
          fontWeight: 'bold',
          paddingHorizontal: 15
        }}>
        登录
      </Text>
      <TextInput
        style={{
          width: device_width * 0.8,
          height: 50,
          backgroundColor: '#FFFFFF',
          marginTop: 80,
          fontSize: 18,
          borderRadius: 40,
          paddingHorizontal: 20
        }}
        placeholder={'用户名'}
        onChangeText={setUsername}
      />

      <TextInput
        style={{
          width: device_width * 0.8,
          height: 50,
          backgroundColor: '#FFFFFF',
          marginTop: 10,
          fontSize: 18,
          borderRadius: 40,
          paddingHorizontal: 20
        }}
        placeholder={'密码'}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={{
          marginTop: 60,
          height: 50,
          backgroundColor: showSpinner ? '#2185d050' : '#2185d0',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 40,
          width: device_width * 0.8
        }}
        disable={showSpinner}
        onPress={() => {
          setShowSpinner(true)
          props.onLogin({
            username,
            password
          })
        }}>
        <View style={{ flex: 1 }}/>
        {showSpinner && <ActivityIndicator size="large" color={'#FFFFFF'}/>}
        {
          !showSpinner && <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF'
          }}>
          确认
        </Text>
        }
        <View style={{ flex: 1 }}/>
      </TouchableOpacity>
      <View style={{ flex: 3 }} />
    </View>
  )
}

const mapStateProps = (state) => {
  console.log('<<<<LOGIN>>>>')
  console.log(state)
  return {
    loginStatus: state.login?.loginStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: (payload) => {
      dispatch(login(payload))
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Login)
