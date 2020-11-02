/* eslint-disable react-native/no-inline-styles */
import {View} from 'native-base';
import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {partnersData} from '../data/partners';

import HeaderContainer from '../components/Header';
import Jumbotron from '../components/Jumbotron';
const {width, height} = Dimensions.get('window');

const PartnersScreen = ({navigation}) => {
  return (
    <>
      <HeaderContainer navigation={navigation} />
      <Jumbotron title="PARTNERS" />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {partnersData.map((partner, i) => (
            <TouchableOpacity
              key={partner.title}
              onPress={() => navigation.navigate('Partner Details', {partner})}>
              <View
                style={{
                  height: height * 0.2,
                  width: width / 2 - 20,
                  borderColor: '#fff',
                  borderWidth: 1,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  margin: 5,
                }}
                onPress={() =>
                  navigation.navigate('Partner Details', {partner})
                }>
                <Image
                  source={partner.imgUr}
                  style={{height: 100, width: 100, resizeMode: 'contain'}}
                />
                <Text>{partner.title}</Text>
                <Text>{partner.county}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};
export default PartnersScreen;
