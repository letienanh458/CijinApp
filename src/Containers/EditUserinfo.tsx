import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';

const EditUserinfo = ({ navigation }: any) => {
  const [username, setUsername] = useState ();
  const [lastName, setLastName] = useState ();
  const [firstName, setFirstName] = useState ();
  const [phone, setPhone] = useState ();
  const [myemail, setEmail] = useState ();

  const backHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    <View style={{flexDirection: 'row', padding: 8}}>
      <TouchableOpacity onPress={backHandle} style={styles.backIconWrapper}>
        <Icon name="arrow-back" />
      </TouchableOpacity>
    </View>
      <View style={styles.formWrapper}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Update user info</Text>
          </View>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername (text)}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <TextInput
              style={styles.textInputLeft}
              placeholder="First name"
              value={firstName}
              onChangeText={text => setFirstName (text)}
            />
          </View>
          <View style={{width: '50%'}}>
            <TextInput
              style={styles.textInputRight}
              placeholder="Last name"
              value={lastName}
              onChangeText={text => setLastName (text)}
            />
          </View>

        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={myemail}
          onChangeText={text => setEmail (text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone (text)}
        />

        <View style={styles.loginBtn}>
          <Button
            title="Save"
            onPress={() => navigation.navigate ('Settings')}
          />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',    
    flex: 1,
  },
  backIconWrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  header: {
    flexDirection: 'row',
    height: 70,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 16,
  },
  textInputLeft: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 14,
    marginRight: 2,
  },
  textInputRight: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 14,
    marginLeft: 2,
  },
  formWrapper: {
    minWidth: 340,
    justifyContent: 'center',
    padding: 8,    
  },
  loginBtn: {
    marginTop: 10,
  },
  registerBtn: {
    color: '#3d89d4',
    fontSize: 16,
  },
  mediumText: {
    fontSize: 16,
  },
  registerZone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
});

export default EditUserinfo;