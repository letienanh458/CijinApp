/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MySingleChat from './MySingleChat'

const MyChatsContainer = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ width: '30%' }}></View>
            {
                props.msgData ? (
                    <View style={styles.subContainer}>
                        <View style={styles.msgWrapper}>
                            {
                                props.msgData.msg.length && props.msgData.msg.map((ele, index) => (
                                    <MySingleChat key={index} msg={ele}></MySingleChat>
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
        flexDirection: 'row',
    },
    subContainer: {
        width: '80%',
    },
    msgWrapper: {
        maxWidth: '80%',
    },
})

export default MyChatsContainer