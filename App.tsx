/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
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



const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> */}
       <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="Currency" component={CurrencyScreen}  options={{ title: 'Overview', headerShown: false }}/>
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="Convertor" component={ConverterScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}