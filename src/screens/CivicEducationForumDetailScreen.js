/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, Dimensions, View} from 'react-native';
import HeaderContainer from '../components/Header';
import {
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from 'native-base';
const {height, width} = Dimensions.get('window');

const CivicEducationDetailsScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#e4f7fd', flex: 1}}>
      <HeaderContainer navigation={navigation} />
      <Text>CivicEducationDetailsScreen</Text>
    </View>
  );
};
export default CivicEducationDetailsScreen;
