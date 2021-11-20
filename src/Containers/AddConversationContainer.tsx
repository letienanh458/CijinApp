/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { BackIcon } from '@/Components/Icons'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { useTranslation } from 'react-i18next'
import SearchBar from '../Components/SearchBar'
import UserCard from '../Components/UserCard'

const AddConversationContainer = ({ navigation }: any) => {
  const { t } = useTranslation()
    
  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction onPress={navigation.goBack} icon={<BackIcon />} />
  )  

    const backHandle = () => {
        navigation.goBack()
    }

  return (
    <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={{ width: '60%', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={backHandle} style={styles.backIconWrapper}>
                        <Icon name='arrow-back' />
                    </TouchableOpacity>                    
                </View>
                <View style={{ width: '40%', flexDirection: 'row-reverse' }}>
                    <Button
                        title="Create chat"
                        type="clear"
                        buttonStyle={{ marginTop: 'auto', marginBottom: 'auto', }}
                    />
                </View>
            </View>
            <SearchBar/>
            <View style={styles.userListContainer}>
                <Text>Suggested</Text>
                <View style={styles.userCardList}>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                </View>
            </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white'
  },
  header: {
      flexDirection: 'row',
      flex: 1,
      padding: 8,      
  },
  backIconWrapper: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: 14
  },
  headerTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 'auto',
      marginBottom: 'auto',
  },
  inputContainer: {
      backgroundColor: 'white',
      borderBottomColor: 'white',
      borderTopColor: 'white',
      marginLeft: 6,
      marginRight: 6,
  },
  inputContainerStyle: {
      height: 40,
      backgroundColor: '#e9e9e9',
  },
  inputStyle: {
      fontSize: 16,
  },
  userListContainer: {
      padding: 8,
  },
  userCardList: {
      marginTop: 4,
  }
});

export default AddConversationContainer
