import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { WebView } from 'react-native-webview';
import JobWebView from '../../components/WebView';
import { Button, Alert } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
import CustomHeader from '../../components/CustomHeader';

const Youtube = (props) => {

  const {navigation} = props;
  // const [playing, setPlaying] = useState(false);

  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //     Alert.alert("video has finished playing!");
  //   }
  // }, []);3p9LtOUg5fw

  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);

  let videoId = 'JMVqn_CMapc'
  return (
    <View style={styles.container}>
      <CustomHeader
        title="Youtube Player"
        navigation={navigation}
        isMain={false}
      />
      {/* <WebView
        style={styles.video}
        source={{ uri: 'https://www.youtube.com/watch?v=ExozFROU_sk' }} // Use the embed URL
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      /> */}
      {/* <YoutubePlayer
        height={300}
        play={playing}
        videoId={"Yz8ZeALLuHA"}
        onChangeState={onStateChange}
      /> */}
       
          <JobWebView url={`https://www.youtube.com/embed/${videoId}?controls=1`}/>
       
       <View style={{flex: 2}}>
          <Text> Hello </Text>
       </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // video: {
  //   width: '100%',
  //   height: 250,
  // },
});

export default Youtube;
