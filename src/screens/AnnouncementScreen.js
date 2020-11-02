/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import HeaderContainer from '../components/Header';
import {
  Thumbnail,
  Left,
  List,
  ListItem,
  Body,
  Right,
  Badge,
  Button,
  Icon,
} from 'native-base';
// import {Image} from 'react-native';
import Jumbotron from '../components/Jumbotron';
import {annoucementData} from '../data/announcement';
import {downloadService} from '../utils/download';
import {shareService} from '../utils/share';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
// const {height} = Dimensions.get('window');

const AnnouncementScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (pdfUrl) => {
    setLoading(true);
    console.log('download');
    await downloadService({
      pdfUrl: pdfUrl,
    });
    setLoading(false);
  };

  const handleShare = async (pdfUrl) => {
    setLoading(true);
    console.log('share');

    await shareService({pdfUrl: pdfUrl});
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <HeaderContainer navigation={navigation} />
      <Jumbotron title="Announcements" />
      <ScrollView>
        <List>
          {annoucementData.map((announcement, index) => (
            <ListItem
              thumbnail
              style={styles.listItem}
              key={announcement.title}
              // onPress={() => navigation.navigate('Announcement Details')}
            >
              <Left>
                <Thumbnail square large source={announcement.imgUr} />
              </Left>
              <Body>
                <Text>{announcement.title}</Text>
                <Text note numberOfLines={1}>
                  {announcement.date}
                </Text>
                <Button
                  transparent
                  onPress={() =>
                    navigation.navigate('Announcement Details', {announcement})
                  }>
                  <Text style={styles.buttonText}>Read More</Text>
                </Button>
              </Body>
              <Right>
                {announcement.isRead ? null : (
                  <Badge
                    warning
                    style={{position: 'absolute', top: 5, right: 10}}>
                    <Text style={{color: '#fff'}}>New</Text>
                  </Badge>
                )}
                <View style={styles.shareDownloadBtns}>
                  <TouchableOpacity
                    onPress={() => handleDownload(announcement.pdfUrl)}>
                    <Icon
                      name="arrow-down-circle-outline"
                      style={styles.downloadBtn}
                    />
                  </TouchableOpacity>

                  <Icon
                    name="share-social-outline"
                    style={styles.shareBtn}
                    onPress={() => handleShare(announcement.pdfUrl)}
                  />
                </View>
              </Right>
            </ListItem>
          ))}

          {/* <ListItem thumbnail style={styles.listItem}>
            <Left>
              <Thumbnail
                square
                source={require('../assets/programs/fursa.jpg')}
              />
            </Left>
            <Body>
              <Text>2020 Fursa Seminar</Text>
              <Text note numberOfLines={1}>
                2 Days ago
              </Text>
            </Body>
            <Right> */}
          {/* <Badge warning style={{position: 'absolute', top: 5, right: 10}}>
                <Text>New</Text>
              </Badge> */}
          {/* <View style={styles.shareDownloadBtns}>
                <Icon
                  name="arrow-down-circle-outline"
                  style={styles.downloadBtn}
                />

                <Icon name="share-social-outline" style={styles.shareBtn} />
              </View>
            </Right>
          </ListItem> */}
        </List>
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
  listItem: {
    backgroundColor: '#fff',
    // borderRadius: 10,
    margin: 10,
    paddingLeft: 10,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  shareDownloadBtns: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    right: 10,
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
  buttonText: {
    color: 'blue',
  },
});
export default AnnouncementScreen;
