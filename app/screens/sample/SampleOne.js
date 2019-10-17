import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { SafeAreaView } from 'react-navigation'

const ScreenOne = (props) => {
  return (
    <SafeAreaView>
      <TouchableHighlight onPress={() => props.navigation.navigate('ScreenTwo')}>
        <Text>Cick me</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

export default ScreenOne
