/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Left, Icon, Body, Right, Button} from 'native-base';
import {Image} from 'react-native';

const HeaderContainer = ({title, navigation}) => {
  return (
    <Header style={{backgroundColor: '#0090BC'}}>
      <Left style={{flex: 1}}>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../assets/LOGO.png')}
          style={{height: 100, width: 80, marginTop: 20}}
        />
      </Body>
      <Right style={{flex: 1}}>
        <Icon
          name="options-outline"
          style={{fontSize: 25, color: '#fff', margin: 0}}
        />
      </Right>
    </Header>
  );
};
export default HeaderContainer;

// tabStyle={{backgroundColor: 'red'}}
// textStyle={{color: '#fff'}}
// activeTabStyle={{backgroundColor: 'red'}}
// activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
// tabStyle={{backgroundColor: 'red'}}
// textStyle={{color: '#fff'}}
// activeTabStyle={{backgroundColor: 'red'}}
// activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
