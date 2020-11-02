/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Dimensions, View} from 'react-native';
import HeaderContainer from '../components/Header';
import {
  Header,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Thumbnail,
  Tab,
  Tabs,
  Container,
  List,
  ListItem,
} from 'native-base';
const {height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  return (
    <>
      <HeaderContainer />
      <Container style={{backgroundColor: '#e4f7fd'}}>
        <View
          style={{
            height: height * 0.1,
            backgroundColor: '#0090BC',
            borderBottomLeftRadius: height * 0.05,
            borderBottomRightRadius: height * 0.05,
          }}>
          <Thumbnail
            large
            source={{
              uri:
                'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            }}
            style={{
              position: 'absolute',
              bottom: '-70%',
              backgroundColor: '#0090BC',
              borderColor: '#0090BC',
              borderWidth: 5,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{marginTop: height * 0.08, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
            Celestina Setter
          </Text>
          <Text style={{fontSize: 12, color: '#000', fontWeight: '600'}}>
            Member since Jan 2020
          </Text>
        </View>

        <List>
          <ListItem avatar>
            <Left>
              <Icon name="call-outline" />
            </Left>
            <Body>
              <Text>PHONE</Text>
              <Text note>07111111111</Text>
            </Body>
            <Right></Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Icon name="mail-outline" />
            </Left>
            <Body>
              <Text>EMAIL</Text>
              <Text note>name@gmail.com</Text>
            </Body>
            <Right></Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Icon name="location-outline" />
            </Left>
            <Body>
              <Text>County</Text>
              <Text note>Nairobi</Text>
            </Body>
            <Right></Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Icon name="mail-outline" />
            </Left>
            <Body>
              <Text>EMAIL</Text>
              <Text note>name@gmail.com</Text>
            </Body>
            <Right></Right>
          </ListItem>
        </List>
        <View
          hasTabs
          style={{
            backgroundColor: '#0090BC',
          }}
        />
      </Container>
    </>
  );
};
export default ProfileScreen;
