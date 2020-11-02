/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const {height, width} = Dimensions.get('window');

const OnBoardingScreen = ({navigation}) => {
  return (
    <>
      <Onboarding
        onSkip={() => navigation.navigate('Auth')}
        onDone={() => navigation.navigate('Auth')}
        pages={[
          {
            backgroundColor: '#0090BC',
            image: (
              <Image
                style={{
                  height: height / 3,
                  width: 0.8 * width,
                  resizeMode: 'contain',
                }}
                source={require('../assets/onboard/page1.png')}
              />
            ),
            title: 'Welcome',
            subtitle: 'National Youth Council',
          },
          {
            backgroundColor: '#0090BC',
            image: (
              <Image
                style={{
                  height: height / 3,
                  width: 0.8 * width,
                  resizeMode: 'contain',
                }}
                source={require('../assets/onboard/page2.png')}
              />
            ),
            title: 'Find Us On Social Media',
            subtitle: 'Facebook, Twitter and Instagram',
          },
          {
            backgroundColor: '#0090BC',
            image: (
              <Image
                style={{
                  height: height / 3,
                  width: 0.8 * width,
                  resizeMode: 'contain',
                }}
                source={require('../assets/onboard/page3.png')}
              />
            ),
            title: 'Find Opportunities',
            subtitle: 'Like Kazi Kwa Vijana',
          },
        ]}
      />
    </>
  );
};

export default OnBoardingScreen;
