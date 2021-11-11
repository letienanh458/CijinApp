import React, { useContext } from 'react'
import * as yup from 'yup'
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, Layout as UILayout, Text } from '@ui-kitten/components'
import { AuthContext } from './AuthContext'
import { useTheme } from '@/Hooks'
import { passwordRegExp, UsernameOrEmailRegex } from '@/Config'
import {
  Brand,
  InputField,
  LoadingIndicator,
  PasswordField,
} from '@/Components'
import { yupResolver } from '@hookform/resolvers/yup'
import Toast from 'react-native-toast-message'
import { navigateAndSimpleReset } from '@/Navigators/utils'

interface LoginProps {
  username: string
  password: string
}
const LoginScreen = () => {
  const { t } = useTranslation()
  const { Layout, Gutters, Fonts } = useTheme()
  const { switchToRegister, switchToForgot } = useContext(AuthContext)

  const schema = yup.object().shape({
    username: yup
      .string()
      .matches(UsernameOrEmailRegex, t('auth.invalidUsername'))
      .required(t('auth.required')),
    password: yup
      .string()
      .matches(passwordRegExp, t('auth.invalidPassword'))
      .required(t('auth.required')),
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginProps>({
    resolver: yupResolver(schema),
    defaultValues: { username: '', password: '' },
  })

  function handleLogin(values: LoginProps) {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    })
    navigateAndSimpleReset('Main')
  }

  return (
    <UILayout style={[Layout.column, Layout.fullWidth, Layout.fullHeight]}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={[Layout.alignItemsCenter]}>
            <Brand />
            <Text
              style={[
                Fonts.titleSmall,
                Fonts.textCenter,
                Gutters.regularVMargin,
              ]}
            >
              {t('auth.login') as string}
            </Text>
          </View>
          <View
            style={[
              Layout.fullWidth,
              Layout.fullHeight,
              Layout.fill,
              Gutters.regularHPadding,
            ]}
          >
            <InputField
              style={[Gutters.regularBMargin]}
              name="username"
              control={control}
              label={t('auth.usernameOrEmail')}
            />
            <PasswordField
              style={[Gutters.regularBMargin]}
              name="password"
              control={control}
              label={t('auth.password')}
            />
            <Button
              size="large"
              onPress={handleSubmit(handleLogin)}
              accessoryRight={() =>
                LoadingIndicator({ isLoading: isSubmitting })
              }
            >
              {t('auth.login') as string}
            </Button>
            <TouchableOpacity onPress={() => switchToForgot()}>
              <Text
                style={[Fonts.textCenter, Gutters.smallVMargin]}
                appearance="hint"
              >
                {t('auth.toForgot') as string}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => switchToRegister()}>
            <Text
              style={[Fonts.textCenter, Gutters.largeVMargin]}
              appearance="hint"
              status={'primary'}
            >
              {t('auth.toRegister') as string}
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </UILayout>
  )
}

export default LoginScreen
