import React from 'react';
import {View, Dimensions, StyleSheet, Text, TextInput} from 'react-native';
import {Button, Icon, Label} from 'native-base';
import {Formik} from 'formik';
const {width} = Dimensions.get('window');

const RegisterGroupForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => (
          <View style={styles.form}>
            <Text style={styles.loginText}>Sign Up</Text>
            <View style={styles.formItem}>
              <Label>Name of the Group</Label>

              <TextInput placeholder="First Name" style={styles.textInput} />
              <Icon
                style={styles.iconChecked}
                name="checkmark-circle-outline"
              />
            </View>
            <View style={styles.formItem}>
              <Label>Coun</Label>
              <TextInput placeholder="Last Name" style={styles.textInput} />
              <Icon
                style={styles.iconChecked}
                name="checkmark-circle-outline"
              />
            </View>
            <View style={styles.formItem}>
              <Label>Email</Label>

              <TextInput placeholder="email" style={styles.textInput} />
              <Icon
                style={styles.iconChecked}
                name="checkmark-circle-outline"
              />
            </View>
            <View style={styles.formItem}>
              <Label>County</Label>

              <TextInput placeholder="email" style={styles.textInput} />
              <Icon
                style={styles.iconChecked}
                name="checkmark-circle-outline"
              />
            </View>

            <Button block onPress={handleSubmit} style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Register</Text>
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: width / 2,
  },
  logoImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  body: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: width * 0.07,
    borderTopRightRadius: width * 0.07,
  },
  icon: {
    fontSize: 20,
  },

  form: {
    margin: 20,
  },
  loginText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
  },
  iconChecked: {
    color: '#27aa32',
  },
  submitBtn: {
    backgroundColor: '#aa241a',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 16,
  },

  signUp: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  signUpLink: {
    fontWeight: 'bold',
  },
});
export default RegisterGroupForm;
