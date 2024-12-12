import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView, TouchableOpacity,
} from 'react-native';
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import { PieChart } from 'react-native-chart-kit';



export const ScreenVictoryPie = ({ navigation }: { navigation:any }) => {
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    const data = [
        {
            name: 'Category 1',
            value: 20,
            color: '#ffcc00',
        },
        {
            name: 'Category 2',
            value: 40,
            color: '#00ccff',
        },
        {
            name: 'Category 3',
            value: 30,
            color: '#ff00cc',
        },
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

                    <PieChart
                        data={data}
                        width={300}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#ffffff',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        accessor={'value'}
                        backgroundColor={'transparent'}
                        paddingLeft={'15'}
                        absolute
                        hasLegend={false} // Hide the default legend
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


