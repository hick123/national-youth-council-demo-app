import {Toast} from 'native-base';
import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const downloadService = (params) => {
  const {imgUrl, pdfUrl} = params;

  const urlDownload = imgUrl ? imgUrl : pdfUrl;
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ).then(() => {});

  const granted = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  );

  if (granted) {
    console.log('You can use the WRITE_EXTERNAL_STORAGE');
    let dirs = RNFetchBlob.fs.dirs;
    let filename = imgUrl ? '.png' : '.pdf';

    let name = 'nyc-demo';

    const title = `${name}-${Date.now()}.${filename}`;

    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        mime: '',
        path: `${dirs.DownloadDir}/${title}`,
        title: title,
        // path: dirs.DownloadDir,
      },
    })
      .fetch('GET', urlDownload, {
        Authorization: '',
        'Content-Type': '',
      })
      .then((resp) => {
        console.log(resp.path());
        Toast.show({
          text: 'Success - Check your downloads',
          duration: 3000,
          position: 'bottom',
          style: {margin: 20},
        });
        console.log('The file saved to ', resp.path());
      });
  }
};
