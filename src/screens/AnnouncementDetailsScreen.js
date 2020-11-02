/* eslint-disable react-native/no-inline-styles */
import {View, Header, Button, Icon} from 'native-base';
import React from 'react';
import {downloadService} from '../utils/download';
import {shareService} from '../utils/share';
import {useState} from 'react';
import {Text, StyleSheet, Dimensions, Image} from 'react-native';
const {width, height} = Dimensions.get('window');

const AnnouncementsDetailsScreen = ({route, navigation}) => {
  const {announcement} = route.params;
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
      <Header
        style={{
          backgroundColor: '#0090BC',
          justifyContent: 'flex-start',
        }}>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
          <Text style={{color: '#fff'}}>Announcements</Text>
        </Button>
      </Header>

      <Image source={announcement.imgUr} style={styles.image} />

      <View style={styles.header}>
        <Text style={styles.title}>{announcement.title}</Text>
        <View style={styles.shareDownloadBtns}>
          <Icon
            name="arrow-down-circle-outline"
            style={styles.downloadBtn}
            onPress={() => handleDownload(announcement.pdfUrl)}
          />

          <Icon
            name="share-social-outline"
            style={styles.shareBtn}
            onPress={() => handleShare(announcement.pdfUrl)}
          />
        </View>
      </View>
      <Text style={styles.body}>Annooucment details goes here</Text>
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
    margin: 10,
  },
  image: {
    height: height * 0.3,
    width: width,
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
export default AnnouncementsDetailsScreen;
