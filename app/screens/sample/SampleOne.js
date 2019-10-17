import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Button, Icon } from 'react-native-elements'

const ScreenOne = (props) => {
  return (
    <SafeAreaView>
      <Button
        title='Click me'
        icon={<Icon name='home' />}
        onPress={() => props.navigation.navigate('ScreenTwo')} />
    </SafeAreaView>
  )
}

export default ScreenOne
