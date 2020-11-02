/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainContainer from './src/containers/Main';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Button} from 'react-native';
// import CivicEducationScreen from './src/screens/CivicEducationForum';
import DrawerContainer from './src/components/Drawer';
// import RegistationScreen from './src/screens/RegistrationScreen';
import LeadersDetailsScreen from './src/screens/LeadersDetailsScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import {Spinner} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from './src/screens/LoginScreen';
import {Root} from 'native-base';
import RegistationScreen from './src/screens/RegistrationScreen';
import ProgramDetailsScreen from './src/screens/ProgramsDetailsScreen';
import AnnouncementsDetailsScreen from './src/screens/AnnouncementDetailsScreen';
import CollaborationScreen from './src/screens/CollaborationScreen';
import CollaborationsDetailsScreen from './src/screens/CollaborationsDetailsScreen';
import CivicEducationDetailsScreen from './src/screens/CivicEducationForumDetailScreen';
import PartnersDetailsScreen from './src/screens/PartnersDetailsScreen';

const Drawer = createDrawerNavigator();
const TabStack = createStackNavigator();
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();

function TabStackScreen() {
  return (
    <TabStack.Navigator headerMode={false}>
      <TabStack.Screen name="Home" component={MainContainer} />
    </TabStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode={false}>
      <MainStack.Screen name="Home" component={TabStackScreen} />

      <MainStack.Screen name="Modal" component={ModalScreen} />
      <MainStack.Screen name="Register" component={RegistationScreen} />
      <MainStack.Screen
        name="Programs Details"
        component={ProgramDetailsScreen}
      />
      <MainStack.Screen
        name="Announcement Details"
        component={AnnouncementsDetailsScreen}
      />
      <MainStack.Screen
        name="Leaders Details"
        component={LeadersDetailsScreen}
      />
      <MainStack.Screen name="Collaboration" component={CollaborationScreen} />
      <MainStack.Screen
        name="Collaboration Details"
        component={CollaborationsDetailsScreen}
      />

      <MainStack.Screen
        name="Civic Education Details"
        component={CivicEducationDetailsScreen}
      />

      <MainStack.Screen
        name="Partner Details"
        component={PartnersDetailsScreen}
      />
    </MainStack.Navigator>
  );
}

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function DrawerStackScreen() {
  return (
    <Drawer.Navigator
      // initialRouteName="Root"
      drawerContentOptions={{
        activeBackgroundColor: '#000',
        activeTintColor: '#ffffff',
      }}
      drawerContent={(props) => <DrawerContainer props={props} />}>
      <Drawer.Screen
        name="Main"
        component={MainStackScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

//checks if auth to redirect user to login or main app
const AuthScreen = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <AuthStack.Navigator headerMode={false}>
      {isSignIn ? (
        <AuthStack.Screen name="Root" component={DrawerStackScreen} />
      ) : (
        <>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Root" component={DrawerStackScreen} />
        </>
      )}
    </AuthStack.Navigator>
  );
};

//app starts here checks if app is first lanched to display onboarding
const App: () => React$Node = () => {
  const [isFirstLaunched, setIsFirstLanched] = useState(null);

  useEffect(() => {
    // AsyncStorage.removeItem('isFirstLaunched');
    AsyncStorage.getItem('isFirstLaunched').then((res) => {
      console.log(res);
      if (res === null) {
        AsyncStorage.setItem('isFirstLaunched', 'true');
        setIsFirstLanched(true);
      } else {
        setIsFirstLanched(false);
      }
    });
  }, []);

  if (isFirstLaunched === null) {
    return (
      <Spinner
        color="#0090BC"
        style={{alignItems: 'center', justifyContent: 'center'}}
      />
    );
  } else if (isFirstLaunched === true) {
    return (
      <Root>
        <NavigationContainer>
          <RootStack.Navigator headerMode={false}>
            <RootStack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <RootStack.Screen name="Root" component={DrawerStackScreen} />
            <RootStack.Screen name="Auth" component={AuthScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Root>
    );
  } else {
    return (
      <Root>
        <NavigationContainer>
          <RootStack.Navigator headerMode={false}>
            <RootStack.Screen name="Auth" component={AuthScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Root>
    );
  }
};

export default App;

// import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import MainContainer from './src/containers/Main';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {View, Text, Button} from 'react-native';
// import CivicEducationScreen from './src/screens/CivicEducationForum';
// import DrawerContainer from './src/components/Drawer';
// import RegistationScreen from './src/screens/RegistrationScreen';
// import LeadersDetailsScreen from './src/screens/LeadersDetailsScreen';
// import OnBoardingScreen from './src/screens/OnBoardingScreen';

// const Drawer = createDrawerNavigator();
// const TabStack = createStackNavigator();
// const RootStack = createStackNavigator();

// function TabStackScreen() {
//   return (
//     <TabStack.Navigator headerMode={false}>
//       <TabStack.Screen name="Home" component={MainContainer} />
//     </TabStack.Navigator>
//   );
// }
// function ModalScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 30}}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} title="Dismiss" />
//     </View>
//   );
// }

// function DrawerStackScreen() {
//   return (
//     <RootStack.Navigator mode="modal" headerMode={false}>
//       <RootStack.Screen
//         name="Main"
//         component={TabStackScreen}
//         options={{headerShown: false}}
//       />
//       <RootStack.Screen name="MyModal" component={ModalScreen} />
//       <RootStack.Screen name="Registation" component={RegistationScreen} />
//       <RootStack.Screen
//         name="Leaders Details"
//         component={LeadersDetailsScreen}
//       />
//     </RootStack.Navigator>
//   );
// }

// const App: () => React$Node = () => {
//   const [isFirstLaunched, setIsFirstLanched] = useState(null);
//   useEffect(() => {}, []);
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         // initialRouteName="Root"
//         drawerContentOptions={{
//           activeBackgroundColor: '#000',
//           activeTintColor: '#ffffff',
//         }}
//         drawerContent={(props) => <DrawerContainer props={props} />}>
//         <Drawer.Screen name="OnBoarding" component={OnBoardingScreen} />
//         <Drawer.Screen name="Root" component={DrawerStackScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
