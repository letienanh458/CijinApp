import React from 'react'
import { useTheme } from '@/Hooks'
import { ScrollView, View } from 'react-native'
import { Layout as UILayout } from '@ui-kitten/components'
import { ConversationItem, SearchBar } from '@/Components'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const HomeContainer = () => {
  const { Layout, Gutters } = useTheme()
  return (
    <UILayout style={[Layout.fill, Layout.column]}>
      <View style={[Gutters.smallHPadding, Gutters.regularTPadding]}>
        <SearchBar />
      </View>
      <ScrollView
        style={Layout.fill}
        contentContainerStyle={[
          Gutters.smallHPadding,
          Gutters.regularTPadding,
          { flexGrow: 1 },
        ]}
      >
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
        <ConversationItem onPress={() => navigateAndSimpleReset('Main')} />
      </ScrollView>
    </UILayout>
  )
}

export default HomeContainer
