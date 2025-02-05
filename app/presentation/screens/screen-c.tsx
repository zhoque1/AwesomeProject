import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, TouchableOpacity,
} from 'react-native';
import BookComponent from "../components/book-component";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
// import QRCode from "react-qr-code";
import QRCode from 'react-native-qrcode-svg';
import { setupPlayer, addTracks } from './../../../trackPlayerServices';
import TrackPlayer from 'react-native-track-player';
import { Playlist } from './play-list';



const ScreenC = ({ navigation }: { navigation:any }) => {
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [count, setCount] = useState(0);
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    useEffect(() => {
        async function setup() {
          let isSetup = await setupPlayer();
    
          const queue = await TrackPlayer.getQueue();
          if(isSetup && queue.length <= 0) {
            await addTracks();
          }
    
          setIsPlayerReady(isSetup);
        }
    
        setup();
      }, []);


    useEffect(() => {
        setCount(count + 1);
    }, []);

    const onClickCount = () => {
        setCount(count + 1);
    }

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'ScreenC'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    {
                    // isPlayerReady &&
                    <View>
                        {/* <Button title="Play" color="#777" onPress={() => TrackPlayer.play()}/>
                        <Button title="Pause" color="#777" onPress={() => TrackPlayer.pause()}/>
                        <Button title="Previous" color="#777" onPress={() => TrackPlayer.skipToPrevious()}/>
                        <Button title="Next" color="#777" onPress={() => TrackPlayer.skipToNext()}/> */}
                        <Playlist/>
                        <Button title="Play" color="#777" onPress={() => TrackPlayer.play()}/>
                        <Button title="Pause" color="#777" onPress={() => TrackPlayer.pause()}/>
                    </View>
                    
                    }
                    {/* <Text>
                        You clicked {count} times
                    </Text>
                    <TouchableOpacity onPress={onClickCount}>
                        <Text>
                            Click Here
                        </Text>
                    </TouchableOpacity>
                    <QRCode
                        value='https://www.loopnet.com/Listing/1499-Ridgecrest-St-Monterey-Park-CA/28433604/'
                        size={250}
                        color="black"
                        backgroundColor="white"
                        logo={require('../../assets/images/static_map.png')}
                        logoSize={60}
                        logoMargin={2}
                        logoBorderRadius={15}
                        logoBackgroundColor="yellow"
                    /> */}
                    

                </View>
            </SafeAreaView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        margin: 10,
    },
});

export default ScreenC;
