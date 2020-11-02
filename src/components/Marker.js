import {Button} from 'native-base';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MarkerCustomView = ({opportunity, navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={opportunity.imgUr}
        style={{height: 100, width: 50, resizeMode: 'cover'}}
      /> */}
      {/* <Thumbnail
        small
        source={{
          uri:
            'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
        }}
      /> */}

      {/* <OIcon name="triangle-down" style={styles.arrowIcon} /> */}

      <TouchableOpacity>
        <Text>{opportunity.title}</Text>
        <Button full transparent>
          <Text>Read More</Text>
        </Button>
      </TouchableOpacity>
      {/* <View style={styles.body}>
        <Thumbnail
          small
          source={{
            uri:
              'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
          }}
        />
        <Text>nan</Text>
      </View>
      <OIcon name="triangle-down" style={styles.arrowIcon} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    height: 70,
    width: 130,
    backgroundColor: 'red',
  },
});
export default MarkerCustomView;
