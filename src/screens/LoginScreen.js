/* eslint-disable react-native/no-inline-styles */
import {Button} from 'native-base';
import React, {useState} from 'react';
import {View, Dimensions, Text, StyleSheet, TextInput} from 'react-native';
import {Icon, Toast} from 'native-base';
const {height, width} = Dimensions.get('window');

const LoginScreen = ({title, navigation}) => {
  const [email, setEmail] = useState('csetter0@goo.ne.ke');
  const [password, setPassword] = useState('csetter0');
  const handle = () => {
    console.log(password, email);
    Toast.show({
      text: 'Successfully Logged In',
      buttonText: 'Okay',
      type: 'success',
      duration: 3000,
      position: 'bottom',
      style: {margin: 20},
    });
    navigation.navigate('Root');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={{marginLeft: 10, marginBottom: 10}}>
        Sign in to start using application
      </Text>

      <View style={styles.formItem}>
        <Icon style={styles.icon} name="mail-outline" />

        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View style={styles.formItem}>
        <Icon style={styles.icon} name="lock-closed-outline" />

        <TextInput
          placeholder="Password"
          style={styles.textInput}
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
        />
      </View>
      <Button full onPress={() => handle()} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Button>

      <View style={styles.or}>
        <Text style={styles.orText}> or</Text>
      </View>
      <View style={styles.social}>
        <Button full onPress={() => handle()} style={styles.buttonGoogle}>
          <Icon style={styles.icon} name="logo-google" />

          <Text style={styles.buttonText}>Google</Text>
        </Button>
        <Button full onPress={() => handle()} style={styles.buttonFb}>
          <Icon style={styles.icon} name="logo-facebook" />

          <Text style={styles.buttonText}>Facebook</Text>
        </Button>
      </View>
      {/* <View></View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f7fd',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    margin: 10,
  },
  formItem: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6d6d6d',
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#0090BC',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
  },
  or: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  orText: {
    fontSize: 20,
    color: '#6d6d6d',
    fontWeight: 'bold',
  },
  social: {
    flexDirection: 'row',
  },
  buttonGoogle: {backgroundColor: '#4285F4', margin: 10, flex: 1},
  buttonFb: {backgroundColor: '#4267B2', margin: 10, flex: 1},
});
export default LoginScreen;
