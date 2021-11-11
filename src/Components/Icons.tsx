import React from 'react'
import { Icon, IconProps } from '@ui-kitten/components'
import { useTheme } from '@/Hooks'
import { Image, ImageProps, View } from 'react-native'

export const MessageIcon = (props: IconProps) => (
  <Icon name="message-circle-outline" {...props} />
)

export const SettingIcon = (props: IconProps) => (
  <Icon name="settings-outline" {...props} />
)

export const AddIcon = (props: IconProps) => (
  <Icon name="plus-outline" {...props} />
)

export const BackIcon = (props: IconProps) => (
  <Icon name="arrow-back-outline" {...props} />
)

export const PersonIcon = (props: IconProps) => (
  <Icon name="person-outline" {...props} />
)

export const DarkModeIcon = (props: IconProps) => (
  <Icon name="moon-outline" {...props} />
)

export const GlobeIcon = (props: IconProps) => (
  <Icon name="globe-2-outline" {...props} />
)

export const LogoutIcon = (props: IconProps) => (
  <Icon name="log-out-outline" {...props} />
)

interface FlagProps extends ImageProps {
  height?: number
  width?: number
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

export const VietnamFlag = ({
  width = 120,
  height = 70,
  mode = 'contain',
}: Partial<FlagProps>) => {
  const { Layout, Images } = useTheme()
  return (
    <View style={{ height, width }}>
      <Image
        style={Layout.fullSize}
        source={Images.vietnamFlag}
        resizeMode={mode}
      />
    </View>
  )
}

export const USFlag = ({
  width = 120,
  height = 70,
  mode = 'contain',
}: Partial<FlagProps>) => {
  const { Layout, Images } = useTheme()
  return (
    <View style={{ height, width }}>
      <Image style={Layout.fullSize} source={Images.usFlag} resizeMode={mode} />
    </View>
  )
}
