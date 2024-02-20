import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./BottomTabNav";
import ScreenD from "../screens/ScreenD";
import PlacardsView from "../screens/PlacardsView";



export type RootStackParamList = {
    BottomTabNav: undefined;
    ScreenD: undefined;
    PlacardsView: undefined;
};

const { Navigator, Screen, Group } = createNativeStackNavigator<RootStackParamList>();

export const StackNav = () => (
    <Navigator screenOptions={{
        headerShown: false,
    }} >
        <Screen name='BottomTabNav' component={BottomTabNav} />
        <Screen name='ScreenD' component={ScreenD} />
        <Screen name='PlacardsView' component={PlacardsView} />
    </Navigator>
);
const AppRootNav = () => (
    <NavigationContainer>
        <StackNav />
    </NavigationContainer>
);

export default AppRootNav
