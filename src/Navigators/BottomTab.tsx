import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeContainer from '@/Containers/HomeContainer'
import { BottomTabBar } from '@/Components'
import SettingContainer from '@/Containers/SettingContainer'
import AddConversationContainer from '@/Containers/AddConversationContainer'

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Screen name="Chat" component={HomeContainer} />
      <Screen name="NewConversation" component={AddConversationContainer} />
      <Screen name="Setting" component={SettingContainer} />
    </Navigator>
  )
}

export default BottomTabNavigator
