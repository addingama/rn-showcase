import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar
} from 'react-native'

const RootContainer = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <Text>This is root container</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff'
  }

})

export default RootContainer
