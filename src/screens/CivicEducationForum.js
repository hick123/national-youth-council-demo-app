/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, Dimensions, View} from 'react-native';
import HeaderContainer from '../components/Header';
import {
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {civicEdutationData} from '../data/civicEducation';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {downloadService} from '../utils/download';
import {shareService} from '../utils/share';
import {useState} from 'react';
const {height, width} = Dimensions.get('window');

const CivicEducationScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (pdfUrl) => {
    setLoading(true);
    await downloadService({pdfUrl: pdfUrl});
    setLoading(false);
  };

  const handleShare = async (pdfUrl) => {
    setLoading(true);
    await shareService({pdfUrl: pdfUrl});
    setLoading(false);
  };
  return (
    <View style={{backgroundColor: '#e4f7fd', flex: 1}}>
      <HeaderContainer navigation={navigation} />

      <View
        style={{
          height: height * 0.1,
          backgroundColor: '#0090BC',
          borderBottomLeftRadius: height * 0.05,
          borderBottomRightRadius: height * 0.05,
          alignItems: 'center',
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
          <Text style={{color: '#fff'}}>Civic Education Forum </Text>
        </View>
      </View>
      <List style={{marginTop: height * 0.05}}>
        {civicEdutationData.map((cv, i) => (
          <ListItem thumbnail key={cv.title} style={styles.listItem}>
            <Left>
              <Thumbnail square source={cv.imgUr} />
            </Left>
            <Body tyle={{flex: 1}}>
              <Text numberOfLines={2} style={styles.title}>
                {cv.title}
              </Text>
              {/* <Text note numberOfLines={1}>
                {cv.date}
              </Text> */}
              <View style={styles.button}>
                <Button
                  transparent
                  onPress={() =>
                    navigation.navigate('Civic Education Details')
                  }>
                  <Text style={styles.buttonText}>Read More</Text>
                </Button>
              </View>
            </Body>
            <Right style={{flex: 1, alignItems: 'flex-start', marginLeft: 20}}>
              <Button
                transparent
                onPress={() => handleDownload(cv.pdfUrl)}
                disabled={loading}>
                <FaIcon style={styles.icon} name="download" />
                <Text>Download</Text>
              </Button>
              <Button
                transparent
                onPress={() => handleShare(cv.pdfUrl)}
                disabled={loading}>
                <FaIcon style={styles.icon} name="share" />
                <Text>Share</Text>
              </Button>
              {/* <View style={styles.button}>
                <Button
                  transparent
                  onPress={() =>
                    navigation.navigate('Civic Education Details')
                  }>
                  <Text style={styles.buttonText}>Read More</Text>
                </Button>
              </View> */}
            </Right>
          </ListItem>
        ))}
      </List>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: '#000',
    marginRight: 10,
    // margin: 10,
  },
  listItem: {
    backgroundColor: '#fff',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    marginBottom: 27,
  },
  button: {
    position: 'absolute',
    color: 'blue',
    bottom: 0,
  },
  buttonText: {
    color: 'blue',
  },
});
export default CivicEducationScreen;
