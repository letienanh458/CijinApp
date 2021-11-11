import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components'
import { useTheme } from '@/Hooks'
import { AddIcon, MessageIcon, SettingIcon } from '@/Components/Icons'
import React from 'react'
import { useTranslation } from 'react-i18next'

const CustomTabButton = ({
  children,
  onPress,
  ...props
}: TouchableOpacityProps) => {
  const styles = useStyleSheet(styleSheet)
  const { Layout } = useTheme()
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[Layout.center, styles.container]}
      >
        <View style={[styles.wrapper, Layout.fill, Layout.center]}>
          {children ?? <AddIcon style={styles.icon} {...props} />}
        </View>
      </TouchableOpacity>
    </>
  )
}

const styleSheet = StyleService.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 40,
    top: -30,
    borderWidth: 1,
    borderColor: 'color-primary-500',
    backgroundColor: 'background-basic-color-1',
  },
  wrapper: {
    borderColor: 'color-primary-500',
  },
  icon: {
    zIndex: 1,
  },
})

const BottomTabBar = (props?: any) => {
  const { navigation, state } = props
  const { t } = useTranslation()
  const handleNavigate = (index: number) => {
    navigation && navigation.navigate(state.routeNames[index])
  }
  return (
    <Layout
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
      }}
    >
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={index => handleNavigate(index)}
      >
        <BottomNavigationTab
          title={t('containers.conversations') as string}
          icon={MessageIcon}
        />
        <BottomNavigationTab
          icon={p => (
            <CustomTabButton onPress={() => handleNavigate(1)} {...p} />
          )}
        />
        <BottomNavigationTab
          title={t('containers.setting') as string}
          icon={SettingIcon}
        />
      </BottomNavigation>
    </Layout>
  )
}
export default BottomTabBar
