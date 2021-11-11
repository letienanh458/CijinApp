import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import {
  Button,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { useTranslation } from 'react-i18next'
import OtpInputs, { OtpInputsRef } from 'react-native-otp-inputs'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const styleSheet = StyleService.create({
  inputBox: {
    width: 50,
    height: 50,
    borderColor: 'color-primary-500',
    borderWidth: 1,
    borderRadius: 5,

    margin: 5,
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

const VerifyTokenScreen = () => {
  const { Layout, Gutters, Fonts } = useTheme()
  const { t } = useTranslation()
  const styles = useStyleSheet(styleSheet)

  const otpRef = React.useRef<OtpInputsRef>()
  const [s, setS] = React.useState(true)

  const handleNavigate = () => {
    navigateAndSimpleReset('Main')
  }

  return (
    <View style={[Layout.fullSize, Layout.column, Layout.alignItemsCenter]}>
      <View style={[Layout.alignItemsCenter]}>
        <Brand />
        <Text
          style={[Fonts.titleSmall, Fonts.textCenter, Gutters.regularVMargin]}
        >
          {t('auth.verify') as string}
        </Text>
        <View style={[Layout.fill]}>
          <OtpInputs
            ref={otpRef as any}
            handleChange={code => console.log(code)}
            numberOfInputs={6}
            autofillFromClipboard={false}
            inputContainerStyles={styles.inputBox}
            inputStyles={styles.input}
            textAlign={'center'}
          />
          <Text
            style={[Fonts.textCenter, Gutters.regularBMargin]}
            appearance="hint"
          >
            {t('auth.wait', { seconds: 30 }) as string}
          </Text>
          <View style={[Layout.fill]}>
            <Button status={'primary'}>{t('auth.submit') as string}</Button>
            <TouchableOpacity onPress={handleNavigate}>
              <Text style={[Fonts.textCenter, Gutters.largeTMargin]}>
                {t('auth.reSendOtp') as string}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default VerifyTokenScreen
