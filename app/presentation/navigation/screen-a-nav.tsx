import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenA from "../screens/screen-a";
import ScreenC from "../screens/screen-c";


export type ScreenANavStackParamList = {
    ScreenA: undefined;
    ScreenC: undefined;
};

const { Navigator, Screen, Group } = createNativeStackNavigator<ScreenANavStackParamList>();

export const ScreenANav = () => (
    <Navigator screenOptions={{
        headerShown: false,
    }} >
        <Screen name='ScreenA' component={ScreenA} />
        <Screen name='ScreenC' component={ScreenC} />

    </Navigator>
);
