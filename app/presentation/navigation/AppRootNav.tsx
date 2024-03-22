import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./BottomTabNav";
import ScreenD from "../screens/ScreenD";
import PlacardsView from "../screens/PlacardsView";
import PlacardDetailView from "../screens/PlacardDetailView";
import {QueryClient} from "@tanstack/react-query/build/modern/index";
import SettingsView from "../screens/SettingsView";



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
