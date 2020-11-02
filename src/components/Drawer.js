/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Thumbnail, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FaIcon from 'react-native-vector-icons/FontAwesome';

function DrawerContainer({props}) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={styles.header}>
            <View style={styles.logo}>
              <View style={styles.headerImage}>
                <Thumbnail
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1512516756229-95a66d49c4e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                  }}
                />
              </View>
              <View>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Icon
                    name="close-outline"
                    style={{height: 25, width: 25, color: '#fff'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerText}>
              <Text style={styles.name}>Celestina Setter</Text>
              <Text style={styles.email}>csetter0@goo.ne.ke</Text>
            </View>
          </View>
          <DrawerItem
            icon={({color, activeBackgroundColor, size}) => (
              <Icon
                name="home-outline"
                activeBackgroundColor
                style={styles.icon}
              />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon
                name="megaphone-outline"
                style={{height: 25, width: 25, color: '#000'}}
              />
            )}
            label="Announcement"
            onPress={() => props.navigation.navigate('Announcement')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon
                name="person-add-outline"
                style={{height: 25, width: 25, color: '#000'}}
              />
            )}
            label="Register"
            onPress={() => props.navigation.navigate('Register')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon
                name="book-outline"
                style={{fontSize: 25, color: color, margin: 0}}
              />
            )}
            label="Civic Education Forum"
            activeBackgroundColor="#000"
            activeTintColor="#000"
            onPress={() => props.navigation.navigate('Civic Education Forum')}
          />

          <DrawerItem
            icon={({color, size}) => (
              <FaIcon name="handshake-o" style={styles.icon} />
            )}
            label="Partners"
            onPress={() => props.navigation.navigate('Partners')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="contract-outline" style={styles.icon} />
            )}
            label="Opportunities"
            onPress={() => props.navigation.navigate('Collaboration')}
          />
        </View>
        <View style={styles.footer}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="log-out-outline" style={styles.icon} />
            )}
            label="Logout"
            onPress={() => props.navigation.navigate('Auth')}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingLeft: 14,
    paddingBottom: 20,
    backgroundColor: '#0090BC',
    marginTop: -10,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  headerText: {
    marginLeft: 10,
    color: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  email: {
    color: '#fff',
  },
  icon: {
    // height: 25,
    // width: 25,
    color: '#000',
  },
  footer: {
    flex: 1,
    borderTopColor: '#aaaaaa',
    borderTopWidth: 1,
  },
});
export default DrawerContainer;
