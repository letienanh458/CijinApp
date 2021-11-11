import React from 'react'
import { View } from 'react-native'
import {
  Avatar,
  Icon,
  Input,
  Layout as UILayout,
  Text,
} from '@ui-kitten/components'
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'

const SearchBar = () => {
  const { Gutters, Fonts, Layout } = useTheme()
  const { t } = useTranslation()
  const [input, setInput] = React.useState('')

  const onInputChange = (e: any) => setInput(e)

  return (
    <UILayout style={[Layout.fullWidth, Gutters.regularVPadding]}>
      <View
        style={[Layout.row, Layout.alignItemsCenter, Gutters.smallVPadding]}
      >
        <Avatar
          shape="rounded"
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          }}
        />
        <Text
          style={[
            Fonts.textSmall,
            Gutters.smallHMargin,
            { fontWeight: 'bold' },
          ]}
        >
          {t('searchbar.heading') as any}
        </Text>
      </View>
      <Input
        value={input}
        onChangeText={onInputChange}
        style={[Gutters.smallHMargin]}
        accessoryRight={<Icon name={'search-outline'} />}
        placeholder={t('searchbar.placeholder')}
        label={t('searchbar.title') as any}
      />
    </UILayout>
  )
}

export default SearchBar
