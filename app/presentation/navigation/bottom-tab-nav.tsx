import ScreenB from "../screens/screen-b";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomNavigation, BottomNavigationTab, Icon, useTheme} from "@ui-kitten/components";
import t from "../../i18n/18n";
import {ScreenANav} from "./screen-a-nav";
import React from "react";


const BottomTabs = createBottomTabNavigator();

const BottomTabNav = () => {
    const theme = useTheme();

    const geIcon = (name: string) => <Icon name={name} style={{ width: 18, height: 18 }} />;

    const BottomTabBar = ({ navigation, state }:{navigation:any, state: any}) => (
        <BottomNavigation style={{paddingBottom:16}}
                          selectedIndex={state.index}
                          onSelect={index => {
                              navigation.navigate(state.routeNames[index])
                          }
                          }>
            <BottomNavigationTab title = {t('nav.TabA')} icon={geIcon('search')}  />
            <BottomNavigationTab title = {t('nav.TabB')} icon={geIcon('heart')} />
        </BottomNavigation>
    );

    return (
        <BottomTabs.Navigator tabBar={props => <BottomTabBar {...props} />}
                              screenOptions={{
                                  headerShown: false,

                              }}
        >
            <BottomTabs.Screen
                name="TabA"
                component={ScreenANav}
            />
            <BottomTabs.Screen
                name="TabB"
                component={ScreenB}
            />
        </BottomTabs.Navigator>
    )

}
export default BottomTabNav
