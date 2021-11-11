import React from 'react'
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { BackIcon } from '@/Components/Icons'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'

const AddConversationContainer = ({ navigation }: any) => {
  const { t } = useTranslation()
  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction onPress={navigation.goBack} icon={<BackIcon />} />
  )
  return (
    <View>
      <TopNavigation
        title={t('containers.addConversation') as string}
        accessoryLeft={renderBackAction}
      />
    </View>
  )
}

export default AddConversationContainer
