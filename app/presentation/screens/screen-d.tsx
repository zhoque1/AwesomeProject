import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView,
} from 'react-native';
import BookComponent from "../components/book-component";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";


const ScreenD = ({ navigation }: { navigation:any }) => {
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'ScreenD'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    <Button
                        onPress={() => Alert.alert('You need to implement delegate')}
                        title="Reset All"
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

export default ScreenD;
