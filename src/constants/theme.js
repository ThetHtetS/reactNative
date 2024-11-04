import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  white2: '#C6C6C6',
  white3: '#777777',
  yellow: '#C9FF09',
  red: '#93B20F',
  red2: '#5B6618',
  grey: '#161616',
  grey50: '#333333',
  skyBlue : '#539DF3',
  transparent: 'transparent',
  dropDownGrey:'#323232',
  dark:{
    black: '#000000',
    white: '#FFFFFF',
    white2: '#C6C6C6',
    white3: '#777777',
   
    ///sky global
    skyBlue : '#539DF3',
    secText:'#B7D5FF',
    mainBg:'#E8F0FB',
    mainText:'#484C52',
    blueText:'#539DF3',
    border : '#F2F1F1',
    down:'#FF4072',
    up:'#009784'
  },

  White: {
    black: '#000000',
    white: '#FFFFFF',
    
    ///sky global
    skyBlue : '#539DF3',
    secText:'#B7D5FF',
    mainBg:'#E8F0FB',
    mainText:'#484C52',
    blueText:'#539DF3',
    border : '#F2F1F1',
    down:'#FF4072',
    up:'#009784'

  }
};

export const FONTS = {
  light: 'Gruppo-Regular',
  regular: 'MonumentExtended-Regular',
  bold: 'MonumentExtended-Ultrabold',
  normal : 'BAHNSCHRIFT'
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  title: 40,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
  shadowStyle: {
    shadowColor: COLORS.white3,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1.8,
    shadowOpacity: 0.5,
    elevation: 5,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
