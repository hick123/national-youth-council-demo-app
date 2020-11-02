import {Toast} from 'native-base';
import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import images from '../screens/images/imageBase64';

export const shareService = (params) => {
  const {imgUrl, pdfUrl} = params;

  const urlDownload = imgUrl ? imgUrl : pdfUrl;
  const fileType = pdfUrl ? 'application/pdf' : 'image/jpeg';
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ).then(() => {});

  const granted = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  );

  if (granted) {
    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', urlDownload)
      .then((resp) => {
        let base64s = RNFetchBlob.fs
          .readFile(resp.data, 'base64')
          .then((data) => `data:${fileType};base64,${data}`);
        //   .then((data) => `data:image/jpeg;base64,${data}`);
        return base64s;
      })
      .then(async (completed) => {
        const options = {
          title: 'Share via',
          message: 'This is content from national youth council check it out!',
          url: completed,
        };
        await Share.open(options);
        Toast.show({
          text: 'Success - Check your downloads',
          duration: 3000,
          position: 'bottom',
          style: {margin: 20},
        });
      })
      .catch((err) => {
        console.log(err);
        Toast.show({
          text: 'Fail. Please try again',
          duration: 3000,
          type: 'danger',
          position: 'bottom',
          style: {margin: 20},
        });
      });
    // } catch (err) {
    //   Alert.alert("Error, Permission denied", err);
    // }
    // console.log('You can use the WRITE_EXTERNAL_STORAGE');
    // let dirs = RNFetchBlob.fs.dirs;
    // let filename = imgUrl ? '.jpg' : '.pdf';
    // let name = 'nyc-demo';
    // const title = `${name}-${Date.now()}.${filename}`;
    // const fileUrl = urlDownload;
    // let filePath = null;
    // let file_url_length = fileUrl.length;
    // const configOptions = {fileCache: true};
    // let type = 'jpg';
    // RNFetchBlob.config({
    //   fileCache: true,
    //   //   addAndroidDownloads: {
    //   //     useDownloadManager: true,
    //   //     notification: true,
    //   //     mediaScannable: true,
    //   //     mime: '',
    //   //     path: `${dirs.DownloadDir}/${title}`,
    //   //     title: title,
    //   //     // path: dirs.DownloadDir,
    //   //   },
    // })
    //   .fetch('GET', urlDownload, {
    //     Authorization: '',
    //     'Content-Type': '',
    //   })
    //   .then((resp) => {
    //     filePath = resp.path();
    //     return RNFetchBlob.fs.readFile(resp, 'base64');
    //   })
    //   .then(async (data) => {
    //     // console.log(data);
    //     // const base64Data = `data:${type};base64,` + data;
    //     const base64Data = 'data:image/jpeg;base64,' + data;
    //     // try {
    //     await Share.open({
    //       url: base64Data,
    //       subject: 'subject',
    //       message: 'This is content from national youth council',
    //     });
    //     // await Share.open({url: base64Data});
    //     // remove the image or pdf from device's storage
    //     // await RNFetchBlob.fs.unlink(filePath);
    //     // } catch (error) {
    //     //   console.log(error);
    //     // }
    //   })
    //   .then(() => {
    //     console.log('shared done');
    //   })
    //   .catch((err) => console.log('err catched', err));
  }
  return true;
};
