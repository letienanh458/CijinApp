import React from 'react'
import { AuthContext, useAuthContext } from './AuthContext'
import { Layout as UILayout } from '@ui-kitten/components'
import { useTheme } from '@/Hooks'
import LoginScreen from '@/Containers/AuthContainer/LoginScreen'
import RegisterScreen from '@/Containers/AuthContainer/RegisterScreen'
import VerifyTokenScreen from '@/Containers/AuthContainer/VerifyTokenScreen'
import ForgotPasswordScreen from '@/Containers/AuthContainer/ForgotPasswordScreen'

const AuthPage = () => {
  const { state, ...rest } = useAuthContext()
  const value = { state, ...rest }
  const { Layout, Gutters } = useTheme()

  return (
    <AuthContext.Provider value={value}>
      <UILayout
        style={[
          Layout.fill,
          Layout.colCenter,
          Layout.fullWidth,
          Gutters.smallVPadding,
          Gutters.smallHPadding,
        ]}
      >
        {state.position === 'login' && <LoginScreen />}
        {state.position === 'register' && <RegisterScreen />}
        {state.position === 'verify' && <VerifyTokenScreen />}
        {state.position === 'forgot' && <ForgotPasswordScreen />}
      </UILayout>
    </AuthContext.Provider>
  )
}

export default AuthPage
