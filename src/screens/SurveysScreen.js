import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import HeaderContainer from '../components/Header';
import {
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Button,
  Icon,
  View,
} from 'native-base';
import RNFetchBlob from 'rn-fetch-blob';
// import CameraRoll from '@react-native-community/cameraroll';
import Jumbotron from '../components/Jumbotron';
import {shareService} from '../utils/share';

const SurveysScreen = ({navigation}) => {
  const handleShare = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ).then(() => {});

    const granted = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    if (granted) {
      console.log('You can use the WRITE_EXTERNAL_STORAGE');
      let dirs = RNFetchBlob.fs.dirs;
      let filename = 'pdf';

      let name = 'image1';

      shareService({
        imgUrl:
          'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      });

      // const title = `${name}-${Date.now()}.${filename}`;

      // RNFetchBlob.config({
      //   fileCache: true,
      //   addAndroidDownloads: {
      //     useDownloadManager: true,
      //     notification: true,
      //     mediaScannable: true,
      //     mime: '',
      //     path: `${dirs.DownloadDir}/${title}`,
      //     title: title,
      //     // path: dirs.DownloadDir,
      //   },
      // })
      //   .fetch(
      //     'GET',
      //     'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      //     {
      //       Authorization: '',
      //       'Content-Type': '',
      //     },
      //   )
      //   .then((resp) => {
      //     console.log(resp.path());
      //     console.log('The file saved to ', resp.path());
      //   });
    }
  };
  return (
    <>
      <HeaderContainer navigation={navigation} />
      <Jumbotron title="Surveys" />

      {/* <View styles={styles.container}> */}
      {/* <Tabs activeTabStyle={{backgroundColor: '#fff'}}>
        <Tab
          heading="Popular"
          tabStyle={{backgroundColor: 'red'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: 'red'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          // heading={
          //   <TabHeading style={{}}>
          //     <Text>Active</Text>
          //   </TabHeading>
          // }>
        >
          <Text>active</Text>
        </Tab>
        <Tab
          // heading={
          //   <TabHeading>
          //     <Text>No Icon</Text>
          //   </TabHeading>
          // }>
          heading="Popular"
          tabStyle={{backgroundColor: 'red'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: 'red'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <Text>inact</Text>
        </Tab>
      </Tabs> */}
      <List>
        <TouchableOpacity>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                large
                square
                source={require('../assets/onboard/page2.png')}
              />
            </Left>
            <Right style={styles.body}>
              <View style={styles.bodyHeader}>
                <Text style={styles.title}>Digital Payment Survey</Text>
                <Text styles={styles.desc}>Easy payments in Kenya</Text>
              </View>
              <View style={styles.bodyFooter}>
                <View style={styles.bodyFooterLeft}>
                  <Button info style={styles.openSurveyBtn}>
                    <Text style={styles.openSurveyBtnText}>Open Survey</Text>
                  </Button>
                </View>

                <View style={styles.bodyFooterRight}>
                  <Button transparent onPress={() => handleShare()}>
                    <Icon name="share-social-outline" />
                  </Button>
                  <Button transparent>
                    <Icon name="chatbox-outline" />
                  </Button>
                </View>
              </View>
            </Right>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                large
                square
                source={{
                  uri:
                    'https://nationalyouthcouncil.go.ke/wp-content/uploads/2020/09/fursa.jpg',
                }}
              />
            </Left>
            <Right style={styles.body}>
              <View style={styles.bodyHeader}>
                <Text style={styles.title}>Digital Payment Survey</Text>
                <Text styles={styles.desc}>Easy payments in Kenya</Text>
              </View>
              <View style={styles.bodyFooter}>
                <View style={styles.bodyFooterLeft}>
                  <Button info style={styles.openSurveyBtn}>
                    <Text style={styles.openSurveyBtnText}>Open Survey</Text>
                  </Button>
                </View>

                <View style={styles.bodyFooterRight}>
                  <Button transparent onPress={() => handleShare()}>
                    <Icon name="share-social-outline" />
                  </Button>
                  <Button transparent>
                    <Icon name="chatbox-outline" />
                  </Button>
                </View>
              </View>
            </Right>
          </ListItem>
        </TouchableOpacity>
      </List>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ca4a4a',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  bodyHeader: {},
  title: {
    fontWeight: 'bold',
    fontFamily: 'arial',
    fontSize: 22,
  },
  bodyFooter: {
    flexDirection: 'row',
    marginTop: 10,
  },
  openSurveyBtn: {
    backgroundColor: '#ca4a4a',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  openSurveyBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  bodyFooterLeft: {
    flex: 1,
  },
  bodyFooterRight: {
    flexDirection: 'row',
  },
});
export default SurveysScreen;
