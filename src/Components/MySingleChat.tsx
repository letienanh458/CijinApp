/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MySingleChat = (props) => {
    return (
        <View style={{ marginLeft: 'auto' }}>
            <View style={{ backgroundColor: '#e9e9e9', marginTop: 6, borderRadius: 10, padding: 10, alignSelf: 'baseline' }}>
                <Text>{props.msg}</Text>
            </View>
        </View>
    )
}

export default MySingleChat