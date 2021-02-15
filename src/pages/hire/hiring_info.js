import React, { useCallback, useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  TextInput,
  Alert, ActivityIndicator
} from 'react-native'
import PageHeader from '../../components/page_header'
import { useNavigation } from '@react-navigation/native'
import RowClickArrow from '../../components/row_click_arrow'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { clearTaskPublishStatus, taskPublish } from '../../models/actions/publish'

function HiringInfo (props) {
  const navigation = useNavigation()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [showDeadlineDateTimePicker, setShowDeadlineDateTimePicker] = useState(false)
  const [utcDeadlineDateTime, setUTCDeadlineDateTime] = useState(new Date())
  const [showDesignatedDateTimePicker, setShowDesignatedDateTimePicker] = useState(false)
  const [utcDesignatedDateTime, setUTCDesignatedDateTime] = useState(new Date())
  const [showSlideup, setShowSlideup] = useState(false)
  const [payment, setPayment] = useState(20)
  const [likes, setLikes] = useState(100)
  const [showSendSpinner, setShowSendSpinner] = useState(false)

  const nameToHire = props.route.params.nameToHire

  useEffect(() => {
    setShowSendSpinner(false)
    if (props.taskPublishStatus === 1) {
      Alert.alert('发布需求给 ' + nameToHire + ' 成功')
      navigation.navigate('main', {})
    } else if (props.taskPublishStatus === -1) {
      Alert.alert('发布需求给 ' + nameToHire + ' 失败')
    } else if (props.taskPublishStatus === -2) {
      Alert.alert('发布需求给 ' + nameToHire + ' 异常')
    }
    props.onClearPublishTaskStatus()
  }, [props.taskPublishStatus])

  return (
    <View
      style={{
        flex: 1,
        color: '#FFFFFF'
      }}
    >
      <PageHeader
        left={
          <TouchableOpacity
            style={{
              flex: 1
            }}
            onPress={() => {
              navigation.goBack()
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
              发布需求
            </Text>
          </View>
        }
        right={
          <TouchableOpacity
            onPress={() => {
              setShowSendSpinner(true)
              props.onPublishTask({
                title: title,
                body: text,
                status: 'sentToExecutor',
                neededLikes: likes,
                payment: payment,
                name: props.name,
                executorName: nameToHire
              })
            }}
            disable={showSendSpinner}
          >
            {showSendSpinner && <ActivityIndicator size="large" color={'#2185d0'}/>}
            {
              !showSendSpinner &&
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#2185d0'
                }}
              >
                发送
              </Text>
            }
          </TouchableOpacity>
        }
      />
      <RowClickArrow
        title={'截稿时间'}
        text={utcDeadlineDateTime.toLocaleString()}
        onPress={() => { setShowDeadlineDateTimePicker(true) }}
      />
      <RowClickArrow
        title={'指定时间'}
        text={utcDesignatedDateTime.toLocaleString()}
        onPress={() => { setShowDesignatedDateTimePicker(true) }}
      />
      <RowClickArrow
        title={'奖赏金额'}
        text={payment + 'YM (' + likes + '赞)' }
        onPress={() => {
          setShowSlideup(true)
        }}
      />

      <View
        style={{
          width: '100%',
          padding: 20,
          backgroundColor: '#FFFFFF'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#000000'
          }}
        >主题  {title.length} / 30</Text>
        <TextInput
          style={{
            width: '100%',
            marginTop: 10,
            fontSize: 18,
            color: '#000000',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#e6e6e6',
            borderRadius: 5
          }}
          multiline={true}
          onChangeText={(text) => {
            if (text.length <= 30) {
              setTitle(text)
            }
          }}
          value={title}
          placeholder={'发布您的需求主题'}
        />
      </View>

      <View
        style={{
          width: '100%',
          padding: 20,
          backgroundColor: '#FFFFFF'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#000000'
          }}
        >正文  {text.length} / 300</Text>
        <TextInput
          style={{
            width: '100%',
            marginTop: 10,
            fontSize: 18,
            color: '#000000',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#e6e6e6',
            borderRadius: 5
          }}
          multiline={true}
          onChangeText={(text) => {
            if (text.length <= 300) {
              setText(text)
            }
          }}
          value={text}
          placeholder={'请备注下您的需求, 如内容主题, 图文限制'}
        />
      </View>
      <DateTimePickerModal
        isVisible={showDeadlineDateTimePicker || showDesignatedDateTimePicker}
        mode={'datetime'}
        date={showDeadlineDateTimePicker ? utcDeadlineDateTime : showDesignatedDateTimePicker ? utcDesignatedDateTime : utcDeadlineDateTime}
        onConfirm={(date) => {
          if (showDeadlineDateTimePicker) {
            setShowDeadlineDateTimePicker(false)
            setUTCDeadlineDateTime(date)
          } else if (showDesignatedDateTimePicker) {
            setShowDesignatedDateTimePicker(false)
            setUTCDesignatedDateTime(date)
          }
        }}
        onCancel={() => {
          setShowDeadlineDateTimePicker(false)
          setShowDesignatedDateTimePicker(false)
        }}
      />
      <Modal
        isVisible={showSlideup}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropColor={'#00000080'}
        style={{
          margin: 0,
          flexDirection: 'column'
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1
          }}
          onPress={() => {
            setShowSlideup(false)
          }}
        />
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 40
          }}
        >
          <TouchableOpacity
            style={{
              width: '100%',
              paddingVertical: 20,
              borderBottomColor: '#e6e6e6',
              borderBottomWidth: 1,
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onPress={() => {
              setShowSlideup(false)
              setPayment(20)
              setLikes(100)
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#0a84ff'
              }}
            >20 YM (100 赞)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '100%',
              paddingVertical: 20,
              borderBottomColor: '#e6e6e6',
              borderBottomWidth: 1,
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onPress={() => {
              setShowSlideup(false)
              setPayment(100)
              setLikes(1000)
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#0a84ff'
              }}
            >100 YM (1K 赞)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '100%',
              paddingVertical: 20,
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onPress={() => {
              setShowSlideup(false)
              setPayment(600)
              setLikes(10000)
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#0a84ff'
              }}
            >600 YM (10K 赞)</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const mapStateProps = (state) => {
  console.log('<<<<HIRING>>>>')
  console.log(state.publish)
  return {
    name: state.login?.name,
    taskPublishStatus: state.publish?.taskPublishStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPublishTask: (payload) => {
      dispatch(taskPublish(payload))
    },
    onClearPublishTaskStatus: () => {
      dispatch(clearTaskPublishStatus())
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(HiringInfo)
