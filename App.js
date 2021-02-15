import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/pages/login/login'
import Main from './src/pages/main'
import NewPublish from './src/pages/publish/new_publish'
import PostDetail from './src/pages/publish/post_detail'
import Initial from './src/pages/login/initial'
import RequiringList from './src/pages/hire/requiring_list'
import RequiringDetail from './src/pages/hire/requiring_detail'
import HiringInfo from './src/pages/hire/hiring_info'
import HiringWriting from './src/pages/hire/hiring_writing'
import Menu from './src/pages/main/menu'
import Requiring from './src/pages/hire/requiring_list'
import Profile from './src/pages/profile/profile'

function App (props) {
  const Stack = createStackNavigator()
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}>
      <NavigationContainer>
        <Stack.Navigator headerShown={false}>

          <Stack.Screen
            name="initial"
            component={Initial}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
              name="main"
              component={Main}
              options={{ headerShown: false }}
          />

          <Stack.Screen
            name="new_publish"
            component={NewPublish}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="post_detail"
            component={PostDetail}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />

          <Stack.Screen
              name="menu"
              component={Menu}
              options={{ headerShown: false }}
          />

          <Stack.Screen
            name="requiring_list"
            component={RequiringList}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="requiring_detail"
            component={RequiringDetail}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="hiring_info"
            component={HiringInfo}
            options={{ headerShown: false }}
          />

          <Stack.Screen
              name="hiring_writing"
              component={HiringWriting}
              options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const mapStateProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateProps, mapDispatchToProps)(App)
