import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {COLORS, icons, SIZES, images} from '../constants';
import {themeState} from '../../constants/recoilConstants';
import {useRecoilState} from 'recoil';
export default function CurrencyScreen() {
  const [theme, setTheme] = useRecoilState(themeState);
  console.log(theme)
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed-3ad53abb28ba',
    title: 'Fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-4f8-fbd91aa97f63',
    title: '5 Item',
  },
  {
    id: '58694a0f-3da1-471f-b96-145571e29d72',
    title: ' Item 6',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    height: 500,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});