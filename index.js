/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MMKV} from "react-native-mmkv";
import { playbackService } from './trackPlayerServices';

// Create and initialise the MMKV instance
export const storage = new MMKV();
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);
