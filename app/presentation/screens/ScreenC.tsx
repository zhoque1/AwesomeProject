import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView,
} from 'react-native';
import BookComponent from "../components/BookComponent";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";



const ScreenC = ({ navigation }: { navigation:any }) => {
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'ScreenC'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    <Button
                        onPress={() => Alert.alert('You need to implement delegate')}
                        title="Reset All from C"
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
