/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import HeaderContainer from '../components/Header';
import {
  Thumbnail,
  Left,
  Header,
  Title,
  Body,
  Right,
  Icon,
  Card,
  CardItem,
  View,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import VideoGallery from '../components/VideoGallery';
import PhotoGallery from '../components/PhotoGallery';
import Jumbotron from '../components/Jumbotron';
import Programs from '../components/Programs';
const {height} = Dimensions.get('window');
import MarkerCustomView from '../components/Marker';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderContainer navigation={navigation} />
      <Jumbotron title="Home" />
      {/* <Button onPress={() => navigation.navigate('Modal')} title="Dismiss" /> */}
      <ScrollView>
        <Image
          source={{
            uri:
              'https://nationalyouthcouncil.go.ke/wp-content/uploads/2020/09/1-COVER-1.png',
          }}
          style={{height: 120, width: null, flex: 1}}
        />
        <View style={styles.programsHeader}>
          <Text style={styles.programsHeaderLeft}>Programs</Text>

          <Text style={styles.programsHeaderRight}>View All</Text>
        </View>
        <Programs navigation={navigation} />

        {/* <MarkerCustomView /> */}

        {/* <PhotoGallery /> */}
        {/* <VideoGallery /> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f7fd',
    justifyContent: 'center',
  },
  programsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  programsHeaderLeft: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  programsHeaderRight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6d6d6d',
  },
});
export default HomeScreen;
