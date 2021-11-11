import React from 'react'

interface AuthContextProps {
  position: 'login' | 'register' | 'verify' | 'forgot'
}

export const useAuthContext = () => {
  const [state, setState] = React.useState<AuthContextProps>({
    position: 'login',
  })
  const [tokenId, setTokenId] = React.useState('')

  const handleSetState = (
    value: 'login' | 'register' | 'verify' | 'forgot',
  ) => {
    setState({ position: value })
  }
  const switchToLogin = () => {
    setTimeout(() => {
      handleSetState('login')
    }, 600)
  }

  const switchToRegister = () => {
    setTimeout(() => {
      handleSetState('register')
    }, 600)
  }

  const switchToVerify = (value: string) => {
    setTimeout(() => {
      setTokenId(value)
      handleSetState('verify')
    }, 600)
  }

  const switchToForgot = () => {
    setTimeout(() => {
      handleSetState('forgot')
    }, 600)
  }
  return {
    state,
    tokenId,
    switchToLogin,
    switchToRegister,
    switchToVerify,
    switchToForgot,
  }
}

export const AuthContext = React.createContext(
  {} as ReturnType<typeof useAuthContext>,
)
