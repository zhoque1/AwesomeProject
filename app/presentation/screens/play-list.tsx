import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
  } from 'react-native';
  import TrackPlayer, {
    useTrackPlayerEvents,
    Event,
    State,
    Track
  } from 'react-native-track-player';



export const Playlist = ()=> {
    const [queue, setQueue] = useState<Track[]>([]);
    const [currentTrack, setCurrentTrack] = useState(0);
  
    async function loadPlaylist() {
      const queue = await TrackPlayer.getQueue();
      setQueue(queue);
    }
  
    useEffect(() => {
      loadPlaylist();
    }, []);
  
    useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
        let index = await TrackPlayer.getCurrentTrack();
        if(index)
        setCurrentTrack(index);
    });
  
    function PlaylistItem({index, title, isCurrent}:{index:any, title:any, isCurrent:boolean}) {
  
      function handleItemPress() {
        TrackPlayer.skip(index);
      }
  
      return (
        <TouchableOpacity onPress={handleItemPress}>
          <Text
            style={{  fontSize: 16,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 4,
              ...{backgroundColor: isCurrent ? '#666' : 'transparent'}}}>
          {title}
          </Text>
        </TouchableOpacity>
      );
    }
  
    return(
      <View>
        <View style={{ height:400, marginTop: 40,marginBottom: 40}}>
          <FlatList
            data={queue}
            renderItem={({item, index}) => <PlaylistItem
                                              index={index}
                                              title={item.title}
                                              isCurrent={currentTrack == index }/>
            }
          />
        </View>
      </View>
    );
  }

