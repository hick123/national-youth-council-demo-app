import {Button} from 'native-base';
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
import {programsData} from '../data/programs-list';
const {width} = Dimensions.get('window');
const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);
const height = width * 0.7;
const Programs = ({navigation}) => {
  return (
    <View style={{height, width}}>
      <AnimatedScrollview
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        style={{height, width}}>
        {programsData.map((program, i) => (
          <TouchableOpacity
            key={program.title}
            style={styles.card}
            onPress={() => navigation.navigate('Programs Details', {program})}>
            <Image key={i} source={program.imgUrl} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>
              {program.title}
            </Text>
            <Text style={styles.body} numberOfLines={1}>
              {program.body}
            </Text>

            <Button
              transparent
              style={styles.readMoreButton}
              onPress={() => {}}>
              <Text style={styles.readMoreButtonText}>Read More</Text>
            </Button>
          </TouchableOpacity>
        ))}
      </AnimatedScrollview>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: height * 0.8,
    width: width * 0.5,
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
export default Programs;
