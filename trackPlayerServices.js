import TrackPlayer, {
    AppKilledPlaybackBehavior,
    Capability,
    RepeatMode,
    Event
  } from 'react-native-track-player';
  
  export async function setupPlayer() {
    let isSetup = false;
    try {
      await TrackPlayer.getCurrentTrack();
      isSetup = true;
    }
    catch {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 2,
      });
  
      isSetup = true;
    }
    finally {
      return isSetup;
    }
  }
  
  export async function addTracks() {
    await TrackPlayer.add([
      {
        // id: '1',
        url: 'https://raw.githubusercontent.com/uit2712/RNPlaySound/develop/sounds/Tropic%20-%20Anno%20Domini%20Beats.mp3',
        title: 'Fluidity 1',
        artist: 'tobylane',
        duration: 60,
      },
      {
        // id: '2',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        title: 'Fluidity 2',
        artist: 'tobylane',
        duration: 60,
      },
      {
        // id: '3',
        url: 'https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3',
        title: 'Fluidity 3',
        artist: 'tobylane',
        duration: 60,
      }
    ]);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  }
  
  export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
      console.log('Event.RemotePause');
      TrackPlayer.pause();
    });
  
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
      console.log('Event.RemotePlay');
      TrackPlayer.play();
    });
  
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
      console.log('Event.RemoteNext');
      TrackPlayer.skipToNext();
    });
  
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
      console.log('Event.RemotePrevious');
      TrackPlayer.skipToPrevious();
    });
    TrackPlayer.addEventListener('remote-stop', () => {
        console.log('Event.RemoteDestroy');
        TrackPlayer.destroy()
    });
  }