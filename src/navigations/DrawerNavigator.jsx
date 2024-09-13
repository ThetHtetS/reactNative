/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import CurrencyScreen from '../screens/currency/Currency';
import CustomDrawerContent from '../components/CustomDrawerContent';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
   
      <Drawer.Navigator  
      drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name='currency' component={CurrencyScreen} />
        <Drawer.Screen name="Tab" component={BottomTabNavigator} />
        
      </Drawer.Navigator>
 
  );
}