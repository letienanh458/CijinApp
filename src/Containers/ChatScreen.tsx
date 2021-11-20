/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Avatar, Input } from 'react-native-elements'
import UserChatsContainer from '../Components/UserChatsContainer'
import MyChatsContainer from '../Components/MyChatsContainer'

const fakeData = {
    chatName: 'Lucifer Leocarpio Donald Trump',
    lastSeen: '2 seconds ago',
    chatAvatar: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg',
    msgThread: [
        {
            userId: 'uniqueid',
            time: '10:00 AM',
            user: 'Lucifer',
            avatar: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg',
            msg: [
                "Hello mate",
                "Nice to see you here, can I talk to you?"
            ]
        },
        {
            userId: 'uniqueid',
            time: '10:02 AM',
            user: 'Myself',
            avatar: "",
            msg: [
                "Hi there",
                "Nice to see you too",
                "Of course yes"
            ]
        },
        {
            userId: 'uniqueid',
            time: '10:00 AM, Thu',
            user: 'Lucifer',
            avatar: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg',
            msg: [
                "Nice",
            ]
        },
    ]

}

const ChatScreen = ({ navigation }: any) => {
    const backHandle = () => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={backHandle} style={styles.backIconWrapper}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
                <Avatar containerStyle={styles.userAvatar} avatarStyle={styles.customAvatar} size='small' source={{
                    uri:
                        fakeData.chatAvatar,
                }} />
                <View style={styles.receiverInfo}>
                    <Text numberOfLines={1} style={styles.headerTitle}>{fakeData.chatName}</Text>
                    <Text numberOfLines={1} style={styles.lastSeenText}>{fakeData.lastSeen}</Text>
                </View>
            </View>
            <ScrollView style={styles.chatListScrollContainer}>
                {fakeData.msgThread.map((ele, index) =>
                    (ele.user !== "Myself") ? (
                        <UserChatsContainer key={index} msgData={ele} />
                    ) : (
                        <MyChatsContainer key={index} msgData={ele} />
                    )
                )}
            </ScrollView>
            <View style={styles.textInputField}>
                <Input
                    placeholder='Nhập tin nhắn...'
                    rightIcon={
                        <Icon name='send' color="#039be5" size={22}></Icon>
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        padding: 8,
        height: 70,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    backIconWrapper: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 16
    },
    customAvatar: {
        borderRadius: 10,
    },
    userAvatar: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    receiverInfo: {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: 200,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 14,
    },
    lastSeenText: {
        fontSize: 12,
        paddingLeft: 14,
    },
    userCardList: {
        marginTop: 4,
    },
    chatListScrollContainer: {
        backgroundColor: 'white',
        padding: 8,
        flex: 1,
    },
    textInputField: {
        height: 60,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    },

});

export default ChatScreen