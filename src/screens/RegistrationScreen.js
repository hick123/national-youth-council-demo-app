/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Tabs, Tab, Header, Button, Icon} from 'native-base';
import RegisterIndividualForm from '../components/RegisterIndividualForm';
import RegisterGroupForm from '../components/RegisterGroupForm';

const RegistationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        style={{
          backgroundColor: '#0090BC',
          justifyContent: 'flex-start',
        }}>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
          <Text style={{color: '#fff'}}>Back</Text>
        </Button>
      </Header>
      <View
        hasTabs
        style={{
          backgroundColor: '#0090BC',
        }}
      />

      <Tabs
        tabBarBackgroundColo="#fff"
        tabContainerStyle={{backgroundColor: 'yellow'}}>
        <Tab heading="Individual">
          <RegisterIndividualForm />
        </Tab>
        <Tab heading="Group">
          <RegisterGroupForm />
        </Tab>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegistationScreen;
