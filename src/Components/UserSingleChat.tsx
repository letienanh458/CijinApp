/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserSingleChat = (props) => {
    return (
        <View>
            <View style={{ backgroundColor: '#039be5', marginTop: 6, borderRadius: 10, padding: 10, alignSelf: 'baseline' }}>
                <Text style={{ color: 'white' }}>{props.msg}</Text>
            </View>
        </View>
    )
}

export default UserSingleChat