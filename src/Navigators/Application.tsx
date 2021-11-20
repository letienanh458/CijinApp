import React from 'react'
import * as eva from '@eva-design/eva'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import createApolloClient from '@/Services/apollo'
import { ApolloProvider } from '@apollo/client'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import AuthContainer from '@/Containers/AuthContainer'
import BottomTabNavigator from '@/Navigators/BottomTab'
import ChatScreen from '../Containers/ChatScreen'
import EditUserinfo from '../Containers/EditUserinfo'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [client, setClient] = React.useState<any>(null)

  const fetchSession = () => {
    // fetch session
    const token = '29565b4dd92cac1deb03b692af2bc9e0ee23521d'
    const clientF = createApolloClient(token)

    setClient(clientF)
  }

  React.useEffect(() => {
    fetchSession()
  }, [])
  const inner = () => (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={darkMode ? eva.dark : eva.light}>
        <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
          <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
            <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Startup" component={StartupContainer} />
              <Stack.Screen
                name="Main"
                component={BottomTabNavigator}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ animationEnabled: false }}
              />
              <Stack.Screen
                name="EditUserinfo"
                component={EditUserinfo}
                options={{ animationEnabled: false }}
              />              
              <Stack.Screen
                name="Auth"
                component={AuthContainer}
                options={{ animationEnabled: false }}
              />                                
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ApplicationProvider>
    </React.Fragment>
  )
  return client === null ? (
    inner()
  ) : (
    <ApolloProvider client={client}>{inner()}</ApolloProvider>
  )
}

export default ApplicationNavigator
