import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import PortfolioScreen from '../screens/portfolio/Portfolio';
import ConverterScreen from '../screens/converter/Converter';
import CurrencyScreen from '../screens/currency/Currency';
import {COLORS, icons} from '../constants';
//import {themeState} from '../constants/recoilConstants';

function BottomTabNavigator( { navigation } ) {
  // const theme = useRecoilValue(themeState);
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 0,
        height:65,
      },
      tabBarInactiveTintColor: COLORS["white"].secText,
      tabBarActiveTintColor:
         COLORS["white"].skyBlue
     }} >
        <Tab.Screen name="Currency" component={CurrencyScreen} />
        <Tab.Screen name="Convertor" component={ConverterScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      </Tab.Navigator>
  );
}

export default BottomTabNavigator;