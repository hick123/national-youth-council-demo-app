/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AnnouncementScreen from '../screens/AnnouncementScreen';
import PartnersScreen from '../screens/PartnersScreen';
import SurveysScreen from '../screens/SurveysScreen';
import CivicEducationScreen from '../screens/CivicEducationForum';
import LeadersScreen from '../screens/Leaders.Screen';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import OIcon from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

function MainContainer() {
  const tabBarOptions = {
    activeTintColor: '#fff',
    activeBackgroundColor: '#0090BC',
    inactiveBackgroundColor: '#fff',
    labelStyle: {fontSize: 12, paddingBottom: 5},
    style: {
      backgroundColor: '#0090BC',
      color: '#fff',
    },
    scrollEnabled: true,
    showLabel: false,
  };

  return (
    <>
      {/* <HeaderContainer /> */}
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="home"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Announcement"
          component={AnnouncementScreen}
          options={{
            tabBarLabel: 'Announcement',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="megaphone-outline"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Partners"
          component={PartnersScreen}
          options={{
            tabBarLabel: 'Partners',
            tabBarIcon: ({color, size}) => (
              <FaIcon
                name="handshake-o"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Civic Education Forum"
          component={CivicEducationScreen}
          options={{
            tabBarLabel: 'Civic Education Forum',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="book-outline"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Survey"
          component={SurveysScreen}
          options={{
            tabBarLabel: 'Partners',
            tabBarIcon: ({color, size}) => (
              <OIcon
                name="checklist"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="person-outline"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Leaders"
          component={LeadersScreen}
          options={{
            tabBarLabel: 'Leaders',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="people-circle-outline"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="person-outline"
                color={color}
                style={{fontSize: 25, color: color, margin: 0}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default MainContainer;
