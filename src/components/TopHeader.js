import React from 'react'
import { View, Dimensions, ViewStyle, StyleProp, StyleSheet, Text } from 'react-native'

const TopHeader = (props) => {
  return (
        <View
            style={styles.header}
        >
            <View>
                <Image style={styles.image} source={require('../assets/images/back.png')} />
            </View>
        </View>
  )
}
export default TopHeader
const styles = StyleSheet.create({
  header: {

  },
  image: {
    height: 22,
    width: 22
  }
})
