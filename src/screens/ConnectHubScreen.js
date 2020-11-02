import React from 'react';
import {Text} from 'react-native';
import HeaderContainer from '../components/Header';

const ConnentHubScreen = ({navigation}) => {
  return (
    <>
      <HeaderContainer navigation={navigation} />
      <Text>RegistationScreen</Text>
    </>
  );
};
export default ConnentHubScreen;
