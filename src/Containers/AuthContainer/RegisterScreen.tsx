import React, { useContext } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import * as yup from 'yup'
import { Button, Layout as UILayout, Text } from '@ui-kitten/components'
import { useTheme } from '@/Hooks'
import { Brand, InputField, LoadingIndicator } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EmailRegex, PhoneNumberRegex, UsernameRegex } from '@/Config'
import { AuthContext } from '@/Containers/AuthContainer/AuthContext'

interface RegisterProps {
  username: string
  email: string
  firstName: string
  lastName: string
  phone: string
}

const RegisterScreen = () => {
  const { t } = useTranslation()
  const { Layout, Gutters, Fonts } = useTheme()
  const { switchToLogin, switchToVerify } = useContext(AuthContext)

  const handleRegister = (values: RegisterProps) => {
    switchToVerify('some id')
  }

  const schema = yup.object().shape({
    username: yup
      .string()
      .matches(UsernameRegex, t('auth.invalidUsername'))
      .required(t('auth.required')),
    email: yup
      .string()
      .matches(EmailRegex, t('auth.invalidEmail'))
      .required(t('auth.required')),
    firstName: yup.string().required(t('auth.required')),
    lastName: yup.string().required(t('auth.required')),
    phone: yup.string().matches(PhoneNumberRegex, t('auth.invalidPhone')),
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
    },
  })

  return (
    <ScrollView style={[Layout.fullSize]}>
      <KeyboardAvoidingView>
        <UILayout style={[Layout.column, Layout.fullSize]}>
          <View style={[Layout.alignItemsCenter]}>
            <Brand />
            <Text
              style={[
                Fonts.titleSmall,
                Fonts.textCenter,
                Gutters.regularVMargin,
              ]}
            >
              {t('auth.register') as string}
            </Text>
          </View>
          <View style={[Layout.fullWidth, Gutters.regularHPadding]}>
            <InputField
              name="username"
              control={control}
              label={t('auth.username')}
              style={[Gutters.regularBMargin]}
            />
            <InputField
              name="email"
              control={control}
              label={t('auth.email')}
              style={[Gutters.regularBMargin]}
            />
            <View style={[Layout.row, Layout.fullWidth, Gutters.smallBMargin]}>
              <View style={[Layout.fill, Gutters.smallRPadding]}>
                <InputField
                  name="firstName"
                  control={control}
                  label={t('auth.firstName')}
                />
              </View>
              <View style={[Layout.fill, Gutters.smallLPadding]}>
                <InputField
                  name="lastName"
                  control={control}
                  label={t('auth.lastName')}
                />
              </View>
            </View>
            <InputField
              name="phone"
              control={control}
              label={t('auth.phone')}
              style={[Gutters.regularBMargin]}
            />
            <Button
              size="large"
              onPress={handleSubmit(handleRegister)}
              accessoryRight={() =>
                LoadingIndicator({ isLoading: isSubmitting })
              }
            >
              REGISTER
            </Button>
          </View>
          <TouchableOpacity onPress={() => switchToLogin()}>
            <Text
              style={[Fonts.textCenter, Gutters.largeVMargin]}
              appearance="hint"
            >
              {t('auth.toLogin') as string}
            </Text>
          </TouchableOpacity>
        </UILayout>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default RegisterScreen
