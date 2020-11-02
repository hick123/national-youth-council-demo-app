/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {collaborationsData} from '../data/collaboration';
const {width} = Dimensions.get('window');
const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);
const height = width * 0.5;
const Collaborations = ({navigation}) => {
  return (
    <View
      style={{
        height,
        width,
        position: 'absolute',
        bottom: 5,
        backgroundColor: '#fff',
      }}>
      <Text style={styles.sectionHeaderText}> Find Opportunities</Text>
      <Text style={styles.sectionDescText}>
        E.g Collaborations With other Youths, Kazi kwa vijana etc
      </Text>

      <AnimatedScrollview
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        style={{height}}>
        {collaborationsData.map((opportunity, i) => (
          <TouchableOpacity
            key={opportunity.title}
            style={styles.card}
            onPress={() =>
              navigation.navigate('Collaboration Details', {opportunity})
            }>
            <Image key={i} source={opportunity.imgUr} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>
              {opportunity.title}
            </Text>
          </TouchableOpacity>
        ))}
      </AnimatedScrollview>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionHeaderText: {
    fontSize: 20,

    fontWeight: '700',
    alignSelf: 'center',
  },
  sectionDescText: {
    alignSelf: 'center',
  },
  card: {
    height: height * 0.7,
    width: width * 0.3,
    margin: 10,
    borderRadius: 7,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    height: height * 0.5,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: null,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
  },
  body: {
    fontSize: 12,
    marginLeft: 5,
  },
  readMoreButton: {
    position: 'absolute',
    bottom: 2,
    marginLeft: 5,
  },
  readMoreButtonText: {
    color: '#0090BC',
    fontWeight: '700',
  },
  pagination: {
    flexDirection: 'row',
    // position: 'absolute',
    // bottom: 0,
    alignSelf: 'center',
  },
  paginationText: {
    margin: 3,
    fontSize: 16,
    color: '#aaaaaa',
  },
  paginationActiveText: {
    margin: 3,
    fontSize: 16,
    color: '#000',
  },
});
export default Collaborations;
