import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenA from "../screens/screen-a";
import ScreenC from "../screens/screen-c";
import Carousel from "../screens/carousel";
import ScreenPieChart from "../screens/screen-pie-chart";
import {ScreenVictoryPie} from "../screens/screen-victory-pie";


export type ScreenANavStackParamList = {
    ScreenA: undefined;
    ScreenC: undefined;
    Carousel: undefined;
    ScreenPieChart: undefined;
    ScreenVictoryPie: undefined;
};

const { Navigator, Screen, Group } = createNativeStackNavigator<ScreenANavStackParamList>();

export const ScreenANav = () => (
    <Navigator screenOptions={{
        headerShown: false,
    }} >
        <Screen name='ScreenA' component={ScreenA} />
        <Screen name='ScreenC' component={ScreenC} />
        <Screen name='Carousel' component={Carousel} />
        <Screen name='ScreenPieChart' component={ScreenPieChart} />
        <Screen name='ScreenVictoryPie' component={ScreenVictoryPie} />
    </Navigator>
);
