/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {COLORS, icons, SIZES, images} from '../constants';
import {DrawerContentScrollView} from '@react-navigation/drawer';
//import Svg, {Path} from 'react-native-svg';
import {themeState} from '../constants/recoilConstants';
import {useRecoilState} from 'recoil';


const CustomDrawerContent = props => {
  const {navigation} = props;
  const [theme, setTheme] = useRecoilState(themeState);
  console.log(theme)
  setTheme("white")
  return (
    <DrawerContentScrollView
      {...props}
      style={{flex: 1, backgroundColor: '#539DF3'}}>
      <ImageBackground
        source={images.sidebarshape}
        style={{
          flex: 1,
          height: SIZES.height,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <View style={{marginBottom: 25}}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={{
                width: 150,
                height: 150,
                alignSelf: 'center',
              }}
            />
            <View style={{width: '100%', alignItems: 'center', marginTop: -30}}>
              <Text
                style={{
                  color: COLORS[theme].white,
                  fontSize: SIZES.h2,
                  fontWeight: 'bold',
                }}>
                Sky Global
              </Text>
              <Text
                style={{
                  color: COLORS[theme].secText,
                  fontSize: SIZES.body4,
                }}>
                Multi Supporting Service
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Home')}>
            <Image source={icons.homeIcoDrawer} style={styles.icons} />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Currency')}>
            <Image source={icons.currencyIcoDrawer} style={styles.icons} />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Currency
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Youtube')}>
            <Image
              tintColor={COLORS[theme]?.white}
              source={icons.globalJobIco}
              style={styles.icons}
            />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Youtube
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Education')}>
            <Image
              tintColor={COLORS[theme]?.white}
              source={icons.schoolIcoDrawer}
              style={styles.icons}
            />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Education Carrer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('HomeCare')}>
            <Image
              tintColor={COLORS[theme]?.white}
              source={icons.homeCareIco}
              style={styles.icons}
            />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Home Care
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('GlobalInfo')}>
            <Image
              tintColor={COLORS[theme]?.white}
              source={icons.informationIco}
              style={styles.icons}
            />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Global Information
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Passport')}>
            <Image
              tintColor={COLORS[theme]?.white}
              source={icons.passportIco}
              style={styles.icons}
            />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Passport QR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('MaritineJob')}>
            <Image
              tintColor={COLORS[theme]?.white}
              source={icons.maritimeJobIco}
              style={styles.icons}
            />
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              Maritime Job
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Portfolio')}>
            <Svg
              width={23}
              height={25}
              style={styles.icons}
              preserveAspectRatio="xMidYMid meet">
              <Path
                d="M11.6854 12.5426C9.96478 12.5426 8.47507 11.9492 7.25751 10.7785C6.04034 9.60795 5.42303 8.17573 5.42303 6.52111C5.42303 4.86706 6.04015 3.43464 7.25771 2.26372C8.47527 1.09338 9.96498 0.5 11.6854 0.5C13.4062 0.5 14.8957 1.09338 16.1131 2.26391C17.3304 3.43445 17.9478 4.86687 17.9478 6.52111C17.9478 8.17573 17.3304 9.60814 16.1131 10.7787C14.8953 11.949 13.4056 12.5426 11.6854 12.5426ZM15.0356 3.29979C14.1015 2.40162 13.0057 1.96503 11.6854 1.96503C10.3653 1.96503 9.26932 2.40162 8.33502 3.29979C7.40092 4.19815 6.94667 5.25196 6.94667 6.52111C6.94667 7.79064 7.40092 8.84425 8.33502 9.74261C9.26932 10.641 10.3653 11.0776 11.6854 11.0776C13.0053 11.0776 14.1011 10.6408 15.0356 9.74261C15.9699 8.84444 16.4241 7.79064 16.4241 6.52111C16.4241 5.25196 15.9699 4.19815 15.0356 3.29979Z"
                fill={COLORS[theme]?.white}
              />
              <Path
                d="M0.727829 19.7237C0.762939 19.2366 0.833954 18.7052 0.938492 18.144C1.04402 17.5787 1.1799 17.0443 1.34256 16.5558C1.51077 16.0509 1.73909 15.5523 2.02176 15.0745C2.31474 14.5786 2.6591 14.1468 3.04552 13.7915C3.44958 13.4197 3.94431 13.1209 4.51639 12.9028C5.08649 12.686 5.71828 12.5761 6.3941 12.5761C6.65952 12.5761 6.9162 12.6808 7.41191 12.9912C7.717 13.1825 8.07385 13.4037 8.47217 13.6484C8.81276 13.8571 9.27415 14.0526 9.84406 14.2296C10.4001 14.4026 10.9646 14.4903 11.522 14.4903C12.079 14.4903 12.6436 14.4026 13.2 14.2296C13.7693 14.0528 14.2309 13.8573 14.5709 13.6486C14.9654 13.4062 15.3225 13.1849 15.6321 12.991C16.1274 12.6806 16.3841 12.5759 16.6495 12.5759C17.3256 12.5759 17.9572 12.686 18.5271 12.903C19.0987 13.1207 19.5937 13.4195 19.9981 13.7917C20.3845 14.1472 20.7289 14.5788 21.0217 15.0745C21.304 15.5523 21.5325 16.0507 21.7007 16.556C21.8631 17.0445 21.999 17.5787 22.1046 18.144C22.2093 18.7044 22.2801 19.236 22.3152 19.7243C22.3497 20.2017 22.3672 20.6985 22.3672 21.2006C22.3672 22.5056 21.9357 23.562 21.085 24.3412C20.2447 25.11 19.1331 25.4999 17.7808 25.4999H5.26164C3.90979 25.4999 2.79816 25.11 1.95769 24.3412C1.1067 23.5626 0.675262 22.5058 0.675262 21.2004C0.675461 20.6966 0.693115 20.1998 0.727829 19.7237ZM3.00822 23.2798C3.56345 23.7879 4.30057 24.0349 5.26184 24.0349H17.7808C18.7423 24.0349 19.4794 23.7879 20.0344 23.2799C20.5789 22.7816 20.8436 22.1012 20.8436 21.2006C20.8436 20.7321 20.8275 20.2696 20.7953 19.8256C20.764 19.3899 20.6999 18.9114 20.6049 18.4029C20.5111 17.9007 20.3917 17.4294 20.2496 17.0027C20.1134 16.5936 19.9275 16.1884 19.697 15.7982C19.477 15.4263 19.2239 15.1072 18.9446 14.8501C18.6834 14.6095 18.3541 14.4127 17.9661 14.2651C17.6072 14.1285 17.204 14.0537 16.7662 14.0425C16.7128 14.0698 16.6178 14.1218 16.4639 14.2183C16.1507 14.4146 15.7896 14.6385 15.3905 14.8836C14.9406 15.1594 14.361 15.4085 13.6685 15.6235C12.9606 15.8436 12.2385 15.9554 11.5218 15.9554C10.8051 15.9554 10.0829 15.8436 9.37532 15.6237C8.68224 15.4083 8.10281 15.1594 7.65233 14.8832C7.2439 14.6322 6.89299 14.4148 6.57977 14.2183C6.42584 14.122 6.33083 14.0698 6.27747 14.0425C5.83948 14.0537 5.4362 14.1285 5.07716 14.2651C4.68936 14.4127 4.36008 14.6097 4.09883 14.8501C3.81953 15.107 3.56642 15.4261 3.34644 15.7984C3.11574 16.1884 2.92967 16.5938 2.79359 17.0025C2.65137 17.4297 2.53175 17.9009 2.43813 18.4027C2.34331 18.9121 2.27904 19.3909 2.2477 19.8257V19.8261C2.21536 20.2684 2.1991 20.7308 2.1989 21.2006C2.1991 22.1014 2.46371 22.7816 3.00822 23.2798Z"
                fill={COLORS[theme]?.white}
              />
            </Svg>
            <Text style={[styles.drawerItem, {color: COLORS[theme]?.white}]}>
              PORTFOLIO
            </Text>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.transparent,
  },
  drawerItem: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: SIZES.h5,
  },
  switch: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: SIZES.h5,
    marginHorizontal: 5,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: COLORS.red,
    // marginTop: 10,
    marginBottom: 10,
    paddingLeft: 3,
    paddingRight: 10,
    paddingVertical: 7,
  },
  icons: {
    marginRight: 10,
    marginLeft: 0,
    width: 25,
    height: 25,
  },
  logo: {
    width: 25,
    height: 25,
  },
});

export default CustomDrawerContent;
