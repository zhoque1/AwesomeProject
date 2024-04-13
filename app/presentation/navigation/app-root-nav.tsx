import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./bottom-tab-nav";
import ScreenD from "../screens/screen-d";
import PlacardsView from "../screens/placards.view";
import PlacardDetailView from "../screens/placard-detail.view";
import {QueryClient} from "@tanstack/react-query/build/modern/index";
import SettingsView from "../screens/settings.view";



// export type RootStackParamList = {
//     BottomTabNav: undefined;
//     ScreenD: undefined;
//     PlacardsView: undefined;
//     PlacardDetailView: { id: number,  queryClient: QueryClient}
// };

const { Navigator, Screen, Group } = createNativeStackNavigator() // createNativeStackNavigator<RootStackParamList>();

export const StackNav = () => (
    <Navigator screenOptions={{
        headerShown: false,
    }} >
        <Screen name='BottomTabNav' component={BottomTabNav} />
        <Screen name='ScreenD' component={ScreenD} />
        <Screen name='PlacardsView' component={PlacardsView} />
        <Screen name='PlacardDetailView' component={PlacardDetailView} />
        <Screen name='SettingsView' component={SettingsView} />
    </Navigator>
);
const AppRootNav = () => (
    <NavigationContainer>
        <StackNav />
    </NavigationContainer>
);

export default AppRootNav
