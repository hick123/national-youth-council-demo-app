/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import MarkerCustomView from '../components/Marker';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Collaborations from '../components/Collaborations';
import {Header, Icon, Button, Text, Input, Left, Body, View} from 'native-base';
import {collaborationsData} from '../data/collaboration';
import HeaderContainer from '../components/Header';

const CollaborationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -1.298047,
          longitude: 36.794951,
          latitudeDelta: 0.1,
          longitudeDelta: 0.121,
        }}>
        {/* <Marker
          coordinate={{latitude: -1.298047, longitude: 36.794951}}
          // title="test"
          // description={marker.description}
        > */}
        {collaborationsData.map((opportunity, i) => (
          <Marker
            key={opportunity.imgUr}
            coordinate={{
              longitude: opportunity.region.longitude,
              latitude: opportunity.region.latitude,
            }}>
            <Callout
              onPress={() =>
                navigation.navigate('Collaboration Details', {opportunity})
              }>
              <MarkerCustomView opportunity={opportunity} />
            </Callout>
          </Marker>
        ))}
      </MapView>
      <HeaderContainer />
      {/* <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
            <Text style={{color: '#fff'}}>Back</Text>
          </Button>
        </Left>
        <Body style={{justifyContent: 'center', alignItems: 'center'}}> */}
      {/* <View style={styles.searchbar}>
            <Input placeholder="Search" style={styles.input} />
            <Icon style={styles.searchIcon} name="ios-search" />
          </View> */}
      {/* </Body> */}
      {/* <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
          <Text style={{color: '#fff'}}>Back</Text>
        </Button> */}
      {/* <Item>
          <Icon name="arrow-back" />
        </Item> */}
      {/* <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item> */}
      {/* <Button transparent>
          <Text>Search</Text>
        </Button> */}
      {/* </Header> */}
      <Collaborations navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    // width: 400,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  searchbar: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxHeight: 40,
    borderRadius: 20,
  },
  input: {
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
});

export default CollaborationScreen;
