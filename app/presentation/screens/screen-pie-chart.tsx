import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, TouchableOpacity, ScrollView,
} from 'react-native';
import BookComponent from "../components/book-component";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import { PieChart } from "react-native-gifted-charts";
import ThreeDPie from "./example/piechart/ThreeDPie";
import SimplePie from "./example/piechart/SimplePie";
import ProgressPie from "./example/piechart/ProgressPie";
import SplitPie from "./example/piechart/SplitPie";
import PieChartFocusOnPress from "./example/piechart/PieChartFocusOnPress";
import InwardFocusPie from "./example/piechart/InwardFocusPie";
import BothSideFocusPie from "./example/piechart/BothSideFocusPie";
import PieWithZero from "./example/piechart/PieWithZero";
import {SimplePieV1} from "./example/piechart/SimplePieV1";



const ScreenPieChart = ({ navigation }: { navigation:any }) => {
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );
    const Separator = () => <View style={{height: 30}} />;
    const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
    const pieData = [
        {value: 54, color: '#177AD5', text: '54%'},
        {value: 30, color: '#79D2DE', text: '30%', focused: true},
        {value: 26, color: '#ED6665', text: '26%'},
    ];

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'Chart'} accessoryLeft={accessoryLeft} alignment="center" />
                <ScrollView>
                    <View style={styles.container}>
                        <SimplePieV1 />
                        <Separator />

                        <SimplePie />
                        <Separator />

                        <ProgressPie />
                        <Separator />

                        <SplitPie />
                        <Separator />

                        <ThreeDPie />
                        <Separator />

                        <PieChartFocusOnPress />
                        <Separator />

                        <InwardFocusPie />
                        <Separator />

                        <BothSideFocusPie />
                        <Separator />

                        <PieWithZero />
                        <Separator />
                    </View>
                </ScrollView>
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

export default ScreenPieChart;
