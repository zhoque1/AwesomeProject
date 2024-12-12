import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, TouchableOpacity,
} from 'react-native';
import BookComponent from "../components/book-component";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import { PieChart } from "react-native-gifted-charts";



const Carousel = ({ navigation }: { navigation:any }) => {
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
    const pieData = [
        {value: 54, color: '#177AD5', text: '54%'},
        {value: 30, color: '#79D2DE', text: '30%', focused: true},
        {value: 26, color: '#ED6665', text: '26%'},
    ];

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'Carousel'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text>
                            You are here in Carousel
                        </Text>
                    </TouchableOpacity>
                    <PieChart data = {data} donut />
                    <PieChart
                        donut
                        showText
                        textColor="black"
                        innerRadius={70}
                        showTextBackground
                        textBackgroundColor="white"
                        textBackgroundRadius={22}
                        data={pieData}
                        focusOnPress
                        inwardExtraLengthForFocused={70}
                        extraRadius={0}
                    />
                </View>
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

export default Carousel;
