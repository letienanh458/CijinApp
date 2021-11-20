/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import UserSingleChat from './UserSingleChat'

const UserChatsContainer = (props) => {
    return (
        <View style={styles.container}>
            {
                props.msgData ? (
                    <View style={styles.subContainer}>
                        <View style={styles.avatarWrapper}>
                            <Avatar source={{
                                uri: props.msgData.avatar,
                            }}
                                rounded
                                avatarStyle={styles.avatar}></Avatar>
                        </View>
                        <View style={styles.msgWrapper}>
                            {
                                props.msgData.msg.length && props.msgData.msg.map((ele, index) => (
                                    <UserSingleChat key={index} msg={ele}></UserSingleChat>
                                ))
                            }
                        </View>
                    </View>
                ) : (
                    <></>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    subContainer: {
        width: '70%',
        flexDirection: 'row',
    },
    avatarWrapper: {
        width: '16%',
        marginTop: 'auto',
    },
    msgWrapper: {
        maxWidth: '80%',
    },
    avatar: {
        width: 30,
        height: 30,
    },
})

export default UserChatsContainer