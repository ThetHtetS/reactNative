import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import { themeState } from '../../constants/recoilConstants';

import { WebView } from 'react-native-webview';

const JobWebView = (props) => {
  const { url } = props;
  //const [theme, setTheme] = useRecoilState(themeState);
  return (
   
      
        <WebView
          source={{ uri: `${url}` }}
          containerStyle={{
            flex:1,
            width: '100%',
            height: '100%',
          }}
          javaScriptEnabled={true}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState={true}
          allowsFullscreenVideo
          onLoadEnd={() => {
            console.log('onLoadEnd');
          }}
          // renderLoading={() => (
          //   <View style={{ flex: 1, width: 100, height: 100, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
          //     <ActivityIndicator size="large"  />
          //     <Text style={{ }}>Loading...</Text>
          //   </View>
          // )}
        />

  
  );
};

export default JobWebView;

const styles = StyleSheet.create({});