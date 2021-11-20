import React from 'react'
import {
  Avatar,
  Button,
  Divider,
  Layout as UILayout,
  StyleService,
  Text,
  Toggle,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
  useTheme as useThemeUI,
} from '@ui-kitten/components'
import {
  BackIcon,
  DarkModeIcon,
  GlobeIcon,
  LogoutIcon,
  PersonIcon,
  USFlag,
  VietnamFlag,
} from '@/Components/Icons'
import { useTheme } from '@/Hooks'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import i18n from '../Translations'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, ThemeState } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

interface Props {
  navigation: any
}

const SettingContainer = ({ navigation }: Props) => {
  const { Layout, Fonts, Gutters } = useTheme()
  const [lang, setLang] = React.useState('en')

  const styles = useStyleSheet(styleSheet)
  const theme = useThemeUI()
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const isDark = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode,
  )
  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const changeLanguage = React.useCallback(
    (lng: 'vn' | 'en' | string) => {
      if (lng !== lang) {
        i18n
          .changeLanguage(lng)
          .then()
          .catch(error => console.error(error))
        setLang(lng)
      }
    },
    [lang],
  )

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction onPress={navigation.goBack} icon={BackIcon} />
  )

  return (
    <UILayout style={[Layout.fill, Layout.justifyContentStart]}>
      <TopNavigation
        title={t('containers.setting') as string}
        accessoryLeft={renderBackAction}
      />
      <ScrollView style={[Layout.fill]}>
        <View style={[Layout.center, Layout.fullWidth]}>
          <Avatar
            shape="rounded"
            size="giant"
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            }}
          />
          <Text style={[Fonts.titleSmaller, Gutters.smallVMargin]}>
            Username
          </Text>
        </View>
        <View style={[Gutters.regularVMargin, Layout.column, Layout.fill]}>
          <Divider />
          <Text
            style={[
              Gutters.regularVPadding,
              Gutters.regularHPadding,
              Fonts.textSmall,
              { fontWeight: 'bold' },
            ]}
          >
            {t('containers.setting') as string}
          </Text>
          <TouchableOpacity style={[Layout.fullWidth, Gutters.largeHPadding]} onPress={() => navigation.navigate("EditUserinfo")}>
            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                Gutters.regularVMargin,
              ]}
            >
              <PersonIcon
                fill={theme['color-primary-500']}
                style={[styles.icon]}
              />
              <Text style={[Fonts.textSmaller]}>
                {t('settings.updateProfile') as string}
              </Text>
            </View>
            <Divider />
          </TouchableOpacity>
          <TouchableOpacity style={[Layout.fullWidth, Gutters.largeHPadding]}>
            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                Layout.justifyContentBetween,
                Gutters.regularVMargin,
              ]}
            >
              <View style={[Layout.row, Layout.alignItemsCenter]}>
                <DarkModeIcon
                  fill={theme['color-primary-500']}
                  style={[styles.icon]}
                />
                <Text style={[Fonts.textSmaller]}>
                  {t('settings.appTheme') as string}
                </Text>
              </View>
              <Toggle
                checked={isDark ?? false}
                onChange={props => onChangeTheme({ darkMode: props })}
              />
            </View>
            <Divider />
          </TouchableOpacity>
          <View style={[Layout.fullWidth, Gutters.largeHPadding]}>
            <View style={[Layout.alignItemsStart, Gutters.regularVMargin]}>
              <View style={[Layout.row, Layout.alignItemsCenter]}>
                <GlobeIcon
                  fill={theme['color-primary-500']}
                  style={[styles.icon]}
                />
                <Text style={[Fonts.textSmaller]}>
                  {t('settings.language') as string}
                </Text>
              </View>
              <Divider />
              {/*  Flags */}
              <View style={[Layout.row, Layout.center, Layout.fullWidth]}>
                <TouchableOpacity style={[Layout.center]}>
                  <Button
                    onPress={() => changeLanguage('vn')}
                    accessoryRight={props =>
                      VietnamFlag({ ...props, width: 100 })
                    }
                    appearance={'ghost'}
                  />
                  <Text>{t('settings.vietnamese') as string}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Layout.center]}>
                  <Button
                    onPress={() => changeLanguage('en')}
                    accessoryRight={props => USFlag({ ...props, width: 100 })}
                    appearance={'ghost'}
                  />
                  <Text>{t('settings.us') as string}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Divider />
          </View>
          <TouchableOpacity
            style={[Layout.fullWidth, Gutters.largeHPadding]}
            onPress={() => navigateAndSimpleReset('Auth')}
          >
            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                Layout.justifyContentBetween,
                Gutters.regularVMargin,
              ]}
            >
              <View style={[Layout.row, Layout.alignItemsCenter]}>
                <LogoutIcon
                  fill={theme['color-primary-500']}
                  style={[styles.icon]}
                />
                <Text style={[Fonts.textSmaller]}>
                  {t('settings.logout') as string}
                </Text>
              </View>
            </View>
            <Divider />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </UILayout>
  )
}
const styleSheet = StyleService.create({
  setting: {
    borderColor: 'border-color-basic-2',
    borderBottomWidth: 1,
  },
  icon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
})
export default SettingContainer
