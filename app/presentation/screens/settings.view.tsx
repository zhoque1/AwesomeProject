import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, Switch,
} from 'react-native';
import BookComponent from "../components/book-component";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {getAllKeys, getDataBoolean, StorageKeys, storeData} from "../../di/storage-util";


const SettingsView = ({ navigation }: { navigation:any }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(getDataBoolean(StorageKeys.USE_MOCK_DATA));
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
        storeData(StorageKeys.USE_MOCK_DATA, !isSwitchOn)
        // const test = getDataBoolean(StorageKeys.USE_MOCK_DATA)
        // console.log("Stored data = "+ test)
        // const keys = getAllKeys()
        // console.log("All keys = "+ JSON.stringify(keys))
    }

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'Settings'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Text>Use Mock Data</Text>
                    </View>
                    <View style={styles.item}>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>
            </SafeAreaView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginEnd: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    item: {
        width: '50%', // is 50% of container width
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
});

export default SettingsView;
