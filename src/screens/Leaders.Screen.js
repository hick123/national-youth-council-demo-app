/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  Button,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HeaderContainer from '../components/Header';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {View, Thumbnail, Label, Icon} from 'native-base';
import {leadersData} from '../data/leaders-list';
import Jumbotron from '../components/Jumbotron';
const {width, height} = Dimensions.get('window');

const LeadersScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#e4f7fd', flex: 1}}>
      <HeaderContainer navigation={navigation} />
      <Jumbotron title="Region Leaders" />

      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          backgroundColor: '#32b9e2e7',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <TextInput
          placeholder="Search"
          style={{flex: 1, color: '#fff', marginLeft: 10}}
        />
        <Icon
          name="search-outline"
          style={{
            position: 'absolute',
            right: 5,
            alignItems: 'center',
            color: '#fff',
          }}
        />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {leadersData.map((leader, i) => (
            <TouchableOpacity
              key={leader.county}
              onPress={() => navigation.navigate('Leaders Details', {leader})}>
              <View
                style={{
                  height: height * 0.2,
                  width: width / 2 - 20,
                  // alignSelf: 'center',
                  borderColor: '#fff',
                  borderWidth: 1,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  margin: 5,
                }}
                onPress={() => navigation.navigate('Leaders Details')}>
                <Thumbnail
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                  }}
                />
                <Text>{leader.name}</Text>
                <Text>{leader.county}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default LeadersScreen;
