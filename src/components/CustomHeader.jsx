/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, SIZES} from '../constants';
import Svg, {Path} from 'react-native-svg';
import {useRecoilState} from 'recoil';
import {notiCount, themeState} from '../constants/recoilConstants';

const CustomHeader = ({title = null, navigation, isMain = true}) => {
  const [nCount] = useRecoilState(notiCount);
  const [theme, setTheme] = useRecoilState(themeState);
  const [showNoti, setShowNoti] = useState(false);
  const toggleClick = () => {
    if (isMain) {
      navigation.toggleDrawer();
    } else {
      navigation.goBack();
    }
  };
  console.log(theme, "header");
  
  const handleChangeTheme = () => {
    setTheme(theme === 'White' ? 'dark' : 'White');
  };
  return (
    <View
      style={{
        // height: 60,
        backgroundColor: COLORS.skyBlue ,
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 23,
        // paddingTop: isMain && 10,
        marginBottom: 0,
      }}>
      <TouchableOpacity onPress={toggleClick}>
        {isMain ? (
          <Svg width={24} height={18} viewBox="0 0 24 18">
            <Path
              d="M1.50498 0H22.495C23.3249 0 24 0.672892 24 1.49999C24 2.32708 23.3249 2.99998 22.495 2.99998H1.50498C0.675132 3.00465 0 2.33176 0 1.49999C0 0.672892 0.675132 0 1.50498 0"
              fill={COLORS[theme]?.white}
            />
            <Path
              d="M1.46785 8H14.5322C15.3415 8 16 8.6729 16 9.5C16 10.3271 15.3415 11 14.5322 11H1.46785C0.658474 11 0 10.3271 0 9.5C0 8.6729 0.658474 8 1.46785 8"
              fill={COLORS[theme]?.white}
            />
            <Path
              d="M1.53752 15H7.46248C8.31027 15 9 15.6729 9 16.5C9 17.3271 8.31027 18 7.46248 18H1.53752C0.689728 18.0046 0 17.3318 0 16.5047C0 15.6729 0.689728 15 1.53752 15"
              fill={COLORS[theme]?.white}
            />
          </Svg>
        ) : (
          // <Feather
          //   name="menu"
          //   size={20}
          //   color={COLORS[theme].white}
          //   style={{}}
          // />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="chevron-back"
              size={20}
              color={COLORS.white}
              style={{}}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.h4,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {title}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      {isMain && (
        <>
          <Text
            style={{
              color: COLORS[theme].white,
              fontSize: SIZES.h1,
              fontWeight: 'bold',
              marginTop: 20,
              fontFamily: FONTS.normal,

              // marginLeft: 10,
            }}>
            Sky Global
          </Text>
          <Text
            style={{
              color: COLORS[theme].secText,
              fontSize: SIZES.body3,
              // marginLeft: 10,
            }}>
            {title ? title : "Multi Supporting Service"}
          </Text>
        </>
      )}

      {/* <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#C9FF09' }}>{title}</Text> */}
      {/* <Icon
        name="notifications"
        size={28}
        color={COLORS.yellow}
        style={{opacity: 1}}
      /> */}
    </View>
  );
};

export default CustomHeader;
