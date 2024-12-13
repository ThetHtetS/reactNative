/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid, Platform,
  Linking
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import CurrencyScreen from './src/screens/currency/Currency';
import PortfolioScreen from './src/screens/portfolio/Portfolio';
import ConverterScreen from './src/screens/converter/Converter';
import Youtube from './src/screens/youtube/YouTube';

import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {

  const requestUserPermission = async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    }
    const authStatus = await messaging().requestPermission();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };
  
  useEffect(() => {
    console.log('App.tsx');
    requestUserPermission().then(granted => {
      if (granted) {
        console.log('User granted permission');
        messaging()
          .getToken()
          .then(fcmToken => {
            console.log('FCM Token -> ', fcmToken);
          
          })
          .catch(err=> console.log('FCM Token Error -> ', err));
      } else {
        console.log('User declined permission');
      }})
        
  }, [])

  const linking = {
    prefixes: ['testapp://'],
    config:  {
      screens: {
        Currency: 'Currency',
        Portfolio: 'Portfolio',
      },
    }
  };


 useEffect(()=> {
    Linking.openURL('testapp://Portfolio').then(res => console.log(res, "success") ).catch((err) => {
      console.log('Failed to open URL', err);
    });
}, [])
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> */}
       <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="Currency" component={CurrencyScreen}  options={{ title: 'Overview', headerShown: false }}/>
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="Convertor" component={ConverterScreen} />
        <Stack.Screen name="Youtube" component={Youtube} />
     
      </Stack.Navigator>

    </NavigationContainer>
  );
}