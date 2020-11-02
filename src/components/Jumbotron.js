/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Text} from 'react-native';
const {height, width} = Dimensions.get('window');

const Jumbotron = ({title, navigation}) => {
  return (
    <View
      style={{
        height: height * 0.1,
        backgroundColor: '#0090BC',
        borderBottomLeftRadius: height * 0.05,
        borderBottomRightRadius: height * 0.05,
        alignItems: 'center',
        marginBottom: height * 0.05,
      }}>
      <View
        style={{
          height: height * 0.1,
          width: width * 0.8,
          position: 'absolute',
          bottom: '-30%',
          backgroundColor: '#0090BC',
          borderWidth: 3,
          borderColor: '#fff',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            letterSpacing: 1,
            fontWeight: '700',
            textTransform: 'uppercase',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};
export default Jumbotron;
