/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const UserCard = () => {
    const [tick, setTick] = useState(false)

    const chooseUser = () => {
        setTick(!tick)
    }

    return (
        <TouchableOpacity style={styles.userCard} onPress={chooseUser}>
            <View style={styles.avatarWrapper}>
                <Avatar
                    containerStyle={styles.userAvatar}
                    avatarStyle={styles.avatar}
                    source={{
                        uri: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg',
                    }}>
                </Avatar>
            </View>
            <View style={styles.userNameWrapper}>
                <Text style={styles.userName}>Lucifer</Text>
            </View>
            <View style={{ width: '10%', marginBottom: 'auto', marginTop: 'auto' }}>
                {
                    tick && <Icon name='check-circle' color='#039be5' size={20}></Icon>
                }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    userCard: {
        flexDirection: 'row',
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    avatarWrapper: {
        width: '18%',
    },
    avatar: {
        borderRadius: 10,
    },
    userAvatar: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    userNameWrapper: {
        width: '72%',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default UserCard;
