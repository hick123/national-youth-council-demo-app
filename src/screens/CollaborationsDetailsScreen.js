/* eslint-disable react-native/no-inline-styles */
import {View, Header, Button, Icon} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
const {width} = Dimensions.get('window');
const height = width * 0.7;
const CollaborationsDetailsScreen = ({route, navigation}) => {
  const {opportunity} = route.params;

  return (
    <View style={styles.container}>
      <Header
        style={{
          backgroundColor: '#0090BC',
          justifyContent: 'flex-start',
        }}>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
          <Text style={{color: '#fff'}}>Opportunities</Text>
        </Button>
      </Header>

      <ScrollView>
        <Image source={opportunity.imgUr} style={styles.image} />

        <View style={styles.header}>
          <Text style={styles.title}>{opportunity.title}</Text>
          <View style={styles.shareDownloadBtns}>
            <Icon name="arrow-down-circle-outline" style={styles.downloadBtn} />

            <Icon name="share-social-outline" style={styles.shareBtn} />
          </View>
        </View>

        <Text style={styles.body}>
          {opportunity.body}
          The Description of the opportunity goes here
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    height: height * 0.8,
    width: width * 0.5,
    margin: 10,
    borderRadius: 7,
    backgroundColor: '#fff',
  },
  image: {
    height: height * 0.9,
    width: null,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  body: {
    margin: 10,
  },
  shareBtn: {
    color: '#000',
    fontSize: 25,
  },
  downloadBtn: {
    color: '#000',
    fontSize: 25,
    marginRight: 10,
  },
  shareDownloadBtns: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
});
export default CollaborationsDetailsScreen;
