import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, TouchableOpacity,
} from 'react-native';
import BookComponent from "../components/book-component";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import QRCode from "react-qr-code";



const ScreenC = ({ navigation }: { navigation:any }) => {
    const [count, setCount] = useState(0);
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    useEffect(() => {
        setCount(count + 1);
    }, []);

    const onClickCount = () => {
        setCount(count + 1);
    }

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'ScreenC'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    <Text>
                        You clicked {count} times
                    </Text>
                    <TouchableOpacity onPress={onClickCount}>
                        <Text>
                            Click Here
                        </Text>
                    </TouchableOpacity>
                    <QRCode
                        value="http://awesome.link.qr"
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

export default ScreenC;
