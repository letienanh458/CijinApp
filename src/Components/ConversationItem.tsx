import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useTheme } from '@/Hooks'
import {
  Avatar,
  Divider,
  Layout as UILayout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components'

interface Props {
  onPress: () => void
  accountName?: string
  latestMsg?: string
  avatarUri?: string
  timeStamp?: string
}

const ConversationItem = (props: Props) => {
  const { Fonts, Gutters, Layout } = useTheme()
  const styles = useStyleSheet(styleSheet)

  return (
    <UILayout>
      <TouchableOpacity onPress={() => props.onPress()} style={[Layout.center]}>
        <View
          style={[
            Gutters.smallVPadding,
            Layout.row,
            Layout.fullWidth,
            styles.header,
          ]}
        >
          <View style={{ width: '14%' }}>
            <Avatar
              borderRadius={10}
              source={{
                uri: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg',
              }}
            />
          </View>
          <View style={[Gutters.smallHPadding, { width: '76%' }]}>
            <Text numberOfLines={1} style={Fonts.titleSmaller}>
              User's name
            </Text>
            <Text numberOfLines={1} style={Fonts.textSmaller}>
              Last msg of user
            </Text>
            <Text style={[Fonts.textSmaller, Fonts.textRight]}>2 Nov</Text>
          </View>
        </View>
        <Divider />
      </TouchableOpacity>
    </UILayout>
  )
}
const styleSheet = StyleService.create({
  header: {
    height: 70,
  },
})

ConversationItem.defaultProps = {
  accountName: 'Loading',
  latestMsg: '',
  avatarUri:
    'https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg',
  timeStamp: '',
}
export default ConversationItem
